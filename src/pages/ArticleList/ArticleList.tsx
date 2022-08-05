import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './ArticleList.module.scss';
import PageHeader from '../../components/PageHeader';
import AddIcon from '@mui/icons-material/Add';
import {ArticleService} from '../../services/ArticleService';
import {ROUTES} from '../../constants';

function ArticleList() {
  const [pdfList, setPdfList] = useState([]);
  const articleService = new ArticleService();

  const handleChange = async (e) => {
    const target = e.target as HTMLInputElement;
    const formData = new FormData();
    formData.append('file', target.files[0]);
    const response = await articleService.uploadPdf(formData);
    console.log(target.files[0], response);
  };
  const handleSearch = (value) => {

  };

  async function getPdf() {
    const res = await articleService.getPdfList();
    setPdfList(res);
  }


  useEffect(() => {
    getPdf();
  }, []);
  return (
    <div className={styles.articles}>
      <PageHeader handleSearch={handleSearch} title={'Статьи'}/>
      <label htmlFor="addFile">
        <div className={styles.addFile}>
          <AddIcon/>Add File
          <input onChange={handleChange} id="addFile" type="file"
                 accept={'application/pdf'}/>
        </div>

      </label>
      <div className={styles.list}>
        {pdfList.map((el, i) => (
          <Link to={ROUTES.ARTICLES + `/${el.id}`}>
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;