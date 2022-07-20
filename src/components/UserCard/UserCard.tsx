import styles from './UserCard.module.scss';
import avatarImg from '../../assets/images/avatar.png';

const UserCard = () => {

  return (
    <div className={styles.userCard}>
      <div className={styles.header}>
        <img src={avatarImg} className={styles.avatar} alt="avatar" />
        <div className={styles.userName}>John Doe</div>
      </div>
      <div className={styles.body}>
        <div className={styles.row}>
          <span>Место работы:</span><span>Школа-гимназия им. Абая</span>
        </div>
        <div className={styles.row}>
          <span>Почта:</span><span>string</span>
        </div>
        <div className={styles.row}>
          <span>Город:</span><span>Алматы</span>
        </div>
        <div className={styles.row}>
          <span>Стаж:</span><span>12 лет</span></div>
      </div>

    </div>
  );
};
export default UserCard;
