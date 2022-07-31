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
});