// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {ArticleService} from '../../services/ArticleService';
import {useParams} from 'react-router';
import {BASE_URL} from '../../services/Requests';
import {Demo} from './Demo';
// import {annotationsList} from './annotationList';

type Props = {};

export function Article(props: Props) {
  const [article, setArticle] = useState(null);
  const {articleId} = useParams();
  const articleService = new ArticleService();
  const pdfUrl = `http://159.89.104.8:8022/pdf/${articleId}`;
  const baseUrl = BASE_URL;
  const user = {
    name: 'John Doe',
    id: 1
  };
  const demo = new Demo({
    pdfUrl,
    fileId: articleId,
    fileName: 'Bodea Brochure.pdf',
    user
  });

  async function getPdf() {
    const res = await articleService.getPdf(2);
    setArticle(res);
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';
    script.async = true;
    document.body.appendChild(script);
    demo.init()
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   const scriptTag = document.createElement('script');
  //
  //   script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';
  //   script.async = true;
  //
  //   const fileName = 'Bodea Brochure.pdf';
  //   scriptTag.text = `
  //
  //   var viewerConfig = {
  //     /* Enable commenting APIs */
  //     enableAnnotationAPIs: true,  /* Default value is false */
  //   };
  //   document.addEventListener('adobe_dc_view_sdk.ready', function () {
  //     var adobeDCView = new AdobeDC.View({
  //       clientId: '949e5531d9b947f887843f1c5bb2bd8f',
  //       divId: 'adobe-dc-view',
  //     });
  //
  //     var previewFilePromise = adobeDCView.previewFile({
  //       content: {location: {url: '${pdfUrl}'}},
  //       metaData: {
  //         fileName: '${fileName}',
  //         id: '${articleId}',
  //       },
  //       enableAnnotationAPIs: true,
  //       includePDFAnnotations: true
  //     }, viewerConfig);
  //
  //     adobeDCView.registerCallback(
  //       AdobeDC.View.Enum.CallbackType.SAVE_API,
  //         function (metaData, content, options) {
  //           var uint8Array = new Uint8Array(content);
  //           var blob = new Blob([uint8Array], { type: 'application/pdf' });
  //           const formData = new FormData();
  //           formData.append('file', blob);
  //
  //           fetch("${baseUrl}/pdf?id=${articleId}", {
  //             method: 'PUT',
  //             body: formData,
  //           })
  //
  //           return new Promise((resolve, reject) => {
  //             resolve({
  //               code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
  //               data: {
  //                 metaData
  //               }
  //             });
  //           });
  //         },
  //         {
  //           autoSaveFrequency: 0,
  //           enableFocusPolling: false,
  //           showSaveButton: true
  //         }
  //       );
  //
  //       const profile = {
  //         userProfile: {
  //             name: '${user.name}',
  //             firstName: '${user.name}',
  //             lastName: '${user.name}',
  //             email: '${user.name}',
  //             id: '${user.name}'
  //         }
  //       };
  //
  //       adobeDCView.registerCallback(
  //          AdobeDC.View.Enum.CallbackType.GET_USER_PROFILE_API,
  //          function() {
  //             return new Promise((resolve, reject) => {
  //                resolve({
  //                   code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
  //                   data: profile
  //                });
  //             });
  //          },
  //       {});
  //
  //     /* Use the annotation manager interface to invoke the commenting APIs*/
  //     previewFilePromise.then(function (adobeViewer) {
  //       adobeViewer.getAnnotationManager().then(function (annotationManager) {
  //         /* API to add annotations */
  //         annotationManager.addAnnotations(annotations)
  //           .then(function () {
  //             console.log('Annotations added through API successfully');
  //           })
  //           .catch(function (error) {
  //             console.log(error);
  //           });
  //
  //         /* API to get all annotations */
  //         annotationManager.getAnnotations()
  //           .then(function (result) {
  //             console.log('GET all annotations', result);
  //           })
  //           .catch(function (error) {
  //             console.log(error);
  //           });
  //
  //         /* API to delete annotations based on annotation ID filter */
  //         var filter = {
  //           annotationIds: ['3adeae16-a868-4653-960e-613c048dddc5', '079d66a4-5ec2-4703-ae9d-30ccbb1aa84c'],
  //         };
  //         annotationManager.deleteAnnotations(filter)
  //           .then(function () {
  //             console.log('Deleted annotations based on annotation ID filter.');
  //           })
  //           .catch(function (error) {
  //             console.log(error);
  //           });
  //
  //         /* API to delete annotations based on page range filter */
  //         filter = {
  //           pageRange: {
  //             startPage: 4,
  //             endPage: 6,
  //           },
  //         };
  //         annotationManager.deleteAnnotations(filter)
  //           .then(function () {
  //             console.log('Deleted annotations based on page range filter');
  //           })
  //           .catch(function (error) {
  //             console.log(error);
  //           });
  //
  //         /* API to get annotations after deletion */
  //         annotationManager.getAnnotations()
  //           .then(function (result) {
  //             console.log('GET annotations result after deleting annotations', result);
  {/*          })*/
  }
  {/*          .catch(function (error) {*/
  }
  {/*            console.log(error);*/
  }
  {/*          });*/
  }
  {/*  */
  }
  //         /* API to update a single annotation */
  //         const newComment = 'Preserving your legacy with Bodea life insurance plans.';
  //         setTimeout(function () {
  //           annotations[3].bodyValue = newComment;
  //           const updatedAnnotation = annotations[3];
  //           annotationManager.updateAnnotation(updatedAnnotation)
  //             .then(function () {
  //               console.log('Annotation updated through API successfully');
  //             })
  //             .catch(function (error) {
  //               console.log(error);
  //             });
  //         }, 3000);
  //       });
  //     });
  //
  //     });
  //   `;
  //   scriptTag.async = true;
  //
  //   document.body.appendChild(script);
  //   document.body.appendChild(scriptTag);
  //
  //   return () => {
  //     document.body.removeChild(script);
  //     document.body.removeChild(scriptTag);
  //   };
  // }, [articleId]);

  useEffect(() => {
    getPdf();
  }, []);

  return (
    <div id="adobe-dc-view"></div>
  );
}
