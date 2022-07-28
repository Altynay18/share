import React, {useCallback, useEffect, useState} from 'react'
import styles from './Reflections.module.scss'
import Post from '../../components/Post'
import {Badge, Select} from '@chakra-ui/react'
import {Input, InputGroup, InputRightElement} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';
import {Service} from '../../services/Service';
import {TAG_NAMES} from '../../constants'

function Reflections() {
  const [reflectionPosts, setReflectionPosts] = useState([]);
  const service = new Service();

  const getAllPosts = useCallback(async () => {
    const arr = await service.getAllPosts();
    setReflectionPosts(arr);
  }, []);

  async function getPostsByTag(value: string) {
    const arr = await service.filterByTag({name: value});
    console.log('hello')
    setReflectionPosts(arr);
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
        {/* <Stack direction='row' spacing={'3rem'}>
         
        </Stack> */}
        <Select placeholder='Выберите тег'>
          <option value={TAG_NAMES.TRAINING_AND_TEACHING} onClick={() => getPostsByTag(TAG_NAMES.TRAINING_AND_TEACHING)}> Обучение и преподавание</option>
          <option value={TAG_NAMES.TEACHERS_COLLABORATION} onClick={() => getPostsByTag(TAG_NAMES.TEACHERS_COLLABORATION)}>Сотрудничество учителей</option>
          <option value={TAG_NAMES.CREATE_CONDITIONS} onClick={() => getPostsByTag(TAG_NAMES.CREATE_CONDITIONS)}>Создание условий</option>
          <option value={TAG_NAMES.METHODOLOGY_AR} onClick={() => getPostsByTag(TAG_NAMES.METHODOLOGY_AR)}>Методология AR</option>
          <option value={TAG_NAMES.TRAINEE_SUPPORT} onClick={() => getPostsByTag(TAG_NAMES.TRAINEE_SUPPORT)}>Сопровождение учащегося</option>
        </Select>
      </div>
      {
        reflectionPosts.map((el, index) =>
          <Post data={el} key={el.id} />
        )
      }
    </div >
  )
}

export default Reflections;