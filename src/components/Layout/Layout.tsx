// @flow
import * as React from 'react';
import SideBar from '../SideBar';
import {Outlet} from 'react-router';
import styles from './Layout.module.scss';

type Props = {};

export function Layout(props: Props) {
  return (
    <div className={styles.layout}>
      <SideBar />
      <Outlet />
    </div>
  );
};