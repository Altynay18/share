// @flow
import * as React from 'react';
import styles from './AddProject.module.scss';
import {InputWrapper} from '../../InputWrapper/InputWrapper';
import {ChangeEvent, useState} from 'react';
import DefaultButton from '../../DefaultButton';
import {COLORS} from '../../../constants';

type Props = {
  onSubmit: () => void
};

export function AddProject({onSubmit}: Props) {
  const [projectName, setProjectName] = useState('');
  const [member, setMember] = useState('');
  const handleChange = (e: ChangeEvent, name) => {
    const target = e.target as HTMLInputElement;
    switch (name) {
      case 'projectName':
        setProjectName(target.value);
        break;
      case 'member':
        setMember(target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form className={styles.addProject} onSubmit={handleSubmit}>

      <DefaultButton bgColor={COLORS.OCEAN_BLUE}>Создать</DefaultButton>
    </form>
  );
};