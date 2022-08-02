import {Requests} from './Requests';

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
}