import styles from './Profile.module.scss';
import UserCard from '../../components/UserCard';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {Outlet} from 'react-router';
import {useNavigate} from 'react-router-dom';
import {ROUTES} from '../../constants';


const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.profileContainer}>
      <UserCard/>
      <div className={styles.infoSection}>
        <div className={styles.navs}>
          <Tabs>
            <TabList>
              <Tab fontWeight={'600'} fontSize={'1rem'} color={'#564D80'}
                   onClick={() => navigate(ROUTES.PROFILE)}>Мои посты</Tab>
              <Tab fontWeight={'600'} marginLeft={'3rem'} fontSize={'1rem'}
                   color={'#564D80'} onClick={() => navigate(ROUTES.ADD_POSTS)}>
                Написать пост
              </Tab>
              <Tab fontWeight={'600'} marginLeft={'3rem'} fontSize={'1rem'}
                   color={'#564D80'}
                   onClick={() => navigate(ROUTES.MY_PROJECTS)}>
                Мои проекты
              </Tab>
              <Tab fontWeight={'600'} marginLeft={'3rem'} fontSize={'1rem'}
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
        <Outlet/>

      </div>
    </div>
  );
};
export default Profile;
