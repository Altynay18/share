import styles from './Meeting.module.scss';
import Modal from '../../components/Modal';
import {AddMeeting} from './AddMeeting';
import {useState} from 'react';
import DefaultButton from '../../components/DefaultButton';
import AddIcon from '@mui/icons-material/Add';
import PageHeader from '../../components/PageHeader';
import {COLORS} from '../../constants';

const Meeting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const arr = new Array(5).fill(0);
  const handleSearch = (value) => {

  };
  return (
    <div className={styles.meeting}>
      <PageHeader handleSearch={handleSearch} title={'Список встреч'}/>
      <DefaultButton maxWidth={'15rem'} bgColor={COLORS.DARK_GRAY} onClick={() => setIsOpen(true)}>
        <><AddIcon/>add meeting</>
      </DefaultButton>
      <div className={styles.list}>
        {arr.map((el, i) => (
          <div key={i}>Meeting Name</div>
        ))}
      </div>
      <Modal handleClose={() => setIsOpen(false)} open={isOpen}>
        <AddMeeting afterSubmit={() => setIsOpen(false)}/>
      </Modal>
    </div>
  );
};
export default Meeting;
