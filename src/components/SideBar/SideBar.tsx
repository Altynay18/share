import './SideBar.module.scss';
import {Link} from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ArticleIcon from '@mui/icons-material/Article';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import styles from './SideBar.module.scss';
import {ROUTES} from '../../constants';

const SideBar = () => {
  // const [clicked, setClicked] = useState(false);
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.title}>SHARE</div>
        <Link to={ROUTES.PROFILE} className={styles.menuItem}>
          <PermIdentityIcon />
          Мой профиль
        </Link>
        <Link to={ROUTES.MAIN} className={styles.menuItem}>
          <DynamicFeedIcon />
          Анонсы
        </Link>
        <Link to={ROUTES.REFLECTIONS} className={styles.menuItem}>
          <DynamicFeedIcon />
          Рефлексивная лента
        </Link>
        <Link to={ROUTES.ARTICLES} className={styles.menuItem}>
          <ArticleIcon />
          Статьи
        </Link>
        <Link to={ROUTES.MENTORSHIP} className={styles.menuItem}>
          <CastForEducationIcon />
          Встречи
        </Link>
        {/*<Link to={ROUTES.TRAINING} className={styles.menuItem}>*/}
        {/*  <FeedIcon/>*/}
        {/*  Обучение*/}
        {/*</Link>*/}
      </div>
      <div className={styles.bottom}>
        <Link to={ROUTES.SEARCH_USER} className={styles.menuItem}>
          <PersonSearchIcon />
          Поиск учителей
        </Link>
      </div>
    </div>
  );
};
export default SideBar;
