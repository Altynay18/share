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
  maxWidth?: string
};

export function DefaultButton({
                                onClick,
                                children,
                                bgColor = COLORS.YELLOW,
                                maxWidth = '100%',

                              }: Props) {
  return (
    <Button style={{backgroundColor: bgColor, maxWidth}} onClick={onClick}
            className={styles.defaultButton}>
      {children}
    </Button>
  );
};