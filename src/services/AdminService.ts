import {Requests} from './Requests';

export class AdminService extends Requests {
  getPendingUsers() {
    const path = '/admin_users';
    return this.get(path);
  }

  getAdminInfo() {
    const path = '/admin';
    return this.get(path);
  }

  activateUser(data) {
    const path = `/activate-user/${data.id}`;
    return this.post(path, data);
  }

  deleteUser(id){
    const path = `/deleteUserById?id=${id}`;
    return this.delete(path);
  }
}