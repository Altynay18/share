import {Requests} from './Requests';
import {ReflectionSearch} from '../types/services';

export class ReflectionPostService extends Requests {
  async addReflectionPost(obj: Object) {
    const path = '/reflection/post';
    return await this.post(path, obj);
  }

  async filterByTag(obj: { tag: string }) {
    const path = '/post_by_tag?offset=0&limit=10';
    return await this.post(path, obj);
  }

  async getAllPosts() {
    const path = '/reflection/all/posts';
    return await this.get(path);
  }

  search(data: ReflectionSearch) {
    const path = '/reflection/all/posts?' + new URLSearchParams(data);
    return this.get(path);
  }

  addComment(data) {
    const path = '/post_by_tag?' + new URLSearchParams(data);
    return this.post(path, []);
  }
}