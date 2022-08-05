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

  async getAnnotationList() {
    const path = '';
    // todo return this.get(path);
    return [];
  }

  addAnnotation(data) {
    const path = `/annotation/global/${data.fileId}?` + new URLSearchParams({annotation: JSON.stringify(data.annotation)});
    return this.post(path, {});
  }
}