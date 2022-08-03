// @flow
import * as React from 'react';
import {useContext, useEffect} from 'react';
import SideBar from '../SideBar';
import {Outlet} from 'react-router';
import styles from './Layout.module.scss';
import Header from '../Header';
import {UserContext} from '../App';
import {AuthService} from '../../services/AuthService';

type Props = {};

export function Layout(props: Props) {
  const user = useContext(UserContext);
  const authService = new AuthService();

  function getUserInfo(){
    const res = authService.getCurrentUser()
  }
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div className={styles.layout}>
      <SideBar/>
      <div className={styles.container}>
        <Header/>
        <Outlet/>
      </div>
    </div>
  );
};