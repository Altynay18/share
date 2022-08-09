import {useForm} from 'react-hook-form';
import {ROUTES} from '../../../constants';
import {AuthService} from '../../../services/AuthService';
import styles from './Login.module.scss';
import {useToast} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import * as React from 'react';

type Props = {};

export function Login(props: Props) {
  const toast = useToast();


  const authService = new AuthService();
  const {register, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    const res = await authService.login(data);
    if (res) {
      console.log('hey');
      window.sessionStorage.setItem('access_token', res.token);
      window.sessionStorage.setItem('role', res.role);
      toast({
        title: 'Успешно',
        description: 'Вход успешно выполнен',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      window.location.replace(ROUTES.PROFILE);
    } else {
      toast({
        title: 'Ошибка',
        description: 'Неправильный емайл или пароль',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.formLabel}>Емайл</label>
        <input placeholder={'Email'} {...register('email')}
               className={styles.formInput}></input>
        <label className={styles.formLabel}>Пароль:</label>
        <input placeholder={'Password'} {...register('password')}
               className={styles.formInput}></input>
        <input type="submit" className={styles.submitBtn}/>
        <div>Нет аккаунта? <Link to={ROUTES.REGISTER}><span
          className={styles.link}>Зарегистрируйтесь</span></Link></div>
      </form>
    </div>

  );
}
