import React, {useCallback, useEffect, useState} from 'react';
import styles from './Reflections.module.scss';
import Post from '../../components/Post';
import {ReflectionPostService} from '../../services/ReflectionPostService';
import {TAG_NAMES} from '../../constants';
import DefaultButton from '../../components/DefaultButton';
import AddPost from '../../components/Forms/AddPost';
import Modal from '../../components/Modal';
import PageHeader from '../../components/PageHeader';

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
  };
  const onPostSubmit = async (data) => {
    const res = await postService.addPost({
      ...data, tag: [data.tag],
    });
  };

  async function getPostsByTag(value: string) {
    const arr = await postService.filterByTag({tag: value});
    setReflectionPosts(arr);
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

  console.log(reflectionPosts);
  return (
    <div className={styles.welcomePageContainer}>
      <PageHeader title={'Рефлексии других учителей:'}
        handleSearch={handleSearch} />
      <div className={styles.addButton}><DefaultButton bgColor="#7F5283"
        onClick={() => setOpen(true)}>+
        Добавить пост</DefaultButton>
        <Modal open={open} handleClose={() => setOpen(false)}>
          <AddPost isReflection onSubmit={onPostSubmit} />
        </Modal>
      </div>
      <div className={styles.tags}>
        <button className={styles.categoryTag1} value="all"
          onClick={handleClick}>All posts
        </button>
        <button className={styles.categoryTag2}
          value={TAG_NAMES.TRAINING_AND_TEACHING}
          onClick={handleClick}>Обучение и преподавание
        </button>
        <button className={styles.categoryTag3}
          value={TAG_NAMES.TEACHERS_COLLABORATION}
          onClick={handleClick}>Сотрудничество учителей
        </button>
        <button className={styles.categoryTag4}
          value={TAG_NAMES.CREATE_CONDITIONS}
          onClick={handleClick}>Создание условий
        </button>
        <button className={styles.categoryTag5} value={TAG_NAMES.METHODOLOGY_AR}
          onClick={handleClick}>Методология AR
        </button>
        <button className={styles.categoryTag6}
          value={TAG_NAMES.TRAINEE_SUPPORT}
          onClick={handleClick}>Сопровождение учащегося
        </button>

      </div>
      <div className={styles.list}>
        {
          reflectionPosts?.map((el, index) =>
            <Post onCommentSubmit={onCommentSubmit} data={el} key={el.id} />,
          )
        }
      </div>
    </div>
  );
}

export default Reflections;