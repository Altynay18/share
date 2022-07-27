// @flow
import * as React from 'react';
import {ReactChild} from 'react';
import styles from './DefaultButton.module.scss';
import {COLORS} from '../../constants';

type Props = {
  onClick?: () => void,
  children: ReactChild,
  bgColor?: string,
  maxWidth?: string
};

export function DefaultButton({
                                onClick,
                                children,
                                bgColor = COLORS.YELLOW,
                                maxWidth = '100%',

                              }: Props) {
  return (
    <button style={{background: bgColor, maxWidth}} onClick={onClick}
            className={styles.defaultButton}>
      {children}
    </button>
  );
};