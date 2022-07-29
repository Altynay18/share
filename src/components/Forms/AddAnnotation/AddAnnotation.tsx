// @flow
import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import styles from '../Login/Login.module.scss';
import {InputWrapper} from '../../InputWrapper/InputWrapper';
import DefaultButton from '../../DefaultButton';

type Props = {
  onSubmit: any
};

export function AddAnnotation({onSubmit}: Props) {
  const [annotation, setAnnotation] = useState('');
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setAnnotation(target.value);
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2 className={styles.title}>Add Annotation</h2>

      <DefaultButton>Save</DefaultButton>
    </form>
  );
};