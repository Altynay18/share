import {Requests} from './Requests';

export class PdfService extends Requests {
  uploadPdf(data: unknown) {
    const path = '/pdf';
    return this.post(path, data);
  }

  getPdfList(id: unknown) {
    const path = `/pdf?${id}`;
    return this.get(path);
  }
}