import React, {useEffect, useState} from 'react';
import styles from './MyPosts.module.scss';
import {GeneralPostService} from '../../../services/GeneralPostService';
import Post from '../../../components/Post';

function MyPosts() {
  const [postList, setPostList] = useState([]);
  const postService = new GeneralPostService();

  const onCommentSubmit = async (data, postId) => {
    const res = await postService.addComment({
      ...data, postId,
    });
  };

  async function getPostList() {
    const res = await postService.getMyPosts();
    setPostList(res);
  }

  useEffect(() => {
    getPostList();
  }, []);
  return (
    <div className={styles.myPosts}>
      {postList?.map((el, i) => (
        <Post onCommentSubmit={onCommentSubmit} data={el} key={i}/>
      ))}
    </div>
  );
}

export default MyPosts;