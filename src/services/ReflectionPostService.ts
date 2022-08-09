import {Requests} from './Requests';
import {PostData, ReflectionSearch} from '../types/services';

export class ReflectionPostService extends Requests {
  async addPost(formData) {
    const path = '/reflection/post';
    return await this.postFile(path, formData);
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
    const path = '/reflection/search?' + new URLSearchParams(data);
    return this.get(path);
  }

  addComment(data) {
    const path = '/reflection-comment?' + new URLSearchParams(data);
    return this.post(path, {});
  }
}