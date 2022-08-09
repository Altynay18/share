// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import styles from './Welcome.module.scss';
import DefaultButton from '../../components/DefaultButton';
import Modal from '../../components/Modal';
import {GeneralPostService} from '../../services/GeneralPostService';
import PageHeader from '../../components/PageHeader';
import Post from '../../components/Post';
import AddPost from '../../components/Forms/AddPost';
import {Select} from '@chakra-ui/react';
import {GeneralService} from '../../services/GeneralService';


type Props = {};

export function Welcome(props: Props) {
  const [schools, setSchools] = useState([]);
  const [open, setOpen] = useState(false);
  const [postList, setPostList] = useState([]);
  const postService = new GeneralPostService();
  const generalService = new GeneralService();

  async function getAllPost() {
    const result = await postService.getAllPosts();
    if (result) setPostList(result);
  }

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
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('content', data.content)
    formData.append('file', data.file[0])
    formData.append('image', data.image[0])
    const res = await postService.addPost(formData);
    setOpen(false);
    getAllPost();
  };

  const handleChange = async (e) => {
    const res = await postService.getPostsBySchool(e.target.value)
    if(res) setPostList(res)
  };

  async function getSchoolList() {
    const list = await generalService.getSchoolList();
    if (list) setSchools(list);
  }

  useEffect(() => {
    getAllPost();
    getSchoolList();
  }, []);
  return (
    <div className={styles.welcomePageContainer}>
      <PageHeader handleSearch={handleSearch} title={'Лента новостей'}/>
      <Select className={styles.select} onChange={handleChange}>
        <option>Поиск по школам</option>
        {schools.map((el, i) => (
          <option key={i} value={el}>{el}</option>
        ))}
      </Select>
      <div className={styles.addButton}>
        <DefaultButton maxWidth={'15rem'} bgColor={'#7F5283'}
                       onClick={() => setOpen(true)}>
          + Добавить пост
        </DefaultButton>
        <Modal open={open} handleClose={() => setOpen(false)}>
          <AddPost onSubmit={onSubmit}/>
        </Modal>
      </div>

      <div className={styles.list}>
        {postList?.map((el, i) => (
          <Post onCommentSubmit={onCommentSubmit} data={el} key={i}/>
        ))}
      </div>
    </div>
  );
};