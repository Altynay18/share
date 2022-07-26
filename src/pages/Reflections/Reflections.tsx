import React from 'react'
import styles from './Reflections.module.scss'
import Post from '../../components/Post'
import {Badge, Stack} from '@chakra-ui/react'
function Reflections() {
  return (
    <div className={styles.welcomePageContainer}>
      <div className={styles.welcomePageTitle} >
        Рефлексии других учителей:
      </div>
      <div className={styles.tags}>
        <Stack direction='row' spacing={'3rem'}>
          <Badge padding={'1rem 2rem'} colorScheme='green' borderRadius={'1rem'}>Тэг 1</Badge>
          <Badge padding={'1rem 2rem'} colorScheme='red' borderRadius={'1rem'}>Тэг 2</Badge>
          <Badge padding={'1rem 2rem'} colorScheme='purple' borderRadius={'1rem'}>Тэг 3</Badge>
          <Badge padding={'1rem 2rem'} colorScheme='yellow' borderRadius={'1rem'}>Тэг 4</Badge>
        </Stack>
      </div>
      <Post />
    </div>
  )
}

export default Reflections;