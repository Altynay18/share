// @flow
import * as React from 'react';
import {ReactChild} from 'react';
import styles from './DefaultButton.module.scss';
import {COLORS} from '../../constants';
import {Button} from '@chakra-ui/react';

type Props = {
  onClick?: () => void,
  children: ReactChild,
  bgColor?: string,
  maxWidth?: string,
  type?: 'button' | 'submit' | 'reset'
};

export function DefaultButton({
  onClick,
  children,
  bgColor = '#7F5283',
  maxWidth = '100%',
  type,
}: Props) {
  return (
    <Button type={type} style={{backgroundColor: bgColor, maxWidth}}
      onClick={onClick}
      className={styles.defaultButton}>
      {children}
    </Button>
  );
};