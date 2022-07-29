import styles from './Settings.module.scss';
import {useForm} from 'react-hook-form';
import * as React from 'react';
import {Select} from '@chakra-ui/react';
import DefaultButton from '../../components/DefaultButton';
import InputWrapper from '../../components/InputWrapper';
import {AuthService} from '../../services/AuthService';

type Props = {};

export function Settings(props: Props) {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const authService = new AuthService();
  const onSubmit = async data => {
    console.log(data);
    const response = await authService.editUser(data);
  };
  return (
    <div className={styles.settings}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Настройки</h2>
        <InputWrapper label={'name'} error={errors.name}
                      errText={'This name is required'}>
          <input {...register('name', {required: true})} />
        </InputWrapper>

        <InputWrapper label={'surname'} error={errors.surname}
                      errText={'This surname is required'}>
          <input {...register('surname', {required: true})} />
        </InputWrapper>
        <InputWrapper label={'city'} error={errors.city}
                      errText={'This city is required'}>
          <input {...register('city', {required: true})} />
        </InputWrapper>
        <InputWrapper label={'school'} error={errors.school}
                      errText={'This city is required'}>
          <input {...register('school', {required: true})} />
        </InputWrapper>
        <InputWrapper label={'password'} error={errors.password}
                      errText={'This password is required'}>
          <input {...register('password', {required: true})} />
        </InputWrapper>
        <InputWrapper label={'password confirm'} error={errors.passwordConfirm}
                      errText={'This passwordConfirm is required'}>
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
        <DefaultButton>
          Submit
        </DefaultButton>
      </form>
    </div>
  );
};