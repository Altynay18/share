import {useParams} from 'react-router';
import styles from './SelectedProfile.module.scss';
import {useEffect, useState} from 'react';
import {AuthService} from '../../services/AuthService';

type Props = {};

export function SelectedProfile(props: Props) {
  const [user, setUser] = useState(null);
  const {userId} = useParams();
  const auth = new AuthService();

  async function getUser() {
    const res = await auth.getUser(userId);
    setUser(res);
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className={styles.selectedProfile}>
      <div className={styles.title}>User Info</div>
      <div className={styles.content}>
        <img height={200} width={200} className={styles.img} src="/avatar.png"  alt="avatar"/>
       <div className={styles.info}>
         <div className={styles.row}>
           <div>First Name</div>
           <div>{user?.firstname}</div>
         </div>
         <div className={styles.row}>
           <div>Last Name</div>
           <div>{user?.lastname}</div>
         </div>
         <div className={styles.row}>
           <div>Username</div>
           <div>{user?.username}</div>
         </div>
       </div>
      </div>
    </div>
  );
};