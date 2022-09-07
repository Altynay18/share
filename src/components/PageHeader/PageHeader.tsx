// @flow
import * as React from 'react';
import {useState} from 'react';
import styles from './PageHeader.module.scss';
import {Input, InputGroup, InputRightElement} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';

type Props = {
  title: string,
  handleSearch: (arg: string) => void
};

export function PageHeader({title, handleSearch}: Props) {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <div className={styles.welcomePageTitle}>
      {title}
      <InputGroup size="md" className={styles.search}>
        <Input
          pr="4.5rem"
          border="2px"
          placeholder="Поиск"
          onChange={handleChange}
          value={text}
        />
        <InputRightElement>
          <SearchIcon aria-label="Search database"/>
        </InputRightElement>
      </InputGroup>
    </div>
  );
}
