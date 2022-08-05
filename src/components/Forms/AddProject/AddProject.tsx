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
import {useToast} from '@chakra-ui/react'


type Props = {
  afterSubmit: () => void
};

export function AddProject({afterSubmit}: Props) {
  const toast = useToast()
  const [users, setUsers] = useState([]);
  const projectService = new ProjectService();
  const auth = new AuthService();
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = async data => {
    const res = await projectService.createProject(data);
    // console.log("fdddd", res)
    if (res === 'Project has been created') {
      toast({
        title: "Вы успешно создали проект!",
        status: "success",
        duration: 3000,
        isClosable: true
      });
    }
    else {
      toast({
        title: "Ошибка! Проверьте все данные",
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }
  };

  async function getAllUser() {
    const res = await auth.getAllUser();
    if (res) {
      setUsers(res);
    }
  }

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <form className={styles.addProject} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.title}>Add Project</div>
      <InputWrapper label={'Title'} error={errors.title} errText={''}>
        <input {...register('title', {required: true, maxLength: 20})} />
      </InputWrapper>
      <InputWrapper label={'Description'} error={errors.description}
        errText={''}>
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


