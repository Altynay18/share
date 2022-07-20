import styles from './Profile.module.scss';
import UserCard from '../../components/UserCard';
import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import {Outlet} from 'react-router';
import {useNavigate} from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.profileContainer}>
      <UserCard />
      <div className={styles.infoSection}>
        <div className={styles.navs}>
          <Tabs>
            <TabList>
              <Tab fontWeight={"600"} backgroundColor={"#fff"} fontSize={'1rem'} color={'#564D80'} onClick={() => navigate('')}>Мои посты</Tab>
              <Tab fontWeight={"600"} marginLeft={"3rem"} backgroundColor={"#fff"} fontSize={'1rem'} color={'#564D80'} onClick={() => navigate('addPosts')}>
                Написать пост
              </Tab>
              <Tab fontWeight={"600"} marginLeft={"3rem"} backgroundColor={"#fff"} fontSize={'1rem'} color={'#564D80'} onClick={() => navigate('projects')}>
                Мои проекты
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel
              >
              </TabPanel>
              <TabPanel>
              </TabPanel>
              <TabPanel >
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <Outlet />

      </div>
    </div>
  );
};
export default Profile;
