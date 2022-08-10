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

  const handleAfterSubmit = () => {
    setOpen(false)
    getProjects();
  }

  useEffect(() => {
    getProjects();
  }, []);


  return (
    <div className={styles.projects}>

      <div className={styles.projectCardContainer}>
        {projects?.map((el, i) => (
          <Link to={ROUTES.PROJECTS + `/${el.id}`} key={el.id}>
            <div className={styles.projectCard}>
            </div>
            <div className={styles.links}><Link
              to={ROUTES.PROJECTS + `/${el?.id}`}>{el?.title}</Link>
            </div>
          </Link>
        ))
        }
      </div>
      <div className={styles.actions}>
        <DefaultButton onClick={() => setOpen(true)} bgColor={'#7F5283'} maxWidth={'30%'}> + Создать
          проект</DefaultButton>
        <Modal open={open} handleClose={() => setOpen(false)}>
          <AddProject afterSubmit={handleAfterSubmit} />
        </Modal>
      </div>


    </div>
  );
};
export default MyProjects;
