// @flow
import * as React from 'react';
import Post from '../../components/Post';
import styles from './Welcome.module.scss';
import {Input, InputGroup, InputRightElement} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';
import DefaultButton from '../../components/DefaultButton';
import {useState} from 'react';
import Modal from '../../components/Modal';
import AddPost from '../Profile/AddPost';


type Props = {};

export function Welcome(props: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.welcomePageContainer}>

      <div className={styles.welcomePageTitle} >
        Лента новостей:
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
      <div className={styles.addButton}> <DefaultButton bgColor='#9DA2A5' onClick={() => setOpen(true)}>+ Добавить пост</DefaultButton>
        <Modal open={open} handleClose={() => setOpen(false)}>
          <AddPost />
        </Modal></div>
    </div>
  );
};