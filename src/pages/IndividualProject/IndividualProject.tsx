import styles from './IndividualProject.module.scss';
import React, {useEffect, useState} from 'react';
import {ProjectService} from '../../services/ProjectService';
import {useParams} from 'react-router';
import PageHeader from '../../components/PageHeader';
import Post from '../../components/Post';
//TODO 
const IndividualProject = () => {
  const [project, setProject] = useState({});
  const {projectId} = useParams();
  const projectService = new ProjectService();
  const handleSearch = (value) => {

  };


  async function addProjectPost(){

  }
  async function getProject() {
    const res = await projectService.getProject(projectId);
    setProject(res);
  }

  useEffect(() => {
    getProject();
  }, []);
  return (
    <div className={styles.individualProject}>
      <PageHeader handleSearch={handleSearch} title={'Project'}/>
      {/*{project.map((el)=>(*/}
      {/*  <Post data={el}/>*/}
      {/*))}*/}
    </div>
  );
};
export default IndividualProject;
