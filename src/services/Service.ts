import {useNavigate} from 'react-router-dom';
import {Requests} from './Requests';
import {ROUTES} from '../constants/index'
export class Service extends Requests {
  navigate = useNavigate();

  async login(obj: Object) {
    const path = '/authenticate';
    const response = await this.post(path, obj);
    console.log("resp", response)
    if(response){
      window.sessionStorage.setItem('access_token', response.token);
      this.navigate(ROUTES.PROFILE);
    } 
  }


  async addReflectionPost(obj: Object) {
    const path = '/reflection/create-post';
    console.log('obj',obj)
    const response = await this.post(path, obj);
    return response;
  }

  async addNewsPost(obj: Object) {  
    const path = '/reflection/create-post';
    const response = await this.post(path, obj);
    return response;
  }

  async filterByTag(obj: {name: string}){
    const path = '/post_by_tag?offset=0&limit=10';
    console.log(obj)
    const response = await this.post(path, obj);
    return response;
  }

  async getAllPosts(){
    const path = '/reflection/posts?page=0';
    const response = await this.get(path);
    return response;
  }































}
