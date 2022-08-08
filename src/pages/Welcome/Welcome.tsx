// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import styles from './Welcome.module.scss';
import DefaultButton from '../../components/DefaultButton';
import Modal from '../../components/Modal';
import {GeneralPostService} from '../../services/GeneralPostService';
import PageHeader from '../../components/PageHeader';
import Post from '../../components/Post';
import {COLORS} from '../../constants';
import AddPost from '../../components/Forms/AddPost';


type Props = {};

export function Welcome(props: Props) {
  const [open, setOpen] = useState(false);
  const [postList, setPostList] = useState([]);
  const postService = new GeneralPostService();

  async function getAllPost() {
    const result = await postService.getAllPosts();
    if (result) setPostList(result);
  }

  const afterSubmit = async () => {
    setOpen(false);
    await getAllPost();
  };

  const onCommentSubmit = async (formData, postId) => {
    const res = await postService.addComment({
      ...formData, postId,
    });
    getAllPost();

  };
  const handleSearch = async (value) => {
    const result = await postService.search({
      title: '',
      content: value,
    });
    if (result) setPostList(result);
  };

  const onSubmit = async (data) => {
    const res = await postService.addPost(data);
    setOpen(false);
    getAllPost();
  };
  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <div className={styles.welcomePageContainer}>
      <PageHeader handleSearch={handleSearch} title={'Лента новостей'} />
      <div className={styles.addButton}>
        <DefaultButton maxWidth={'15rem'} bgColor={'#7F5283'}
          onClick={() => setOpen(true)}>
          + Добавить пост
        </DefaultButton>
        <Modal open={open} handleClose={() => setOpen(false)}>
          <AddPost onSubmit={onSubmit} />
        </Modal>
      </div>

      <div className={styles.list}>
        {postList?.map((el, i) => (
          <Post onCommentSubmit={onCommentSubmit} data={el} key={i} />
        ))}
      </div>
    </div>
  );
};