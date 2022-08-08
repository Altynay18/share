import styles from './UserCard.module.scss';
import avatarImg from '../../assets/images/avatar.png';
import {useContext} from 'react';
import {UserContext} from '../App';

const UserCard = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user)
  return (
    <div className={styles.userCard}>
      <div className={styles.header}>
        <img src={avatarImg} className={styles.avatar} alt="avatar" />
        <div className={styles.userName}>{user?.firstname} {user?.lastname}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.row}>
          <span>Аккаунт:</span><span>{user?.username}</span>
        </div>
        <div className={styles.row}>
          <span>ФИО:</span><span>{user?.firstname + ' '}{user?.lastname}</span>
        </div>
        <div className={styles.row}>
          <span>Место работы:</span><span>{user?.school}</span>
        </div>
        <div className={styles.row}>
          <span>Город:</span><span>{user?.city}</span>
        </div>
        <div className={styles.row}>
          <span>Роль:</span><span>{user?.title}</span></div>
      </div>

    </div>
  );
};
export default UserCard;
