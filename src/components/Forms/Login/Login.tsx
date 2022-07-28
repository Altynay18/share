// @flow
import * as React from 'react';
import styles from './Login.module.scss';
import {Input} from '../../Input/Input';
import {ChangeEvent} from 'react';
import DefaultButton from '../../DefaultButton';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../constants';
import {useForm} from "react-hook-form";
import {Service} from '../../../services/Service';

type Props = {};

export function Login(props: Props) {
  const service = new Service;
  const {register, handleSubmit} = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data)
    service.login(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Логин</label>
      <br></br>
      <input {...register("username")}></input>
      <br></br>
      <label>Почта:</label>
      <br></br>
      <input {...register("password")}></input>

      <br></br>
      <input type="submit" />
    </form>
  );
}
