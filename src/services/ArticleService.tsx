import {Requests} from './Requests';

export class ArticleService extends Requests {
  uploadPdf(data: FormData) {
    const path = '/pdf?tags=fds';
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
    const path = `/annotation/global?` + new URLSearchParams(data);
    return this.post(path, {});
  }
}