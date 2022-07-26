import styles from './Header.module.scss';
import avatar from '../../assets/images/avatar.png';
// import {Input, InputGroup, InputRightElement} from '@chakra-ui/react';
// import {SearchIcon} from '@chakra-ui/icons';

const Header = () => {
  return (
    <div className={styles.header}>
      {/* <InputGroup size="md" width={'20%'}>
        <Input
          pr="4.5rem"
          border="2px"
          placeholder="Поиск"
        />
        <InputRightElement>
          <SearchIcon aria-label="Search database" />
        </InputRightElement>
      </InputGroup> */}
      <div className={styles.logout}>Выйти</div>
      <img src={avatar} className={styles.avatar} alt="avatar" height={50}
        width={50} />
    </div>
  );
};

export default Header;
