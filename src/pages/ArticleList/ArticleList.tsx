import React, {useCallback, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './ArticleList.module.scss';
import AddIcon from '@mui/icons-material/Add';
import {ArticleService} from '../../services/ArticleService';
import {ROUTES} from '../../constants';
import ReflexTags from '../../components/ReflexTags';

function ArticleList() {
  const [pdfList, setPdfList] = useState([]);
  const articleService = new ArticleService();

  const handleChange = async (e) => {
    const target = e.target as HTMLInputElement;
    const formData = new FormData();
    formData.append('file', target.files[0]);
    const response = await articleService.uploadPdf(formData);

    if (response) {
      getPdf();
    }
  };

  const getPdf = useCallback(async () => {
    const res = await articleService.getPdfList();
    if (res) setPdfList(res);
  }, []);

  async function getArticlesByTag(value: string) {
    const arr = await articleService.filterByTag(value);
    if (arr) setPdfList(arr);
  }

  const handleClick = async (e) => {
    if (e.target.value === 'all') {
      await getPdf;
    } else {
      await getArticlesByTag(e.target.value);
    }
  };
  useEffect(() => {
    getPdf();
  }, []);
  return (
    <div className={styles.articles}>
      <div className={styles.title}>Article List</div>
      <label htmlFor="addFile">
        <div className={styles.addFile}>
          <AddIcon/>Add File
          <input onChange={handleChange} id="addFile" type="file"
                 accept={'application/pdf'}/>
        </div>
      </label>
      <ReflexTags handleClick={handleClick}/>
      <div className={styles.list}>
        {pdfList.map((el, i) => (
          <Link key={i} to={ROUTES.ARTICLES + `/${el.id}`}>
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;