import {useCallback, useEffect, useState} from 'react';
import {MeetingService} from '../../services/MeetingService';
import styles from './Notification.module.scss';
import {Box} from '@chakra-ui/react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

type Props = {};

export function Notification(props: Props) {
  const [notifications, setNotifications] = useState([]);
  const meetingService = new MeetingService()

  const getNotifications = useCallback(async () => {
    const arr = await meetingService.getNotifications();
    setNotifications(arr);
  }, []);

  useEffect(() => {
    getNotifications();
  }, []);

  console.log(notifications)

  return (
    <div className={styles.notificationContainer}>
      <div className={styles.notificationTitle}>
        Уведомления:
      </div>
      <div className={styles.notifications}>
        {
          notifications?.map((el, index) =>
            <Box w='100%' p={4} background={'#eecc99'} color='black' key={el.id} borderRadius={'1rem'} border={'1px solid var(--gray)'} marginBottom={'2rem'}>
              <NotificationsNoneIcon />
              {el?.text}
            </Box>
          )
        }
      </div>


    </div>
  );
};