import styles from './UserList.module.scss';
import {ROUTES} from '../../constants';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {AuthService} from '../../services/AuthService';

type Props = {};

export function UserList(props: Props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [school, setSchool] = useState('');
  const [userList, setUserList] = useState([]);
  const authService = new AuthService();

  async function findUser() {
    const result = await authService.findUsers({
      firstName,
      lastName,
      role,
      school,
    });

    setUserList(result);
  }

  useEffect(() => {
    if (firstName || lastName || role || school) {
      findUser();
    }
  }, [firstName, lastName, role, school]);

  console.log(userList);
  return (
    <div className={styles.userList}>
      <div className={styles.title}>Find Users</div>
      <div className={styles.findUser}>
        <div className={styles.row}>
          <div className={styles.inputRow}>
            <label htmlFor="firstName">First Name</label>
            <input value={firstName}
                   onChange={(e) => setFirstName(e.target.value)}
                   placeholder={'First Name'} type="text"/>
          </div>
          <div className={styles.inputRow}>
            <label htmlFor="lastName">Last Name</label>
            <input onChange={(e) => setLastName(e.target.value)}
                   placeholder={'Last Name'} type="text" value={lastName}/>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputRow}>
            <label htmlFor="role">Role</label>
            <input onChange={(e) => setRole(e.target.value)}
                   placeholder={'Role'} type="text" value={role}/>
          </div>
          <div className={styles.inputRow}>
            <label htmlFor="school">School</label>
            <input onChange={(e) => setSchool(e.target.value)}
                   placeholder={'School'} type="text" value={school}/>
          </div>
        </div>
      </div>
      <div className={styles.title}>Search Result</div>
      <div className={styles.list}>
        {userList?.map((el, i) =>
          <Link
            to={ROUTES.USERS + `/${el.id}`}>{el.firstname} {el.lastname}</Link>,
        )}
      </div>
    </div>
  );
};