import './MyProjects.module.scss';
import {useEffect, useState} from 'react';
// import {useDisclosure} from '@chakra-ui/react';
// import {useFormik} from 'formik';
import styles from './MyProjects.module.scss';
import DefaultButton from '../../../components/DefaultButton';
import Modal from '../../../components/Modal';
import AddProject from '../../../components/Forms/AddProject';
import {ProjectService} from '../../../services/ProjectService';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../constants';

const MyProjects = () => {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const projectService = new ProjectService();

  async function getProjects() {
    const projects = await projectService.getProjects();
    setProjects(projects);
  }

  useEffect(() => {
    getProjects();
  }, []);


  return (
    <div className={styles.projects}>
      {projects.map((el, i) => (
        <Link to={ROUTES.PROJECTS + `/${el.id}`}>{el.title}</Link>
      ))}
      <DefaultButton onClick={() => setOpen(true)}> + Создать
        проект</DefaultButton>
      <Modal open={open} handleClose={() => setOpen(false)}>
        <AddProject afterSubmit={() => setOpen(false)}/>
      </Modal>
    </div>
  );
};
export default MyProjects;
