import {Requests} from './Requests';
import {ProjectData, ProjectSearch} from '../types/services';

export class ProjectService extends Requests {
  getProjects() {
    const path = '/projects';
    return this.get(path);
  }

  createProject(data: ProjectData) {
    const params = `?title=${data.title}&description=${data.description}`;
    const path = `/projects` + params;
    return this.post(path, {users: [data.users]});
  }

  editProject(data: ProjectData) {
    const path = '/editProject';
    return this.post(path, data);
  }

  getProjectPosts(id) {
    const path = `/project/${id}/posts`;
    return this.get(path);
  }

  addProjectPost(data) {
    const path = '/project/addPost?' + new URLSearchParams(data);
    return this.post(path, {});
  }

  search(data: ProjectSearch) {
    const path = `/project/search?` + new URLSearchParams(data);
    return this.get(path)
  }
}