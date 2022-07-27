// @flow
import * as React from 'react';
import styles from './Post.module.scss';
import {Badge} from "@chakra-ui/react";
import Modal from '../Modal'
import {useState} from 'react';
import PostContent from '../PostContent';
import {ChatIcon, StarIcon} from '@chakra-ui/icons'
type Props = {

};

export function Post(props: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.postContainer} onClick={() => {setOpen(true)}}>
      <div className={styles.postInfo}>
        <div>
          Username
        </div>
        <div>
          11 Июля &bull; 12:05
        </div>
        <Badge borderRadius="16px" px="2" backgroundColor={"#FFCA7A"}>
          {'#post type'}
        </Badge>
      </div>
      <div className={styles.postContent}>
        {'post content'}
      </div>
      <div className={styles.postActions}>
        <div >
          <StarIcon w={4} h={4} />Нравится
        </div>
        <div >
          <ChatIcon w={4} h={4}/>  Комментарии
        </div>
      </div>
      <Modal open={open} handleClose={() => setOpen(false)}>
        <PostContent />
      </Modal>
    </div>
  );
};