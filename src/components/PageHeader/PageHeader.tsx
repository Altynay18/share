// @flow
import * as React from 'react';
import styles from './PageHeader.module.scss';
import {Input, InputGroup, InputRightElement} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';

type Props = {
  title: string
};

export function PageHeader({title}: Props) {
  return (
    <div className={styles.welcomePageTitle} >
      {title}:
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
  );
}
