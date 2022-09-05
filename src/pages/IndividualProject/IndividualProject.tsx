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

  const handleSearch = async (value) => {
    const res = await projectService.search({
      title: value, description: '',
    });
    if (res) {
      setProject(res);
    }
  };

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('text', data.text);
    if(data?.file[0]) formData.append('file', data.file[0]);
    if(data?.image[0]) formData.append('image', data.image[0]);
    formData.append('project_id', projectId)
    const res = await projectService.addProjectPost(formData);
    setIsOpen(false);
    if (res) {
      getProject();
    }
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
      <PageHeader handleSearch={handleSearch} title={'Project'} />
      <DefaultButton maxWidth={'15rem'}
        onClick={() => setIsOpen(true)}>+ Add Post</DefaultButton>
      <div className={styles.list}>
        {project.map((el) => (
          <ProjectPost data={el} />
        ))}
      </div>

      <Modal open={isOpen} handleClose={() => setIsOpen(false)}>
        <AddProjectPost onSubmit={onSubmit} />
      </Modal>
    </div>
  );
};
export default IndividualProject;
