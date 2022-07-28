import React from 'react'
import styles from './Reflections.module.scss'
import Post from '../../components/Post'
import {Badge, Stack} from '@chakra-ui/react'
import {Input, InputGroup, InputRightElement} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';
function Reflections() {
  // const[reflectionPosts, setReflectionPosts] = useState()
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
        <Stack direction='row' spacing={'3rem'}>
          <Badge padding={'1rem 2rem'} colorScheme='green' borderRadius={'1rem'}>Все посты</Badge>
          <Badge padding={'1rem 2rem'} colorScheme='green' borderRadius={'1rem'}>Обучение и преподавание</Badge>
          <Badge padding={'1rem 2rem'} colorScheme='red' borderRadius={'1rem'}>Сотрудничество учителей</Badge>
          <Badge padding={'1rem 2rem'} colorScheme='purple' borderRadius={'1rem'}>Создание условий</Badge>
          <Badge padding={'1rem 2rem'} colorScheme='yellow' borderRadius={'1rem'}>Методология AR</Badge>
          <Badge padding={'1rem 2rem'} colorScheme='twitter' borderRadius={'1rem'}>Сопровождение учащегося</Badge>
        </Stack>
      </div>
      <Post />
    </div>
  )
}

export default Reflections;