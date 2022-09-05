import InputWrapper  from '../../InputWrapper';
import {useForm}     from 'react-hook-form';
import DefaultButton from '../../DefaultButton';
import styles        from './AddProjectPost.module.scss'
import {useToast}    from '@chakra-ui/react';
import React         from 'react';

type Props = {
  onSubmit: (arg: any) => void
};

export function AddProjectPost({onSubmit}: Props) {
  const toast = useToast()

  const {register, handleSubmit, formState: {errors}} = useForm();
  // toast({
  //   title: '',
  //   description: "We've created your account for you.",
  //   status: 'success',
  //   duration: 9000,
  //   isClosable: true,
  // })

  return (
    <form className={styles.addProjectPost} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.title}>Add Post</div>
      <InputWrapper label={'Title'} errText={''} error={''}>
        <input {...register('title', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Text'} errText={''} error={''}>
        <input {...register('text', {required: true})} />
      </InputWrapper>

      <InputWrapper label={'image'} error={errors.content} errText={''}>
        <input type={'file'} accept={'image/*'} {...register('image')} />
      </InputWrapper>
      <InputWrapper label={'File'} error={errors.content} errText={''}>
        <input type={'file'} {...register('file')} />
      </InputWrapper>
      <DefaultButton type={'submit'}>Add Post</DefaultButton>
    </form>
  );
};