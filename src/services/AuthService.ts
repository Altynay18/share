import {Requests} from './Requests';
import {ROUTES} from '../constants';
import {RegisterData} from '../types/services';

export class AuthService extends Requests {
  async login(obj: Object) {
    const path = '/auth';
    const response = await this.post(path, obj);
    if (response) {
      window.sessionStorage.setItem('access_token', response.token);
      window.location.replace(ROUTES.PROFILE);
    }
  }

  async register(data: RegisterData) {
    const path = '/register';
    return await this.post(path, data);
  }

  // todo check swagger for method type
  async logout() {
    const path = '/logout';
    return this.get(path);
  }

  getUser() {
    const path = '/current-user';
    return this.get(path);
  }

  editUser(data: unknown) {
    const path = '';
    return this.post(path, data);
  }
}