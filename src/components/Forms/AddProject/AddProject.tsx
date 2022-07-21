// @flow
import * as React from 'react';
import styles from './AddProject.module.scss';
import {Input} from '../../Input/Input';
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
      <Input placeholder={'Название проекта'}
        onChange={(e) => handleChange(e, 'projectName')}
        value={projectName} name={'projectName'} />
      <Input placeholder={'Участник 1'}
        onChange={(e) => handleChange(e, 'member')}
        value={member} name={'projectName'} />
      <Input placeholder={'Участник 2'}
        onChange={(e) => handleChange(e, 'member')}
        value={member} name={'projectName'} />
      <Input placeholder={'Участник 3'}
        onChange={(e) => handleChange(e, 'member')}
        value={member} name={'projectName'} />
      <DefaultButton bgColor={COLORS.OCEAN_BLUE}>Создать</DefaultButton>
    </form>
  );
};