// @flow
import * as React from 'react';
import {ReactChild} from 'react';
import styles from './DefaultButton.module.scss'

type Props = {
  onclick: () => void,
  children: ReactChild
};

export function DefaultButton({onclick, children}: Props) {
  return (
    <button onClick={onclick} className={styles.defaultButton}>
      {children}
    </button>
  );
};