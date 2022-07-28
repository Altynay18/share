// @flow
import * as React from 'react';
import styles from './Register.module.scss';
import DefaultButton from '../../DefaultButton';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../constants';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Auth} from '../../../services/Auth';
import {RegisterData} from '../../../types/services';

type Props = {};

export function Register(props: Props) {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const auth = new Auth();
  const onSubmit: SubmitHandler<RegisterData> = async data => {
    const res = await auth.register(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Авторизация</h2>
      <div>
        <label>Email</label>
        <input {...register('email', {required: true})} />
        {errors.email && <span>This email is required</span>}
      </div>

      <div>
        <label>name</label>
        <input {...register('name', {required: true})} />
        {errors.name && <span>This name is required</span>}
      </div>

      <div>
        <label>surname</label>
        <input {...register('surname', {required: true})} />
        {errors.surname && <span>This surname is required</span>}
      </div>


      <div>
        <label>city</label>
        <input {...register('city', {required: true})} />
        {errors.city && <span>This city is required</span>}
      </div>

      <div>
        <label>school</label>
        <input {...register('school', {required: true})} />
        {errors.school && <span>This city is required</span>}
      </div>

      <div>
        <label>password</label>
        <input {...register('password', {required: true})} />
        {errors.password && <span>This password is required</span>}
      </div>

      <div>
        <label>passwordConfirm</label>
        <input {...register('passwordConfirm', {
          required: true,
        })} />
        {errors.passwordConfirm &&
          <span>This passwordConfirm is required</span>}
      </div>

      <div>
        <label>Role</label>
        <select {...register('role')}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        {errors.passwordConfirm &&
          <span>This passwordConfirm is required</span>}
      </div>


      <DefaultButton>Зарегистрироваться</DefaultButton>
      <div>Есть аккаунт? <Link to={ROUTES.LOGIN}><span
        className={styles.link}>Войдите</span></Link></div>
    </form>
  );
};