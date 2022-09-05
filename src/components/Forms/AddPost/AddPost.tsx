import React from 'react';
import styles from './AddPost.module.scss';
import {useForm} from 'react-hook-form';
import InputWrapper from '../../InputWrapper';
import DefaultButton from '../../DefaultButton';
import {ReflectionPostService} from '../../../services/ReflectionPostService';
import {TAG_NAMES} from '../../../constants';
import {Select} from '@chakra-ui/react';
import {useToast} from '@chakra-ui/react'

type Props = {
  isReflection?: boolean,
  onSubmit: (a: any) => void
}

function AddPost({onSubmit, isReflection}: Props) {
  const toast = useToast()
  const {register, handleSubmit, formState: {errors}} = useForm();
  const postService = new ReflectionPostService();
  const makeSubmit = async data => {
    onSubmit(data);
    toast({
      title: "Вы успешно добавили пост",
      status: "success",
      duration: 3000,
      isClosable: true
    });
  };
  return (
    <form onSubmit={handleSubmit(makeSubmit)} className={styles.addPost}>
      <div className={styles.title}>Создать публикацию</div>
      <div className={styles.content}>
        <InputWrapper label={'Title'} error={errors.name} errText={''}>
          <input {...register('title', {required: true})} />
        </InputWrapper>
        <InputWrapper label={'Content'} error={errors.content} errText={''}>
          <textarea {...register('content', {required: true})} />
        </InputWrapper>
        {isReflection && <Select {...register('tag')}>
          <option>Выберите теги</option>
          <option value={TAG_NAMES.TRAINING_AND_TEACHING}>Обучение и
            преподавание
          </option>
          <option value={TAG_NAMES.TEACHERS_COLLABORATION}>Сотрудничество
            учителей
          </option>
          <option value={TAG_NAMES.CREATE_CONDITIONS}>Создание условий
          </option>
          <option value={TAG_NAMES.METHODOLOGY_AR}>Методология AR</option>
          <option value={TAG_NAMES.TRAINEE_SUPPORT}>Сопровождение учащегося
          </option>
        </Select>}

        <InputWrapper label={'image'} error={errors.content} errText={''}>
          <input type={'file'} accept={'image/*'} {...register('image')} />
        </InputWrapper>
        <InputWrapper label={'File'} error={errors.content} errText={''}>
          <input type={'file'} {...register('file')} />
        </InputWrapper>
      </div>
      <DefaultButton type={'submit'} bgColor={'#7F5283'}>Add Post</DefaultButton>
    </form>
  );
}

export default AddPost;