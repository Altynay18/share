import styles from './Profile.module.scss';
import UserCard from '../../components/UserCard';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {Outlet} from 'react-router';
import {useNavigate} from 'react-router-dom';
import {ROLES, ROUTES} from '../../constants';


const Profile = () => {
  const navigate = useNavigate();
  const isAdmin = sessionStorage.getItem('role') === ROLES.ADMIN;
  return (
    <div className={styles.profileContainer}>
      <UserCard />
      <div className={styles.infoSection}>
        <div className={styles.navs}>
          <Tabs>
            <TabList className={styles.buttons}>
              <Tab fontWeight={'600'} fontSize={'1rem'} color={'#564D80'}
                onClick={() => navigate(ROUTES.PROFILE)}>Мои посты</Tab>
              {isAdmin &&
                <Tab fontWeight={'600'} marginLeft={'1rem'} fontSize={'1rem'}
                  color={'#564D80'}
                  onClick={() => navigate(ROUTES.PENDING_USERS)}>Пользователи</Tab>
              }

              <Tab fontWeight={'600'} marginLeft={'1rem'} fontSize={'1rem'}
                color={'#564D80'}
                onClick={() => navigate(ROUTES.MY_PROJECTS)}>
                Мои проекты
              </Tab>
              <Tab fontWeight={'600'} marginLeft={'1rem'} fontSize={'1rem'}
                color={'#564D80'}
                onClick={() => navigate(ROUTES.SETTINGS)}>
                Настройки
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <Outlet />

      </div>
    </div>
  );
};
export default Profile;
