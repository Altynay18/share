import styles from './AddGeneralPost.module.scss';
import {useForm} from 'react-hook-form';
import {GeneralPostService} from '../../../services/GeneralPostService';
import InputWrapper from '../../InputWrapper';
import DefaultButton from '../../DefaultButton';

type Props = {
  afterSubmit: () => void
}

function AddGeneralPost({afterSubmit}: Props) {
  const postService = new GeneralPostService();
  const {register, handleSubmit, watch, formState: {errors}} = useForm();

  const onSubmit = async (data) => {
    const postData = {
      content: data.content,
      title: data.title,
    };
    await postService.addPost(postData);
    afterSubmit();
  };
  return (
    <div className={styles.addPost}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper label={'Title'} error={errors.title} errText={''}>
            <input {...register('title', {required: true})} />
          </InputWrapper>
          <InputWrapper label={'Content'} error={errors.content} errText={''}>
            <input {...register('content', {required: true})} />
          </InputWrapper>
          <DefaultButton type={'submit'}>
            Add Post
          </DefaultButton>
        </form>
      </div>
    </div>
  );
}

export default AddGeneralPost;