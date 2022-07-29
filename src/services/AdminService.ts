import {Requests} from './Requests';

export class AdminService extends Requests {
  deleteReflectionCommentById(commentId: unknown) {
    const path = `/deleteReflectionCommentById?commentId=${commentId}`;
    return this.delete(path);
  }

  deleteReflectionPostById(postId: unknown) {
    const path = `/deleteReflectionPostById?postId=${postId}`;
    return this.delete(path);
  }

  deleteScienceCommentById(commentId: unknown) {
    const path = `/deleteScienceCommentById?commentId=${commentId}`;
    return this.delete(path);
  }

  deleteSciencePostById(postId: unknown) {
    const path = `/deleteSciencePostById?postId=${postId}`;
    return this.delete(path);
  }

  deleteUserById(id: unknown) {
    const path = `/deleteUserById?id=${id}`;
    return this.delete(path);
  }

  deleteUserByUsername(username: unknown) {
    const path = `/deleteUserByUsername?username=${username}`;
    return this.delete(path);
  }
}