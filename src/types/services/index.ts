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
  userfirstname?: string;
  userlastname?: string;
}

export interface FindUser extends Record<string, string> {
  firstName: string,
  lastName: string,
  role: string,
  school: string
}

export interface CommentData extends Record<string, string> {
  content: string,
  postId: string,
  name: string,
  ownername?: string,
  ownerlastname?: string,
}

export interface PostData {
  tag: Tag[],
  title: string,
  id: number,
  content: string,
  comment: CommentData[],
  username?: string
}

export interface Tag {
  tag: string;
}

export interface ProjectSearch extends Record<string, string> {
  title: string,
  description: string
}

export interface ReflectionSearch extends GeneralSearch {
  tag: string;
}

export interface GeneralSearch extends Record<string, string> {
  title: string,
  content: string,
}