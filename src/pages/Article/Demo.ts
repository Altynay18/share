import {annotations} from './annotationList';
import {Requests} from '../../services/Requests';

interface AnnotationFilter {
  annotationIds?: string[],
  pageRange?: {
    startPage: number,
    endPage: number
  },
}

interface AnnotationUserProfile {
  name: string,
  id: string,
  firstName?: string,
  lastName?: string,
  username?: string
}

const API_KEY = '949e5531d9b947f887843f1c5bb2bd8f';

export class Demo extends Requests {
  readonly pdfUrl: any;
  readonly fileName: any;
  readonly fileId: string;
  readonly user: AnnotationUserProfile;
  readonly annotations: any;

  constructor({
                pdfUrl,
                fileId,
                fileName,
                user,
              }) {
    super();
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
          fileName,
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
          firstName: user?.firstName,
          lastName: user?.lastName,
          username: user?.username,
          id: user.id.toString(),
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

          /* API to register events listener */
          annotationManager.registerEventListener(
            function (event) {
              if (event?.data?.creator?.id === profile?.userProfile?.id) {
                console.log(event);
              } else {
                /* NOTE: unselectAnnotation() prevents user from pressing edit and delete buttons */
                annotationManager.unselectAnnotation();
              }
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

  async fetchAnnotationList() {

  }

  addAnnotationsToFile(annotationManager) {
    /* API to add annotations */
    annotationManager.addAnnotations(this.annotations)
      .then(function () {
        console.log('Annotations added through API successfully');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  makeDeleteAnnotation(id, annotationManager) {
    /* API to delete annotations based on page range filter */
    const filter: AnnotationFilter = {
      annotationIds: [id],
    };
    annotationManager.deleteAnnotations(filter)
      .then(function () {
        console.log('Deleted annotations based on page range filter');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getAllAnnotationsInFile(annotationManager) {
    /* API to get annotations after deletion */
    annotationManager.getAnnotations()
      .then(function (result) {
        console.log('GET annotations result after deleting annotations', result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  makeUpdateAnnotation() {
    // TODO UPDATE annotation
    /* API to update a single annotation */
    // const newComment = 'Preserving your legacy with Bodea life insurance plans.';
    // setTimeout(function () {
    //   annotations[3].bodyValue = newComment;
    //   const updatedAnnotation = annotations[3];
    //   annotationManager.updateAnnotation(updatedAnnotation)
    //     .then(function () {
    //       console.log('Annotation updated through API successfully');
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }, 3000);
  }

}