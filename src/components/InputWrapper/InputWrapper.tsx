import * as React from 'react';
import {ReactChild} from 'react';
import styles from './InputWrapper.module.scss';

type Props = {
  label?: string,
  children: ReactChild,
  error: unknown,
  errText: string
}

export function InputWrapper({
                        children,
                        label = null,
                        error,
                        errText,
                      }: Props) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      {children}
      {error && <span>{errText}</span>}
    </div>
  );
}
