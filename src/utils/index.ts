import {INPUT_FIELD} from '../constants';

export function generateID(id, list) {
  const newId = id || 0;
  const isInArr = list.some((obj) => obj.id === newId);
  if (isInArr) return generateID(newId + 1, list);
  else return newId;
}

export function validateRegex(str: string, field: string): boolean {
  switch (field) {
    case INPUT_FIELD.PASSWORD: {
      const reg = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}/g;
      return reg.test(str);
    }
    case INPUT_FIELD.EMAIL: {
      const reg = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/g;
      return reg.test(str);
    }
    case INPUT_FIELD.NAME: {
      const reg = /^[A-Za-zА-Яа-яәғқңөұүhіӘҒҚҢӨҰҮҺІ-]{1,}$/g;
      return reg.test(str);
    }
    case INPUT_FIELD.SURNAME: {
      const reg = /^[A-Za-zА-Яа-яәғқңөұүhіӘҒҚҢӨҰҮҺІ-]{1,}$/g;
      return reg.test(str);
    }
    case INPUT_FIELD.PHONE: {
      const reg = /^\+?[0-9]{8,15}$/g;
      return reg.test(str);
    }
    // TODO extra fields
    default: {
      return false;
    }
  }
}