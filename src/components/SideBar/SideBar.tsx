import './SideBar.module.scss';
import {Link, useNavigate} from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ArticleIcon from '@mui/icons-material/Article';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import FeedIcon from '@mui/icons-material/Feed';
import styles from './SideBar.module.scss';
import {ROUTES} from '../../constants';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}>SHARE</div>
      <Link to={ROUTES.PROFILE} className={styles.menuItem}>
        <PermIdentityIcon />
        Мой профиль
      </Link>
      <Link to={ROUTES.FEED} className={styles.menuItem}>
        <DynamicFeedIcon />
        Лента
      </Link>
      <Link to={ROUTES.ARTICLES} className={styles.menuItem}>
        <ArticleIcon />
        Статьи
      </Link>
      <Link to={ROUTES.MENTORSHIP} className={styles.menuItem}>
        <CastForEducationIcon />
        Менторство
      </Link>
      <Link to={ROUTES.TRAINING} className={styles.menuItem}>
        <FeedIcon />
        Обучение
      </Link>
    </div>
  );
};
export default SideBar;
