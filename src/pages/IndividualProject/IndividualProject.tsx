import styles from './IndividualProject.module.scss';
import React, {useEffect, useState} from 'react';
import {ProjectService} from '../../services/ProjectService';
import {useParams} from 'react-router';
import PageHeader from '../../components/PageHeader';
import ProjectPost from '../../components/ProjectPost';
import DefaultButton from '../../components/DefaultButton';
import Modal from '../../components/Modal';
import AddProjectPost from '../../components/Forms/AddProjectPost';
import {COLORS} from '../../constants';

const IndividualProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState([]);
  const {projectId} = useParams();
  const projectService = new ProjectService();
  const handleSearch = (value) => {

  };

  async function onSubmit(data) {
    const res = await projectService.addProjectPost({
      ...data, project_id: projectId,
    });
    setIsOpen(false);
  }

  async function getProject() {
    const res = await projectService.getProjectPosts(projectId);
    setProject(res);
  }

  useEffect(() => {
    getProject();
  }, []);
  return (
    <div className={styles.individualProject}>
      <PageHeader handleSearch={handleSearch} title={'Project'}/>
      <DefaultButton maxWidth={'15rem'} bgColor={COLORS.DARK_GRAY}  onClick={() => setIsOpen(true)}>Add Post</DefaultButton>
      {project.map((el) => (
        <ProjectPost data={el}/>
      ))}

      <Modal open={isOpen} handleClose={() => setIsOpen(false)}>
        <AddProjectPost onSubmit={onSubmit}/>
      </Modal>
    </div>
  );
};
export default IndividualProject;
