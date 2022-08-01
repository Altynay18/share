// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import styles from './AddProject.module.scss';
import {InputWrapper} from '../../InputWrapper/InputWrapper';
import DefaultButton from '../../DefaultButton';
import {COLORS} from '../../../constants';
import {useForm} from 'react-hook-form';
import {ProjectService} from '../../../services/ProjectService';
import {Select} from '@chakra-ui/react';
import {AuthService} from '../../../services/AuthService';

type Props = {
  afterSubmit: () => void
};

export function AddProject({afterSubmit}: Props) {
  const [users, setUsers] = useState([]);
  const projectService = new ProjectService();
  const auth = new AuthService();
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => {
    projectService.createProject(data);
  };

  async function getAllUser() {
    const res = await auth.getAllUser();
    setUsers(res);
  }

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <form className={styles.addProject} onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper error={errors.title} errText={''}>
        <input {...register('title', {required: true, maxLength: 20})} />
      </InputWrapper>
      <InputWrapper error={errors.title} errText={''}>
        <input {...register('description', {required: true, maxLength: 20})} />
      </InputWrapper>
      {!!users.length &&
        <Select placeholder="Select User">
          {users.map((el, i) => (
            <option value="option1">Option 1</option>
          ))}
        </Select>
      }
      <DefaultButton type={'submit'}
                     bgColor={COLORS.OCEAN_BLUE}>Создать</DefaultButton>
    </form>
  );
};