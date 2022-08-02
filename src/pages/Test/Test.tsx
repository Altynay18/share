// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {ArticleService} from '../../services/ArticleService';
import {useParams} from 'react-router';
import {BASE_URL} from '../../services/Requests';

type Props = {};

export function Test(props: Props) {
  const [article, setArticle] = useState(null);
  const {articleId} = useParams()
  const articleService = new ArticleService();
  const pdfUrl = `http://159.89.104.8:8022/pdf/${articleId}`;
  const baseUrl = BASE_URL
  const user = {
    name: "SDFDSF"
  }
  async function getPdf() {
    const res = await articleService.getPdf(2);
    setArticle(res);
  }

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
        content: {location: {url: '${pdfUrl}'}},
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
          formData.append('file', blob);
    
          fetch("${baseUrl}/pdf?id=${articleId}", {
            method: 'PUT',
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
            name: '${user.name}',
            firstName: '${user.name}',
            lastName: '${user.name}',
            email: '${user.name}'
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
  }, [articleId]);

  useEffect(() => {
    getPdf();
  }, []);

  console.log('parsed article', article);
  return (
    <div id="adobe-dc-view"></div>
  );
}
