import React, {useCallback, useEffect, useState} from 'react'
import styles from './Reflections.module.scss'
import Post from '../../components/Post'
import {Badge, Select} from '@chakra-ui/react'
import {Input, InputGroup, InputRightElement} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';
import {PostService} from '../../services/PostService';
import {TAG_NAMES} from '../../constants'

function Reflections() {
  const [reflectionPosts, setReflectionPosts] = useState([]);
  const postService = new PostService();

  const getAllPosts = useCallback(async () => {
    const arr = await postService.getAllPosts();
    setReflectionPosts(arr);
  }, []);


  async function getPostsByTag(value: string) {
    const arr = await postService .filterByTag({name: value});
    console.log('hello')
    setReflectionPosts(arr);
  }

  function handleSelectChange(event) {
    getPostsByTag(event.target.value);
  }


  useEffect(() => {
    getAllPosts();
  }, []);

  console.log(reflectionPosts);
  return (
    <div className={styles.welcomePageContainer}>
      <div className={styles.welcomePageTitle} >
        Рефлексии других учителей:
        <InputGroup size="md" width={'20%'}>
          <Input
            pr="4.5rem"
            border="2px"
            placeholder="Поиск"
          />
          <InputRightElement>
            <SearchIcon aria-label="Search database" />
          </InputRightElement>
        </InputGroup>
      </div>
      <div className={styles.tags}>
        <select placeholder='Выберите тег' onChange={handleSelectChange}>
          <option>Выбрать тег</option>
          <option value={TAG_NAMES.TRAINING_AND_TEACHING}> Обучение и преподавание</option>
          <option value={TAG_NAMES.TEACHERS_COLLABORATION}>Сотрудничество учителей</option>
          <option value={TAG_NAMES.CREATE_CONDITIONS}>Создание условий</option>
          <option value={TAG_NAMES.METHODOLOGY_AR} >Методология AR</option>
          <option value={TAG_NAMES.TRAINEE_SUPPORT} >Сопровождение учащегося</option>
        </select>
      </div>
      {
        reflectionPosts?.map((el, index) =>
          <Post data={el} key={el.id} />
        )
      }
    </div >
  )
}

export default Reflections;