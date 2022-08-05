// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {ArticleService} from '../../services/ArticleService';
import {useParams} from 'react-router';
import {BASE_URL} from '../../services/Requests';
import {Demo} from './Demo';
// import {annotationsList} from './annotationList';

type Props = {};

export function Article(props: Props) {
  const [article, setArticle] = useState(null);
  const {articleId} = useParams();
  const articleService = new ArticleService();
  const pdfUrl = `http://159.89.104.8:8022/pdf/${articleId}`;
  const baseUrl = BASE_URL;
  const user = {
    name: 'John Doe',
    id: 1
  };
  const demo = new Demo({
    pdfUrl,
    fileId: articleId,
    fileName: 'Bodea Brochure.pdf',
    user
  });

  async function getPdf() {
    const res = await articleService.getPdf(2);
    setArticle(res);
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';
    script.async = true;
    document.body.appendChild(script);
    demo.init()
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    getPdf();
  }, []);

  return (
    <div id="adobe-dc-view"></div>
  );
}
