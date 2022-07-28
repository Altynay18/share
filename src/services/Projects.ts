import {Requests} from './Requests';
import {ProjectData} from '../types/services';

export class Projects extends Requests {
  getProjects() {
    const path = '/projects';
    return this.get(path);
  }

  createProject(data: ProjectData) {
    const path = '';
    return this.get(path, data);
  }

  editProject(data: ProjectData) {
    const path = '/editProject';
    return this.post(path, data);
  }
}