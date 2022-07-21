// @flow
import * as React from 'react';
import {ReactChild} from 'react';
import styles from './DefaultButton.module.scss';
import {COLORS} from '../../constants';

type Props = {
  onclick?: () => void,
  children: ReactChild,
  bgColor?: string
};

export function DefaultButton({
                                onclick,
                                children,
                                bgColor = COLORS.YELLOW,
                              }: Props) {
  return (
    <button style={{background: bgColor}} onClick={onclick}
            className={styles.defaultButton}>
      {children}
    </button>
  );
};