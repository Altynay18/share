import {Requests} from './Requests';
import {ROUTES} from '../constants';
import {RegisterData} from '../types/services';

export class Auth extends Requests {

  async login(obj: Object) {
    const path = '/authenticate';
    const response = await this.post(path, obj);
    if (response) {
      window.sessionStorage.setItem('access_token', response.token);
      window.location.replace(ROUTES.PROFILE);
    }
  }

  async register(data: RegisterData) {
    const path = '/register';
    const response = await this.post(path, data);
  }
}