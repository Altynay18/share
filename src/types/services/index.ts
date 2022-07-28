import {ROLES} from '../../constants';

export interface RequestConfig {
  method?: string;
  body?: string | URLSearchParams;
  headers?: Headers;
}

export interface RegisterData {
  email: string,
  name: string,
  surname: string,
  city: string,
  school: string,
  password: string,
  passwordConfirm: string,
  role: ROLES
}

export interface ProjectData {
  project_name: string,
  users: string,
  description: string
}

export interface MeetingData {
  email: string,
}