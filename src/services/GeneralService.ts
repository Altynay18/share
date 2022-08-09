import {Requests} from './Requests';

export class GeneralService extends Requests {
  async getSchoolList() {
    const path = '/';
    // return this.get(path);
    return await ['Руководитель SHARE', 'Тренер SHARE', 'Школа №02', '№27', '№35', '№37', '№50', '№53', '№56', '№58', '№59', '№60', '№62', '№65', '№66', '№67', '№68', '№70', '№72', '№73', '№74', '№76', '№77', '№91'];
  }

  getRoleList() {
    const path = '/';
    // return this.get(path);
    return ['Член основной пятёрки SHARE', 'Координатор SHARE', 'Школьный координатор SHARE', 'Сетевой координатор SHARE', 'Волонтёр SHARE'];
  }
  getTagList(){
    const path = '/';
    return this.get(path);
  }
}