import styles from './Profile.module.scss';
import UserCard from '../../components/UserCard';
import Post from '../../components/Post';
const Profile = () => {

  return (
    <div className={styles.profileContainer}>
      <UserCard />
      <div className={styles.infoSection}>
        <Post />
      </div>
    </div>
  );
};
export default Profile;
