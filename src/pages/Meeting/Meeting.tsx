import styles from './Meeting.module.scss';
import Modal from '../../components/Modal';
import {AddMeeting} from './AddMeeting';
import {useState} from 'react';
import DefaultButton from '../../components/DefaultButton';
import AddIcon from '@mui/icons-material/Add';
import PageHeader from '../../components/PageHeader';

const Meeting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const arr = new Array(5).fill(0);
  return (
    <div className={styles.mentorship}>
      <PageHeader title={'Список встреч'}/>
      <DefaultButton maxWidth={'15rem'} onClick={() => setIsOpen(true)}>
        <><AddIcon/>add meeting</>
      </DefaultButton>
      {arr.map((el, i) => (
        <div key={i}>Meeting Name</div>
      ))}
      <Modal handleClose={() => setIsOpen(false)} open={isOpen}>
        <AddMeeting afterSubmit={() => setIsOpen(false)}/>
      </Modal>
    </div>
  );
};
export default Meeting;
