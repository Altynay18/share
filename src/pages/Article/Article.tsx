import * as React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import DefaultButton from '../../components/DefaultButton';
import {ArticleService} from '../../services/ArticleService';
import styles from './Article.module.scss';
import Comment from '../../components/Comment';
import './rangy.css';
import AddAnnotation from '../../components/Forms/AddAnnotation';
import Modal from '../../components/Modal';

type Props = {};

export function Article(props: Props) {
  const {articleId} = useParams();
  const [currentSelection, setCurrentSelection] = useState(null);
  const [annotationList, setAnnotationList] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const articleService = new ArticleService();
  const arr = new Array(10).fill(0);
  const [isOpen, setIsOpen] = useState(true);

  function surroundSelection() {
    const range = window.getSelection().getRangeAt(0);
    let element = document.createElement('span');
    const newID = articleService.createNewHighlight();

    element.classList.add('note');
    element.id = newID;
    element.appendChild(range.extractContents());
    element.addEventListener('click', handleSelectionClick);
    range.insertNode(element);
  }

  function parserAllSelection() {
    const allSelection = getAllSelection();
    for (const selection of allSelection) {
      selection.addEventListener('click', handleSelectionClick);
    }
  }

  function getAllSelection() {
    return document.querySelectorAll('.note');
  }

  async function handleSelectionClick(e) {
    const target = e.target;
    const annotationList = await articleService.getAnnotationList();
    setCurrentSelection(e.target);
    // todo setAnnotationList(annotationList)
  }

  function removeSelection() {
    const target = currentSelection;
    const isHighlighted = target.classList.value.includes('note');
    if (isHighlighted) {
      target.replaceWith(...target.childNodes);
      resetSelection();
    }
  }

  function resetSelection() {
    setCurrentSelection('');
    setAnnotationList([]);
  }

  async function fetchArticle() {
    const {
      highlightList,
      articleContent,
    } = await articleService.getArticleInfo();
    setCurrentArticle(articleContent);
  }

  useEffect(() => {
    parserAllSelection();
  }, [currentArticle]);
  useEffect(() => {
    fetchArticle();
  }, []);
  return (
    <div className={styles.article}>
      <div className={styles.articleHeader}>
        <DefaultButton
          onClick={() => surroundSelection()}>surround</DefaultButton>
        <DefaultButton onClick={() => removeSelection()}>Delete</DefaultButton>
      </div>
      <div className={styles.articleBody}>
        <div
          className={styles.articleContent}
          id={'article-content'}
          dangerouslySetInnerHTML={{__html: currentArticle}}
        />
        <div className={styles.annotations}>
          <div className={styles.miniTitle}>Highlighted Text</div>
          <div className={styles.annotationHeader}>
            {currentSelection &&
              <div id={currentSelection.id}
                   dangerouslySetInnerHTML={{__html: currentSelection.innerHTML}}/>}
          </div>

          <div className={styles.annotationBody}>
            <div className={styles.miniTitle}>Annotations</div>
            <div className={styles.annotationList}>
              {arr.map((el, i) => (
                <Comment key={i}/>
              ))}
            </div>
          </div>
          <DefaultButton onClick={()=>setIsOpen(true)}>
            Add Annotation
          </DefaultButton>
        </div>
      </div>
      <Modal open={isOpen} handleClose={() => setIsOpen(false)}>
        <AddAnnotation/>
      </Modal>
    </div>
  );
}
