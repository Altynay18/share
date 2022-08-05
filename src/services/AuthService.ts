import { Requests } from './Requests';
import { ROUTES } from '../constants';
import { FindUser, RegisterData } from '../types/services';
import Alert from '@mui/material/Alert';

export class AuthService extends Requests {
	async login(obj: Object) {
		const path = '/auth';
		const response = await this.post(path, obj);
		// if (response) {
		// 	window.sessionStorage.setItem('access_token', response.token);
		// 	window.sessionStorage.setItem('role', response.role);
		// 	window.location.replace(ROUTES.PROFILE);
		// }
		return response;
	}

	async register(data: RegisterData) {
		const path = '/full-register';
		return await this.post(path, data);
	}

	// todo check swagger for method type
	async logout() {
		const path = '/logout';
		return this.get(path);
	}

	getUser(userId) {
		const path = `/users/${userId}`;
		return this.get(path);
	}
	getCurrentUser() {
		const path = '/current-user';
		return this.get(path);
	}
	getAllUser() {
		const path = '/users';
		return this.get(path);
	}

	editUser(data: unknown) {
		const path = '';
		return this.post(path, data);
	}

	findUsers(data: FindUser) {
		const params = new URLSearchParams(data).toString();
		const path = '/search?' + params;
		return this.get(path);
	}

	getAllRoles() {
		const path = '/users';
		return this.get(path);
	}
}
