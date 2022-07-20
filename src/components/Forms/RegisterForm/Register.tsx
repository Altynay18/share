// @flow
import * as React from 'react';
import styles from './Register.module.scss';
import {Input} from '../../Input/Input';
import DefaultButton from '../../DefaultButton';
import {ChangeEvent} from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../constants';

type Props = {

};

export function Register(props: Props) {
  const handleChange = (e: ChangeEvent) => {

  };

  const handleClick = () => {

  };
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Авторизация</h2>
      <Input placeholder={'Почта'} name={'login'} error={'fsdfsd'} value={''}
             onChange={handleChange} />
      <Input placeholder={'Имя'} name={'login'} error={'fsdfsd'} value={''}
             onChange={handleChange} />
      <Input placeholder={'Фамилия'} name={'login'} error={'fsdfsd'} value={''}
             onChange={handleChange} />
      <Input placeholder={'Город'} name={'login'} error={'fsdfsd'} value={''}
             onChange={handleChange} />
      <Input placeholder={'Школа'} name={'login'} error={'fsdfsd'} value={''}
             onChange={handleChange} />
      <Input placeholder={'Пароль'} name={'password'} error={'fsdfsd'} value={''}
             onChange={handleChange} />
      <Input placeholder={'Пароль'} name={'password'} error={'fsdfsd'} value={''}
             onChange={handleChange} />
      <DefaultButton onclick={handleClick}>Зарегистрироваться</DefaultButton>
      <div>Есть аккаунт? <Link to={ROUTES.LOGIN}><span className={styles.link}>Войдите</span></Link></div>
    </form>
  );
};