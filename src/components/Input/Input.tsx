// @flow
import * as React from 'react';
import {ChangeEvent} from 'react';
import styles from './Input.module.scss';

type Props = {
  type?: string,
  value: string | number | readonly string[],
  onChange: (e: ChangeEvent) => void,
  disabled?: boolean,
  label?: string,
  name: string,
  error?: string,
  placeholder: string,
  extraProps?: any
};

export function Input({
                        name,
                        type = 'text',
                        value,
                        onChange,
                        disabled = false,
                        label = null,
                        error,
                        placeholder,
                        extraProps,
                      }: Props) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input {...extraProps} placeholder={placeholder} className={styles.input}
             id={name} name={name} type={type} onChange={onChange}
             value={value} disabled={disabled}/>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
