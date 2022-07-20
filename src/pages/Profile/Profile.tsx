import styles from './Profile.module.scss';
import UserCard from '../../components/UserCard';
import {Outlet} from 'react-router';

const Profile = () => {

  return (
    <div className={styles.profileContainer}>
      <UserCard />
      <div className={styles.infoSection}>
        <div className={styles.navs}>

        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default Profile;
