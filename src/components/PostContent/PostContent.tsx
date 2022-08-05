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
  const postService = new GeneralPostService();
  const {register, handleSubmit, formState: {errors}} = useForm();
  const makeSubmit = async (data) => {
    const res = await onCommentSubmit(data, data.id);
    console.log(res)
    //TODO: add toast
  };
  return (
    <div className={styles.postModal}>
      <div className={styles.postInfo}>
        <div>11 Июля &bull; 12:05</div>
        <Badge borderRadius="16px" px="2" backgroundColor={'#FFCA7A'}>
          {'#post type'}
        </Badge>
      </div>
      <div>{data?.title}</div>
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
        <InputWrapper label={'Name'} error={errors.name} errText={''}>
          <input {...register('name', {required: true})} />
        </InputWrapper>
        <InputWrapper label={'Content'} error={errors.content} errText={''}>
          <textarea {...register('content', {required: true})} />
        </InputWrapper>
        <DefaultButton type={'submit'} bgColor="#BCD7DA"
          children={'Отправить'}></DefaultButton>
      </form>
    </div>
  );
}

export default PostContent;