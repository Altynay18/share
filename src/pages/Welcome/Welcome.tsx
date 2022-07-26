// @flow
import * as React from 'react';
import Post from '../../components/Post';
import styles from './Welcome.module.scss';
import {Input, InputGroup, InputRightElement} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';


type Props = {};

export function Welcome(props: Props) {
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

      <Post />
    </div>
  );
};