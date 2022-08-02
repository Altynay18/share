import {Requests} from './Requests';
import {ProjectData, ProjectPost} from '../types/services';

export class ProjectService extends Requests {
  getProjects() {
    const path = '/projects';
    return this.get(path);
  }

  createProject(data: ProjectData) {
    const formattedUsers = 'string';
    const params = `?title=${data.title}&description=${data.description}&users=${formattedUsers}`;
    const path = `/projects` + params;
    return this.post(path, {});
  }

  editProject(data: ProjectData) {
    const path = '/editProject';
    return this.post(path, data);
  }

  getProject(id) {
    const path = `/project/${id}/messages`;
    return this.get(path);
  }

  addProjectPost(data: ProjectPost) {
    const path = `/project/${data.id}/addMessage?name=${data.name}&message=${data.message}`;
    return this.post(path, data);
  }
}