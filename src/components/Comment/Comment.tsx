// @flow
import * as React from 'react';
import styles from './Comment.module.scss';
import {CommentData} from '../../types/services';

type Props = {
  data: CommentData,
};

export function Comment({data}: Props) {

  console.log("dfgvbnvfd", data)
  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <div className={styles.name}>User</div>
        <div className={styles.role}>{'Username'}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>{data?.content}</div>
      </div>
    </div>
  );
}