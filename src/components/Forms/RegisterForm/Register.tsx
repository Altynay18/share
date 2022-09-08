// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import styles from './Register.module.scss';
import DefaultButton from '../../DefaultButton';
import {Link, useNavigate} from 'react-router-dom';
import {ROUTES} from '../../../constants';
import {SubmitHandler, useForm} from 'react-hook-form';
import {AuthService} from '../../../services/AuthService';
import {RegisterData} from '../../../types/services';
import InputWrapper from '../../InputWrapper';
import {Select, useToast} from '@chakra-ui/react';
import {GeneralService} from '../../../services/GeneralService';


type Props = {};

export function Register(props: Props) {
  const [schools, setSchools] = useState([]);
  const [roles, setRoles] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm();
  const authService = new AuthService();
  const generalService = new GeneralService();
  const onSubmit: SubmitHandler<RegisterData> = async data => {
    const res = await authService.register(data);
    if (res) {
      toast({
        title: 'Вы успешно зарегистрировались',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      navigate(ROUTES.LOGIN);
    } else {
      toast({
        title: 'Ошибка! Проверьте все данные',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  async function getSchoolList() {
    const list = await generalService.getSchoolList();
    if (list) setSchools(list);
  }
  async function getRoleList() {
    const list = await generalService.getRoleList();
    if (list) setRoles(list);
  }


  useEffect(() => {
    getSchoolList();
    getRoleList()
  }, []);
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Авторизация</h2>
      <InputWrapper label={'Эл.почта'} error={errors.name} errText={'Err'}>
        <input {...register('email', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Имя'} error={errors.name}
        errText={'This name is required'}>
        <input {...register('firstname', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Фамилия'} error={errors.name} errText={'Err'}>
        <input {...register('lastname', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Город'} error={errors.city} errText={'Err'}>
        <input {...register('city', {required: true})} />
      </InputWrapper>
      <label>Место работы</label>
      <Select className={styles.select} {...register('school')}>
        <option>Выберите школу</option>
        {schools.map((el, i) => (
          <option key={i} value={el}>{el}</option>))}
      </Select>
      <label>Роль в SHARE</label>
      <Select className={styles.select} {...register('title')}>
        <option>Выберите роль в SHARE</option>
        {roles.map((el, i) => (
          <option key={i} value={el}>{el}</option>))}
      </Select>
      <InputWrapper label={'Пароль'} error={errors.password} errText={'err'}>
        <input {...register('password', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Повторите пароль'} error={errors.passwordConfirm}
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