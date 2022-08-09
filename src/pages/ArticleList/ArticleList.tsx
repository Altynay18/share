import React, {useCallback, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './ArticleList.module.scss';
import {ArticleService} from '../../services/ArticleService';
import {ROUTES} from '../../constants';
import ReflexTags from '../../components/ReflexTags';
import Modal from '../../components/Modal';
import AddPdf from '../../components/Forms/AddPdf';
import DefaultButton from '../../components/DefaultButton';
import AddIcon from '@mui/icons-material/Add';

function ArticleList() {
  const [pdfList, setPdfList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const articleService = new ArticleService();


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
      await getPdf();
    } else {
      await getArticlesByTag(e.target.value);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('file', data.file[0]);
    const response = await articleService.uploadPdf(formData, data.tag);
    if (response) await getPdf();
  };
  useEffect(() => {
    getPdf();
  }, []);
  return (
    <div className={styles.articles}>
      <div className={styles.title}>Article List</div>
      <div className={styles.addButton}>
        <DefaultButton maxWidth={"15rem"} onClick={() => setIsOpen(true)}>
          <><AddIcon/> Загрузить файл</>
        </DefaultButton>
      </div>
      <ReflexTags handleClick={handleClick}/>
      <div className={styles.list}>
        {pdfList.map((el, i) => (
          <Link key={i} to={ROUTES.ARTICLES + `/${el.id}`}>
            {el.title}
          </Link>
        ))}
      </div>
      <Modal open={isOpen} handleClose={() => setIsOpen(false)}>
        <AddPdf onSubmit={onSubmit}/>
      </Modal>
    </div>
  );
}

export default ArticleList;