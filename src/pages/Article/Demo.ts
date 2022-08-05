import {annotations} from './annotationList';

interface AnnotationFilter {
  annotationIds?: string[],
  pageRange?: {
    startPage: number,
    endPage: number
  },
}

const API_KEY = '949e5531d9b947f887843f1c5bb2bd8f';

export class Demo {
  private pdfUrl: any;
  private fileName: any;
  private fileId: string;
  private user: any;
  private annotations: any;

  constructor({
                pdfUrl,
                fileId,
                fileName,
                user,
              }) {
    this.pdfUrl = pdfUrl;
    this.fileName = fileName;
    this.fileId = '6d07d124-ac85-43b3-a867-36930f502ac6';
    this.user = user;
    this.annotations = annotations;
  }

  init() {
    console.log(this);
    const pdfUrl = this.pdfUrl;
    const fileName = this.fileName;
    const fileId = this.fileId;
    const annotations = this.annotations;
    const user = this.user;
    const viewerConfig = {
      /* Enable commenting APIs */
      enableAnnotationAPIs: true,  /* Default value is false */
      includePDFAnnotations: true,
    };
    document.addEventListener('adobe_dc_view_sdk.ready', function () {
      // @ts-ignore
      const adobeDCView = new window.AdobeDC.View({
        clientId: API_KEY,
        divId: 'adobe-dc-view',
      });

      const previewFilePromise = adobeDCView.previewFile({
        content: {location: {url: pdfUrl}},
        metaData: {
          /* file name */
          fileName,
          /* file ID */
          id: fileId,
        },
        enableAnnotationAPIs: true,
        includePDFAnnotations: true,
      }, viewerConfig);


      adobeDCView.registerCallback(
        // @ts-ignore
        window.AdobeDC.View.Enum.CallbackType.SAVE_API,
        function (metaData, content, options) {
          const uint8Array = new Uint8Array(content);
          const blob = new Blob([uint8Array], {type: 'application/pdf'});
          const formData = new FormData();
          formData.append('file', blob);

          fetch(`${this.baseUrl}/pdf?id=${fileId}`, {
            method: 'PUT',
            body: formData,
          }).then();

          return new Promise((resolve, reject) => {
            resolve({
              // @ts-ignore
              code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
              data: {
                metaData,
              },
            });
          });
        },
        {
          autoSaveFrequency: 0,
          enableFocusPolling: false,
          showSaveButton: true,
        },
      );

      const profile = {
        userProfile: {
          name: user.name,
          firstName: user.name,
          lastName: user.name,
          email: user.name,
          id: user.name,
        },
      };

      adobeDCView.registerCallback(
        // @ts-ignore
        window.AdobeDC.View.Enum.CallbackType.GET_USER_PROFILE_API,
        function () {
          return new Promise((resolve, reject) => {
            resolve({
              // @ts-ignore
              code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
              data: profile,
            });
          });
        }, {});

      /* Use the annotation manager interface to invoke the commenting APIs*/
      previewFilePromise.then(function (adobeViewer) {
        adobeViewer.getAnnotationManager().then(function (annotationManager) {
          /* API to add annotations */
          annotationManager.addAnnotations(annotations)
            .then(function () {
              console.log('Annotations added through API successfully');
            })
            .catch(function (error) {
              console.log(error);
            });

          /* API to get all annotations */
          annotationManager.getAnnotations()
            .then(function (result) {
              console.log('GET all annotations', result);
            })
            .catch(function (error) {
              console.log(error);
            });

          /* API to delete annotations based on annotation ID filter */
          let filter: AnnotationFilter = {
            annotationIds: ['3adeae16-a868-4653-960e-613c048dddc5', '079d66a4-5ec2-4703-ae9d-30ccbb1aa84c'],
          };
          // TODO wrap deleteAnnotation with event listener
          annotationManager.deleteAnnotations(filter)
            .then(function () {
              console.log('Deleted annotations based on annotation ID filter.');
            })
            .catch(function (error) {
              console.log(error);
            });

          /* API to delete annotations based on page range filter */
          filter = {
            pageRange: {
              startPage: 4,
              endPage: 6,
            },
          };
          annotationManager.deleteAnnotations(filter)
            .then(function () {
              console.log('Deleted annotations based on page range filter');
            })
            .catch(function (error) {
              console.log(error);
            });

          /* API to get annotations after deletion */
          annotationManager.getAnnotations()
            .then(function (result) {
              console.log('GET annotations result after deleting annotations', result);
            })
            .catch(function (error) {
              console.log(error);
            });

          // TODO UPDATE annotation
          /* API to update a single annotation */
          const newComment = 'Preserving your legacy with Bodea life insurance plans.';
          setTimeout(function () {
            annotations[3].bodyValue = newComment;
            const updatedAnnotation = annotations[3];
            annotationManager.updateAnnotation(updatedAnnotation)
              .then(function () {
                console.log('Annotation updated through API successfully');
              })
              .catch(function (error) {
                console.log(error);
              });
          }, 3000);

          /* API to register events listener */
          annotationManager.registerEventListener(
            function (event) {
              annotationManager.unselectAnnotation();
            },
            {
              /* Pass the list of events in listenOn. */
              /* If no event is passed in listenOn, then all the annotation events will be received. */
              listenOn: ['ANNOTATION_SELECTED'],
            },
          );
        });
      });

    });
  }
}