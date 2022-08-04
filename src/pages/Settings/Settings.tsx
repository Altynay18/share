import styles from './Settings.module.scss';
import {useForm} from 'react-hook-form';
import * as React from 'react';
import {useContext} from 'react';
import DefaultButton from '../../components/DefaultButton';
import InputWrapper from '../../components/InputWrapper';
import {AuthService} from '../../services/AuthService';
import {UserContext} from '../../components/App';

type Props = {};

export function Settings(props: Props) {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const [user, setUser] = useContext(UserContext);
  const authService = new AuthService();
  const onSubmit = async data => {
    const response = await authService.editUser(data);
  };

  return (
    <div className={styles.settings}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Настройки</h2>
        <InputWrapper label={'First Name'} error={errors.name}
                      errText={'This name is required'}>
          <input
            defaultValue={user?.firstname}  {...register('name', {required: true})} />
        </InputWrapper>
        <InputWrapper label={'Last Name'} error={errors.surname}
                      errText={'This surname is required'}>
          <input
            defaultValue={user?.lastname}   {...register('surname', {required: true})} />
        </InputWrapper>
        <InputWrapper label={'city'} error={errors.city}
                      errText={'This city is required'}>
          <input defaultValue={user?.city}   {...register('city', {required: true})} />
        </InputWrapper>
        <InputWrapper label={'school'} error={errors.school}
                      errText={'This city is required'}>
          <input
            defaultValue={user?.school}   {...register('school', {required: true})} />
        </InputWrapper>
        <InputWrapper label={'title'} error={errors.title}
                      errText={'This title is required'}>
          <input
            defaultValue={user?.title}   {...register('title', {required: true})} />
        </InputWrapper>
        <InputWrapper label={'password'} error={errors.password}
                      errText={'This password is required'}>
          <input
            defaultValue={user?.password}   {...register('password', {required: true})} />
        </InputWrapper>
        <InputWrapper label={'password confirm'} error={errors.passwordConfirm}
                      errText={'This passwordConfirm is required'}>
          <input
            defaultValue={user?.passwordConfirm}   {...register('passwordConfirm', {
            required: true,
          })} />
        </InputWrapper>
        <DefaultButton type={'submit'}>
          Save
        </DefaultButton>
      </form>
    </div>
  );
};