// @flow
import * as React from 'react';
import styles from './Register.module.scss';
import DefaultButton from '../../DefaultButton';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../constants';
import {SubmitHandler, useForm} from 'react-hook-form';
import {AuthService} from '../../../services/AuthService';
import {RegisterData} from '../../../types/services';
import InputWrapper from '../../InputWrapper';
import {Select} from '@chakra-ui/react';

type Props = {};

export function Register(props: Props) {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const authService = new AuthService();
  const onSubmit: SubmitHandler<RegisterData> = async data => {
    const res = await authService.register(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Авторизация</h2>
      <InputWrapper label={'Name'} error={errors.name}
                    errText={'This name is required'}>
        <input {...register('name', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Surname'} error={errors.name} errText={'Err'}>
        <input {...register('surname', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'City'} error={errors.city} errText={'Err'}>
        <input {...register('city', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'School'} error={errors.school} errText={'Err'}>
        <input {...register('school', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Password'} error={errors.password} errText={'err'}>
        <input {...register('password', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Password Confirm'} error={errors.passwordConfirm}
                    errText={'err'}>
        <input {...register('passwordConfirm', {
          required: true,
        })} />
      </InputWrapper>
      <div>
        <label>Role</label>
        <Select {...register('role')}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </Select>
        {errors.passwordConfirm &&
          <span>This passwordConfirm is required</span>}
      </div>

      <DefaultButton>Зарегистрироваться</DefaultButton>
      <div>Есть аккаунт? <Link to={ROUTES.LOGIN}><span
        className={styles.link}>Войдите</span></Link></div>
    </form>
  );
};