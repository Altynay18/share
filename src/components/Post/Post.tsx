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
  data: PostData
};

export function Post({data}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div key={data?.id} className={styles.postContainer} onClick={() => {
      setOpen(true);
    }}>
      <div className={styles.postInfo}>
        <div>11 Июля &bull; 12:05</div>
        <div>{data?.title}</div>
        {data?.tag && data?.tag.map((el, i) => (
          <Badge borderRadius="16px" px="2" backgroundColor={'#FFCA7A'}>
            {el.tag}
          </Badge>
        ))}
      </div>
      <div className={styles.postContent}>{data?.content}</div>
      <div className={styles.postActions}>
        <div><StarIcon w={4} h={4}/>Нравится</div>
        <div><ChatIcon w={4} h={4}/> Комментарии</div>
      </div>
      <Modal open={open} handleClose={() => setOpen(false)}>
        <PostContent data={data}/>
      </Modal>
    </div>
  );
};