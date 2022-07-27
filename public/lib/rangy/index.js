const articleService = new ArticleService();
var serializedHighlights = decodeURIComponent(window.location.search.slice(window.location.search.indexOf('=') + 1));
var highlighter;

var initialDoc;
window.onload = async function () {
  rangy.init();

  const {highlightList, articleContent} = await articleService.getArticleInfo();
  appendHTML(articleContent);
  parseAllNotes();
  highlighter = rangy.createHighlighter();
  highlighter.addClassApplier(rangy.createClassApplier('note', {
    ignoreWhiteSpace: true,
    elementTagName: 'a',
    // elementAttributes:{id: generateID(null, highlightList)},
    elementProperties: {
      href: '#',
      onclick: function () {
        // var highlight = highlighter.getHighlightForElement(this);
        console.log('onclick', this);
        showSelectedHighlight(this.id);
      },
    },
    onElementCreate: function (el, thisEl) {
      console.log('created', thisEl);
      thisEl.elementAttributes = {id: handleNewID()};
      showSelectedHighlight(thisEl.elementAttributes.id);
    },
  }));

  if (serializedHighlights) {
    highlighter.deserialize(serializedHighlights);
  }
};


function noteSelectedText() {
  highlighter.highlightSelection('note', {containerElementId: 'article-content'});
}

function removeHighlightFromSelectedText() {
  highlighter.unhighlightSelection();
}
//
// function noteScopedSelectedText() {
//   highlighter.highlightSelection('note', {containerElementId: 'summary'});
// }

function reloadPage(button) {
  button.form.elements['serializedHighlights'].value = highlighter.serialize();
  button.form.submit();
}

function appendHTML(html) {
  const articleContent = document.getElementById('article-content');
  const controllers = `<div id="buttons">
        <h3>Highlighter</h3>
        <p>Make a selection in the document and use the buttons below to highlight and unhighlight.</p>
        <input type="button" ontouchstart="noteSelectedText();" onclick="noteSelectedText();" value="Add note to selection">
        <input type="button" ontouchstart="removeHighlightFromSelectedText();" onclick="removeHighlightFromSelectedText();" value="Remove highlights from selection">
        <input type="button" ontouchstart="noteScopedSelectedText();" onclick="noteScopedSelectedText();" value="Annotate selection within outlined paragraph">
    </div>`;
  articleContent.innerHTML = controllers + html;
}

function generateID(id, list) {
  const newId = id || 0;
  const isInArr = list.some((obj) => obj.id === newId);
  if (isInArr) return generateID(newId + 1, list);
  else return newId;
}

function showSelectedHighlight(highlightId) {
  const articleAnnotations = document.getElementById('article-annotations');
}

function updateArticle() {
  const articleContent = document.getElementById('article-content');
  articleService.uploadModifiedArticle(articleContent.innerHTML);
}

function handleHighlightClick() {

}

function saveChanges() {
  uploadEditedArticle();
}

function uploadEditedArticle() {
  const article = document.getElementById('article-content');
  console.log('upload Article', article.innerHTML);
  articleService.uploadModifiedArticle(article.innerHTML);
}

function parseAllNotes() {
  const list = document.querySelectorAll('.note');
  console.log(list);
}

function handleNewID() {
  const newID = articleService.createNewHighlight();

  console.log('NEW ID', newID, articleService.highlightList);
  return newID;
}
