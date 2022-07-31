// @flow
import * as React from 'react';
import {useEffect} from 'react';

type Props = {};

export function Test(props: Props) {
  useEffect(() => {
    const script = document.createElement('script');
    const scriptTag = document.createElement('script');

    script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';
    script.async = true;

    scriptTag.text = `    
    document.addEventListener('adobe_dc_view_sdk.ready', function () {
    var adobeDCView = new AdobeDC.View({
        clientId: '949e5531d9b947f887843f1c5bb2bd8f',
        divId: 'adobe-dc-view',
      });
      adobeDCView.previewFile({
        content: {location: {url: 'https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf'}},
        metaData: {fileName: 'Bodea Brochure.pdf'},
        enableAnnotationAPIs: true,
        includePDFAnnotations: true
      });
      
      adobeDCView.registerCallback(
      AdobeDC.View.Enum.CallbackType.SAVE_API,
        function (metaData, content, options) {
          var uint8Array = new Uint8Array(content);
          var blob = new Blob([uint8Array], { type: 'application/pdf' });
          formData = new FormData();
          formData.append('pdfFile', blob);
    
          fetch("https://practicalpdf.com/code-pens/reflect/", {
            method: 'POST',
            body: formData,
          })
    
          return new Promise((resolve, reject) => {
            resolve({
              code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
              data: {
                metaData
              }
            });
          });
        },
        {
          autoSaveFrequency: 0,
          enableFocusPolling: false,
          showSaveButton: true
        }
      );
      
      const profile = {
        userProfile: {
            name: 'John Doe',
            firstName: 'John',
            lastName: 'Doe',
            email: 'doe@email.com'
        }
      };

      adobeDCView.registerCallback(
         AdobeDC.View.Enum.CallbackType.GET_USER_PROFILE_API,
         function() {
            return new Promise((resolve, reject) => {
               resolve({
                  code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
                  data: profile
               });
            });
         },
      {});
    });
    `;
    scriptTag.async = true;

    document.body.appendChild(script);
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <div id="adobe-dc-view"></div>
  );
}
