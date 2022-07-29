import styles from './Header.module.scss';
import avatar from '../../assets/images/avatar.png';
import {useNavigate} from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {ROUTES} from '../../constants';

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem('access_token');
    navigate('/login');
  };
  return (
    <div className={styles.header}>
      <div onClick={logout} className={styles.logout}>Выйти</div>
      <NotificationsNoneIcon onClick={() => navigate(ROUTES.NOTIFICATION)}/>
      <img src={avatar} className={styles.avatar} alt="avatar" height={50}
           width={50}/>
    </div>
  );
};

export default Header;
