document.addEventListener('adobe_dc_view_sdk.ready', function () {
  var adobeDCView = new AdobeDC.View({
    clientId: 'e17ad4a437e84a7aa1224bafa944fc29',
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
      email: '${user.name}',
      id: '${user.name}'
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
