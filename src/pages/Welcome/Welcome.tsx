// @flow
import * as React from 'react';
import Post from '../../components/Post';
import styles from './Welcome.module.scss';


type Props = {};

export function Welcome(props: Props) {
  return (
    <div className={styles.welcomePageContainer}>
      <div className={styles.welcomePageTitle} >
        Лента новостей:
      </div>
      <Post />
    </div>
  );
};