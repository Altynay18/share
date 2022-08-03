// @flow
import * as React from 'react';
import styles from './Comment.module.scss';
import {CommentData} from '../../types/services';

type Props = {
  data: CommentData
};

export function Comment({data}: Props) {
  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <div className={styles.name}>John Doe</div>
        <div className={styles.role}>Tutor</div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>Idfhsjdk dsjf sdfk</div>
      </div>
    </div>
  );
}