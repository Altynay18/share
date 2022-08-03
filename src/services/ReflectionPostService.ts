import {Requests} from './Requests';

export class ReflectionPostService extends Requests{
  async addReflectionPost(obj: Object) {
    const path = '/reflection/post';
    return await this.post(path, obj);
  }

  async filterByTag(obj: {tag: string}){
    const path = '/post_by_tag?offset=0&limit=10';
    return await this.post(path, obj);
  }

  async getAllPosts(){
    const path = '/reflection/all/posts';
    return await this.get(path);
  }
}