import styles from './Header.module.scss';
import avatar from '../../assets/images/avatar.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logout}>Выйти</div>
      <img src={avatar} className={styles.avatar} alt="avatar" height={50}
           width={50} />
    </div>
  );
};

export default Header;
