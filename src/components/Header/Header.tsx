import styles from './Header.module.scss';
import avatar from '../../assets/images/avatar.png';
import {useNavigate} from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import {ROUTES} from '../../constants';
import {useCallback, useEffect, useState} from 'react';
import {MeetingService} from '../../services/MeetingService';

const Header = () => {
  const [status, setStatus] = useState(false);
  const meetingService = new MeetingService()

  const getNotifications = useCallback(async () => {
    const arr = await meetingService.getNotifications();
    setStatus(arr);
  }, []);

  useEffect(() => {
    getNotifications();
  }, []);

  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem('access_token');
    navigate('/login');
  };
  return (
    <div className={styles.header}>
      <div onClick={logout} className={styles.logout}>Выйти</div>
      {status === true ? <NotificationsNoneIcon onClick={() => navigate(ROUTES.NOTIFICATION)} /> : <NotificationsPausedIcon onClick={() => navigate(ROUTES.NOTIFICATION)} />

      }
      <img src={avatar} className={styles.avatar} alt="avatar" height={50}
        width={50} />
    </div>
  );
};

export default Header;
