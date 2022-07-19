// @flow
import * as React from 'react';
import {ChangeEvent, ReactChild} from 'react';
import styles from './Input.module.scss';

type Props = {
  type?: string,
  value: string | number | readonly string[],
  onChange: (e: ChangeEvent) => void,
  disabled?: boolean,
  label?: string,
  name: string,
  error?: string
};

export function Input({
                        name,
                        type = 'text',
                        value,
                        onChange,
                        disabled = false,
                        label = null,
                        error,
                      }: Props) {
  return (
    <>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input className={styles.input} id={name} name={name} type={type} onChange={onChange}
             value={value} disabled={disabled}/>
      {error && <span className={styles.error}>{error}</span>}
    </>
  );
}
