import styles from './Profile.module.scss';
import UserCard from '../../components/UserCard';

const Profile = () => {

  return (
    <div className={styles.profileContainer}>
      <UserCard/>
      <div className={styles.infoSection}>

      </div>
    </div>
  );
};
export default Profile;
