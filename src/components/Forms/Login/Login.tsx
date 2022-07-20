// @flow
import * as React from 'react';
import styles from './Login.module.scss';
import {Input} from '../../Input/Input';
import {ChangeEvent} from 'react';
import DefaultButton from '../../DefaultButton';

type Props = {};

export function Login(props: Props) {
  const handleChange = (e: ChangeEvent) => {

  };

  const handleClick = () => {

  };
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Авторизация</h2>
      <Input name={'login'} error={'fsdfsd'} value={''}
             onChange={handleChange} />
      <Input name={'password'} error={'fsdfsd'} value={''}
             onChange={handleChange} />
      <DefaultButton onclick={handleClick}>Войти</DefaultButton>
    </form>
  );
}
