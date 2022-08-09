import {Requests} from './Requests';

export class ArticleService extends Requests {
  uploadPdf(data: FormData, tags) {
    console.log(tags)
    const path = `/pdf?tags=${tags}`;
    return this.postFile(path, data);
  }

  getPdfList() {
    const path = '/pdf';
    return this.get(path);
  }

  getPdf(articleId) {
    const path = `/pdf/${articleId}`;
    return this.getFile(path);
  }

  async getGlobalAnnotationList(pdfId) {
    const path = `/annotation/global/${pdfId}`;
    return this.get(path);
  }

  addAnnotation(data) {
    const path = `/annotation/global?pdfId=${data.pdfId}`;
    return this.post(path, data.annotation);
  }

  filterByTag(tagName: string){
    const path = `/pdf/getPdfListByTagName/${tagName}`;
    return this.get(path);
  }
}