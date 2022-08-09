import React, {useCallback, useEffect, useState} from 'react';
import styles from './Reflections.module.scss';
import Post from '../../components/Post';
import {ReflectionPostService} from '../../services/ReflectionPostService';
import DefaultButton from '../../components/DefaultButton';
import AddPost from '../../components/Forms/AddPost';
import Modal from '../../components/Modal';
import PageHeader from '../../components/PageHeader';
import ReflexTags from '../../components/ReflexTags';

function Reflections() {
  const [reflectionPosts, setReflectionPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const postService = new ReflectionPostService();

  const handleSearch = async (value) => {
    const res = await postService.search({
      title: '',
      content: value,
      tag: '',
    });
    if (res) setReflectionPosts(res);
  };
  const getAllPosts = useCallback(async () => {
    const arr = await postService.getAllPosts();
    setReflectionPosts(arr);
  }, []);

  const onCommentSubmit = async (data, postId) => {
    const res = await postService.addComment({
      ...data, postId,
    });
    await getAllPosts();
  };
  const onPostSubmit = async (data) => {
    const res = await postService.addPost({
      ...data, tag: [data.tag],
    });
    setOpen(false);
    await getAllPosts();
  };

  async function getPostsByTag(value: string) {
    const arr = await postService.filterByTag({tag: value});
    if (arr) setReflectionPosts(arr);
  }

  async function handleClick(event) {
    if (event.target.value === 'all') {
      await getAllPosts();
    } else {
      await getPostsByTag(event.target.value);
    }
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className={styles.welcomePageContainer}>
      <PageHeader title={'Рефлексии других учителей:'}
                  handleSearch={handleSearch}/>
      <div className={styles.addButton}>
        <DefaultButton bgColor="#7F5283"
                       onClick={() => setOpen(true)}>+
          Добавить пост
        </DefaultButton>
        <Modal open={open} handleClose={() => setOpen(false)}>
          <AddPost isReflection onSubmit={onPostSubmit}/>
        </Modal>
      </div>

      <ReflexTags handleClick={handleClick}/>

      <div className={styles.list}>
        {
          reflectionPosts?.map((el, index) =>
            <Post onCommentSubmit={onCommentSubmit} data={el} key={el.id}/>,
          )
        }
      </div>
    </div>
  );
}

export default Reflections;