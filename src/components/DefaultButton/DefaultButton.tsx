// @flow
import * as React from 'react';
import {ReactChild} from 'react';
import styles from './DefaultButton.module.scss'

type Props = {
  onclick?: () => void,
  children: ReactChild,
  bgColor?: string
};

export function DefaultButton({onclick, children, bgColor = '#F7A325'}: Props) {
  return (
    <button style={{background: bgColor}} onClick={onclick} className={styles.defaultButton}>
      {children}
    </button>
  );
};