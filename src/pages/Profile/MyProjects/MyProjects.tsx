import './MyProjects.module.scss';
import {useState} from 'react';
// import {useDisclosure} from '@chakra-ui/react';
// import {useFormik} from 'formik';
import styles from './MyProjects.module.scss';
import DefaultButton from '../../../components/DefaultButton';
import Modal from '../../../components/Modal';
import AddProject from '../../../components/Forms/AddProject';

const MyProjects = () => {
  // const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  // const {isOpen, onOpen, onClose} = useDisclosure();
  // const validate = (values: any) => {
  //   const errors = {};
  //   return errors;
  // };
  // const formik = useFormik({
  //   initialValues: {
  //     project_name: '',
  //     user1: '',
  //     user2: '',
  //     user3: 'altynay@gmail.com',
  //   },
  //   validate,
  //   onSubmit: (values: any) => {
  //   },
  // });

  return (
    <div className={styles.projects}>
      <DefaultButton onClick={() => setOpen(true)}> + Создать
        проект</DefaultButton>
      <Modal open={open} handleClose={() => setOpen(false)}>
        <AddProject onSubmit={() => setOpen(false)} />
      </Modal>
    </div>
  );
};
export default MyProjects;
