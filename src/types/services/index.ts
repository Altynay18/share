import {ROLES} from '../../constants';

export interface RequestConfig {
  method?: string;
  body?: string | URLSearchParams;
  headers?: Headers;
}

export interface RegisterData {
  firstname: string,
  lastname: string,
  city: string,
  school: string,
  password: string,
  passwordConfirm: string,
  role: ROLES,
  achievements: string,
  title: string,
  filePath?: string
}

export interface ProjectData {
  title: string,
  users: string,
  description: string
}

export interface MeetingData {
  email: string,
}

export interface ProjectPostData {
  date: string;
  id: 1;
  text: string;
  title: null;
  userfirstname: string;
  userlastname: string;
}

export interface FindUser extends Record<string, string> {
  firstName: string,
  lastName: string,
  role: string,
  school: string
}

export interface CommentData {
  content: string,
  postId: number,
  name: string
}

export interface PostData {
  tag: Tag[],
  title: string,
  id: number,
  content: string,
  comment: CommentData[],
}

export interface Tag {
  tag: string;
}