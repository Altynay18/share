// @flow
import * as React from 'react';
import styles from './Post.module.scss';
import {Badge} from "@chakra-ui/react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
type Props = {

};

export function Post(props: Props) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postInfo}>
        <div>
          Username
        </div>
        <div>
          11 Июля &bull; 12:05
        </div>
        <Badge borderRadius="16px" px="2" backgroundColor={"#FFCA7A"}>
          {'p.postType'}
        </Badge>
      </div>
      <div className={styles.postContent}>
        {'post content'}
      </div>
      <div className={styles.postActions}>
        <div >
          <FavoriteBorderIcon fontSize='small' />Нравится
        </div>
        <div >
          <ChatBubbleOutlineIcon fontSize='small' />  Комментарии
        </div>
      </div>
    </div>
  );
};