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
      <InputWrapper label={'Username'} error={errors.name} errText={'Err'}>
        <input {...register('username', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'First Name'} error={errors.name}
                    errText={'This name is required'}>
        <input {...register('firstname', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Last Name'} error={errors.name} errText={'Err'}>
        <input {...register('lastname', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'City'} error={errors.city} errText={'Err'}>
        <input {...register('city', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'School'} error={errors.school} errText={'Err'}>
        <input {...register('school', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Title'} error={errors.school} errText={'Err'}>
        <input {...register('title', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Achievements'} error={errors.school} errText={'Err'}>
        <input {...register('achievements', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Role'} error={errors.school} errText={'Err'}>
        <input {...register('role', {required: true})} />
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

      <DefaultButton type={'submit'}>Зарегистрироваться</DefaultButton>
      <div>Есть аккаунт? <Link to={ROUTES.LOGIN}><span
        className={styles.link}>Войдите</span></Link></div>
    </form>
  );
};