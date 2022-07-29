import {Requests} from './Requests';

export class PostService extends Requests{
  async addReflectionPost(obj: Object) {
    const path = '/reflection/create-post';
    const response = await this.post(path, obj);
    return response;
  }

  async addNewsPost(obj: Object) {
    const path = '/reflection/create-post';
    const response = await this.post(path, obj);
    return response;
  }

  async filterByTag(obj: {name: string}){
    const path = '/post_by_tag?offset=0&limit=10';
    const response = await this.post(path, obj);
    return response;
  }

  async getAllPosts(){
    const path = '/reflection/posts?page=0';
    const response = await this.get(path);
    return response;
  }
}