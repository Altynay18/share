import {Requests} from './Requests';

export class Search extends Requests {
  searchByKeyword(keyword: string) {
    const params = {};
    const path = `/search`;
    return this.get(path);
  }
}