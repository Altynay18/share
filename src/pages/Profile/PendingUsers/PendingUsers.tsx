// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import styles from './PendingUsers.module.scss';
import {AdminService} from '../../../services/AdminService';

type Props = {};

export function PendingUsers(props: Props) {
  const [userList, setUserList] = useState([]);
  const adminService = new AdminService();

  async function getPendingUserList() {
    const res = await adminService.getPendingUsers();
    setUserList(res);
  }

  const approve = async (user) => {
    await adminService.activateUser(user);
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
          <span className={styles.userName}>{el.firstname} {el.lastname}</span>
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