import {Requests} from './Requests';

export class ArticleService extends Requests {
  private articleId: number;
  private page: number;
  private articleContent: string;
  private highlightList: any[];

  constructor() {
    super();
    const {articleId, page} = this.#getArticleParams();
    this.articleId = articleId;
    this.page = page;
    this.articleContent = '<div id="content"></div>';
    this.highlightList = [];
  }

  async getArticleInfo() {
    // todo fetch high
    this.highlightList = [{
      id: 0, annotations: [{
        author: 'John Doe',
        content: 'good point',
        date: '12.02.2022',
      }],
    }];

    this.articleContent = `
        <div id="content">
          <b>Association football</b> is a sport played between two teams. It is usually called <b>football</b>, but in
          some countries, such as the United States, it is called <b>soccer</b>. In
          Japan, New Zealand, South Africa, Australia, Canada and
          Republic of Ireland, both words are commonly used.
          
          <b>Association football</b> is a sport played between two teams. It is usually called <b>football</b>, but in
          some countries, such as the United States, it is called <b>soccer</b>. In
          Japan, New Zealand, South Africa, Australia, Canada and
          Republic of Ireland, both words are commonly used.
          
          <b>Association football</b> is a sport played between two teams. It is usually called <b>football</b>, but in
          some countries, such as the United States, it is called <b>soccer</b>. In
          Japan, New Zealand, South Africa, Australia, Canada and
          Republic of Ireland, both words are commonly used.
        </div>
      `;
    return {
      highlightList: this.highlightList,
      articleContent: this.articleContent,
    };
  }

  async getAnnotationList() {
    const path = '';
    // todo return this.get(path);
    return [];
  }

  uploadModifiedArticle() {
    const currentArticle = document.getElementById('article-content');
    console.log('loading article', currentArticle);
  }

  createNewHighlight() {
    const newID = this.#generateID(null, this.highlightList);
    const highlight = {
      id: newID, annotations: [],
    };
    this.highlightList.push(highlight);
    return newID;
  }

  addAnnotation(highlightId, content) {
    const highlight = {
      id: highlightId, annotations: [content],
    };
    this.highlightList.push(highlight);
    this.uploadModifiedArticle();
  }

  #getArticleParams() {
    // todo window.location get params
    return {articleId: 0, page: 0};
  }

  #generateID(id, list) {
    const newId = id || 0;
    const isInArr = list.some((obj) => obj.id === newId);
    if (isInArr) return this.#generateID(newId + 1, list);
    else return newId;
  }
}