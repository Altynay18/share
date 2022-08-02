// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import styles from './Welcome.module.scss';
import DefaultButton from '../../components/DefaultButton';
import Modal from '../../components/Modal';
import AddGeneralPost from '../../components/Forms/AddGeneneralPost';
import {GeneralPostService} from '../../services/GeneralPostService';
import PageHeader from '../../components/PageHeader';
import Post from '../../components/Post';


type Props = {};

export function Welcome(props: Props) {
  const [open, setOpen] = useState(false);
  const [postList, setPostList] = useState([]);
  const postService = new GeneralPostService();

  async function getAllPost() {
    const result = await postService.getAllPosts();
    setPostList(result);
  }

  const afterSubmit = async () => {
    setOpen(false);
    await getAllPost();
  };
  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <div className={styles.welcomePageContainer}>
      <PageHeader title={'Лента новостей'}/>
      <div className={styles.addButton}>
        <DefaultButton bgColor="#9DA2A5" onClick={() => setOpen(true)}>
          + Добавить пост
        </DefaultButton>
        <Modal open={open} handleClose={() => setOpen(false)}>
          <AddGeneralPost afterSubmit={afterSubmit}/>
        </Modal>
      </div>

      <div className={styles.list}>
        {postList.map((el, i) => (
          <Post data={el} key={i}/>
        ))}
      </div>
    </div>
  );
};