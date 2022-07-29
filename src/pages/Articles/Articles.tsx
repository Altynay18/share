import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../constants';
import styles from './Articles.module.scss';
import PageHeader from '../../components/PageHeader';
import AddIcon from '@mui/icons-material/Add';
import {ArticleService} from '../../services/ArticleService';

function Articles() {
  const arr = new Array(5).fill(0);
  const articleService = new ArticleService();

  const handleChange = async (e) => {
    const target = e.target as HTMLInputElement;
    const formData = new FormData();
    formData.append('file', target.files[0]);
    const response = await articleService.uploadPdf(formData);
    console.log(target.files[0], response);
  };
  return (
    <div className={styles.articles}>
      <PageHeader title={'Статьи'}/>
      <label htmlFor="addFile">
        <div className={styles.addFile}>
          <AddIcon/>Add File
          <input onChange={handleChange} id="addFile" type="file"
                 accept={'application/pdf'}/>
        </div>

      </label>
      <div className={styles.list}>
        {arr.map((el, i) => (
          <Link to={ROUTES.ARTICLES + '/1'}>
            article url
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Articles;