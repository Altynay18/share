// @flow
import * as React from 'react';
import {ReactChild} from 'react';
import styles from './DefaultButton.module.scss';
import {COLORS} from '../../constants';

type Props = {
  onclick?: () => void,
  children: ReactChild,
  bgColor?: string,
  maxWidth?: string
};

export function DefaultButton({
  onclick,
  children,
  bgColor = COLORS.YELLOW,
  maxWidth = '100%',

}: Props) {
  return (
    <button style={{background: bgColor, maxWidth}} onClick={onclick}
      className={styles.defaultButton}>
      {children}
    </button>
  );
};