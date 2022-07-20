// @flow
import * as React from 'react';
import styles from './Login.module.scss';
import {Input} from '../../Input/Input';
import {ChangeEvent} from 'react';
import DefaultButton from '../../DefaultButton';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../constants';

type Props = {};

export function Login(props: Props) {
  const handleChange = (e: ChangeEvent) => {

  };

  const handleClick = () => {

  };
  const handleSubmit = () => {
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Авторизация</h2>
      <Input placeholder={'Почта'} name={'login'} error={'fsdfsd'} value={''}
             onChange={handleChange} />
      <Input placeholder={'Пароль'} name={'password'} error={'fsdfsd'}
             value={''}
             onChange={handleChange} />
      <DefaultButton>Войти</DefaultButton>
      <div>Нет аккаунта? <Link to={ROUTES.REGISTER}><span
        className={styles.link}>Зарегистрируйтесь</span></Link></div>
    </form>
  );
}
