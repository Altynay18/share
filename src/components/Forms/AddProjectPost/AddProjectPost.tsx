import InputWrapper from '../../InputWrapper';
import {useForm} from 'react-hook-form';
import DefaultButton from '../../DefaultButton';
import styles from './AddProjectPost.module.scss'

type Props = {
  onSubmit: (arg: any) => void
};

export function AddProjectPost({onSubmit}: Props) {
  const {register, handleSubmit, formState: {errors}} = useForm();
  return (
    <form className={styles.addProjectPost} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.title}>Add Post</div>
      <InputWrapper label={'Title'} errText={''} error={''}>
        <input {...register('title', {required: true})} />
      </InputWrapper>
      <InputWrapper label={'Text'} errText={''} error={''}>
        <input {...register('text', {required: true})} />
      </InputWrapper>
      <DefaultButton type={'submit'}>Add Post</DefaultButton>
    </form>
  );
};