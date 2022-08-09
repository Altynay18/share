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
  onCommentSubmit: (arg: any, postId: any)=>void
};

export function Post({data, onCommentSubmit}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div key={data?.id} className={styles.postContainer} onClick={() => {
      setOpen(true);
    }}>
      <div className={styles.postInfo}>
        <div>Post ID: {data?.id}</div>
        <div>{data?.title}</div>
        <div>{data?.email}</div>
        {data?.tag && data?.tag.map((el, i) => (
          <Badge borderRadius="16px" px="2" backgroundColor={'#FFCA7A'}>
            {el.tag}
          </Badge>
        ))}
      </div>
      <img className={styles.img} src={'/test.jpg'} alt="post"/>
      <div className={styles.postContent}>{data?.content}</div>
      <div className={styles.postActions}>
        <div className={styles.comment}><ChatIcon w={4} h={4}/>Комментарии</div>
        {data?.fileLink &&  <a className={styles.link} href={data.fileLink} target={'_blank'}>Link to File</a>}
      </div>
      <Modal open={open} handleClose={() => setOpen(false)}>
        <PostContent data={data} onCommentSubmit={onCommentSubmit}/>
      </Modal>
    </div>
  );
}
