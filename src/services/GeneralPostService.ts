import {Requests} from './Requests';
import {CommentData, GeneralSearch} from '../types/services';

export class GeneralPostService extends Requests {
  async addPost(obj: Object) {
    const path = '/general/post';
    return await this.post(path, obj);
  }

  async getAllPosts() {
    const path = '/general/allPosts';
    return await this.get(path);
  }

  async updatePost(data) {
    const path = `/general/post/${data.postId}`;
    return this.post(path, data);
  }

  async getMyPosts() {
    const path = '/general/getUserPosts';
    return await this.get(path);
  }

  search(data: GeneralSearch) {
    const path = '/general/search?' + new URLSearchParams(data);
    return this.get(path);
  }

  addComment(data: CommentData) {
    const path = '/post-comment?' + new URLSearchParams(data);
    return this.post(path, {});
  }
}