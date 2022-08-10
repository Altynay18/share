// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import styles from './PendingUsers.module.scss';
import {AdminService} from '../../../services/AdminService';
import {useToast} from '@chakra-ui/react';

type Props = {};

export function PendingUsers(props: Props) {
  const [userList, setUserList] = useState([]);
  const toast = useToast();
  const adminService = new AdminService();

  async function getPendingUserList() {
    const res = await adminService.getPendingUsers();
    setUserList(res);
  }

  const approve = async (user) => {
    const res = await adminService.activateUser(user);
    if (res) {
      toast({
        title: 'Вы успешно создали проект!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      getPendingUserList();
    } else {
      toast({
        title: 'Ошибка! Проверьте все данные',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const deleteUser = async (user) => {
    await adminService.deleteUser(user.id);
  };
  useEffect(() => {
    getPendingUserList();
  }, []);
  return (
    <div className={styles.pendingUsers}>
      <div className={styles.title}>Запросы на авторизацию:</div>
      {userList?.map((el, i) => (
        <div key={i} className={styles.row}>
          <span className={styles.id}>{el.id}</span>
          <span className={styles.email}>{el.firstname} {el.lastname}</span>
          <button onClick={() => approve(el)}
                  className={styles.approve}>APPROVE
          </button>
          <button onClick={() => deleteUser(el)}
                  className={styles.reject}>REJECT
          </button>
        </div>
      ))}
    </div>
  );
};