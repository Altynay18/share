// @flow
import * as React from 'react';
import {useState} from 'react';
import styles from './Post.module.scss';
import {Badge} from '@chakra-ui/react';
import Modal from '../Modal';
import PostContent from '../PostContent';
import {ChatIcon, StarIcon} from '@chakra-ui/icons';
import {PostData} from '../../types/services';

type Props = {
  data: PostData,
  onCommentSubmit: (arg: any, postId: any) => void
};

const colors = {
  trainingAndTeaching: '#AEADF0',
  teachersCollaboration: '#e15e6a',
  createConditions: '#51b097',
  methodologyAR: '#ae84d5',
  traineeSupport: '#ffc23c'
}

const tags = {
  trainingAndTeaching: 'Обучение и преподавание',
  teachersCollaboration: 'Сотрудничество учителей',
  createConditions: 'Создание условий',
  methodologyAR: 'Методология AR',
  traineeSupport: 'Сопровождение учащегося'
}



export function Post({data, onCommentSubmit}: Props) {
  const [open, setOpen] = useState(false);

  console.log('post data', data)
  return (
    <div key={data?.id} className={styles.postContainer} onClick={() => {
      setOpen(true);
    }}>
      <div className={styles.postInfo}>
        <div>Post ID: {data?.id}</div>
        <div>{data?.title}</div>
        <div>{data?.email}</div>
        {data?.tag && data?.tag.map((el, i) => (
          <Badge borderRadius="16px" px="2" backgroundColor={colors[el.tag]}>
            {tags[el.tag]}
          </Badge>
        ))}
      </div>
      {data?.imageLink && <img className={styles.img} src={data.imageLink} alt="post" />}
      <div className={styles.postContent}>{data?.content}</div>
      <div className={styles.postActions}>
        <div className={styles.comment}><ChatIcon w={4} h={4}/>Комментарии</div>
        {data?.fileLink &&
          <a className={styles.link} href={data.fileLink} target={'_blank'}>Link
            to File</a>}
      </div>
      <Modal open={open} handleClose={() => setOpen(false)}>
        <PostContent data={data} onCommentSubmit={onCommentSubmit} />
      </Modal>
    </div>
  );
}
