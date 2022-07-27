// @flow
import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import styles from '../Login/Login.module.scss';
import {Input} from '../../Input/Input';
import DefaultButton from '../../DefaultButton';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../constants';

type Props = {};

export function AddAnnotation(props: Props) {
  const [annotation, setAnnotation] = useState('');
  const handleChange = (e: ChangeEvent) => {

  };

  const handleClick = () => {

  };
  const handleSubmit = () => {
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Add Annotation</h2>
      <Input placeholder={'Annotation'}
             name={'annotation'}
             error={'fsdfsd'}
             value={annotation}
             onChange={handleChange} label={'Annotation'}/>
      <DefaultButton>Save</DefaultButton>
    </form>
  );
};