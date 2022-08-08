// @flow
import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {ArticleService} from '../../services/ArticleService';
import {useParams} from 'react-router';
import {BASE_URL} from '../../services/Requests';
import {Demo} from './Demo';
import {UserContext} from '../../components/App';
// import {annotationsList} from './annotationList';

type Props = {};

export function Article(props: Props) {
  const [user, setUSer] = useContext(UserContext)
  const {articleId} = useParams();
  const demo = new Demo({
    pdfId: articleId,
    fileName: articleId,
    user
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://documentcloud.adobe.com/view-sdk/main.js';
    script.async = true;
    document.body.appendChild(script);
    demo.init()
    return () => {
      document.body.removeChild(script);
    };
  }, [user]);

  return (
    <div id="adobe-dc-view"></div>
  );
}
