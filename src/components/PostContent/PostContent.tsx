import React from 'react';
import DefaultButton from '../DefaultButton';
import styles from './PostContent.module.scss';
import {Badge} from '@chakra-ui/react';
import Comment from '../Comment';
import {PostData} from '../../types/services';
import {useForm} from 'react-hook-form';
import InputWrapper from '../InputWrapper';
import {GeneralPostService} from '../../services/GeneralPostService';

type Props = {
  data: PostData,
  onCommentSubmit: (arg: any, postId: any) => void
}

function PostContent({data, onCommentSubmit}: Props) {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const makeSubmit = (formData) => {
    onCommentSubmit({content: formData.content}, data.id);
  };

  console.log("data", data)
  return (
    <div className={styles.postModal}>
      <div className={styles.postInfo}>
        <div>Post ID: {data?.id}</div>
        {/* <Badge borderRadius="16px" px="2" backgroundColor={'#FFCA7A'} alignItems={'center'}>
          {'#post type'}
        </Badge> */}
      </div>
      <div className={styles.postTitle}>{data?.title}</div>
      <div className={styles.postContent}>{data?.content}</div>
      {!!data?.comment?.length &&
        <div className={styles.postModalComments}>
          <div className={styles.title}>Комментарии:</div>
          <div>
            {data?.comment.map((el, i) => (
              <Comment key={i} data={el} />
            ))}
          </div>
        </div>
      }
      <form onSubmit={handleSubmit(makeSubmit)}
        className={styles.postModalActions}>
        <div className={styles.title}>Написать комментарии:</div>
        {/* <InputWrapper label={'Name'} error={errors.name} errText={''}>
          <input {...register('name', {required: true})} />
        </InputWrapper> */}
        <InputWrapper error={errors.content} errText={''}>
          <textarea {...register('content', {required: true})} />
        </InputWrapper>
        <DefaultButton type={'submit'}
          children={'Отправить'}></DefaultButton>
      </form>
    </div>
  );
}

export default PostContent;