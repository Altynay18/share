/* API to register events listener */
annotationManager.registerEventListener(
  function (event) {
    annotationManager.unselectAnnotation();
  },
  {
    // https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/howtodata/#annotation-events
    /* Pass the list of events in listenOn. */
    /* If no event is passed in listenOn, then all the annotation events will be received. */
    listenOn: [
      "ANNOTATION_ADDED", "ANNOTATION_CLICKED"
    ]
  }
);