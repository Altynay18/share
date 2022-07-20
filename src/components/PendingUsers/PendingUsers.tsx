// @flow
import * as React from 'react';
import styles from './PendingUsers.module.scss';

type Props = {};

export function PendingUsers(props: Props) {
  const arr = new Array(5).fill(0)
  return (
    <div className={styles.pendingUsers}>
      <div className={styles.title}>Запросы на авторизацию:</div>
      {arr.map((el,i)=>(
        <div key={i} className={styles.row}>
          <span className={styles.id}>ID</span>
          <span className={styles.userName}>USERS</span>
          <span className={styles.action}>ACTION</span>
          <span className={styles.action}>ACTION</span>
        </div>
      ))}
    </div>
  );
};