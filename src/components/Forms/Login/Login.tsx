// @flow
import * as React from 'react';
import styles from './Login.module.scss';
import {Input} from '../../Input/Input';
import {ChangeEvent} from 'react';

type Props = {};

export function Login(props: Props) {
  const handleChange = (e: ChangeEvent) => {

  };
  return (
    <form>
      <Input name={'login'} error={'fsdfsd'} value={''} onChange={handleChange} />
    </form>
  );
};