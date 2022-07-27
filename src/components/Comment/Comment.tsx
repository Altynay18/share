// @flow
import * as React from 'react';
import styles from './Comment.module.scss';

type Props = {};

export function Comment(props: Props) {
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