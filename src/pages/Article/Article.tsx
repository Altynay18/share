// @flow
import * as React from 'react';
import {useParams} from 'react-router';
import {Helmet} from 'react-helmet';
import './rangy.css';

type Props = {};

export function Article(props: Props) {
  const {articleId} = useParams();
  return <div>
    <Helmet>
      <script type="text/javascript" src="/lib/rangy/rangy-core.js"></script>
      <script type="text/javascript"
              src="/lib/rangy/rangy-classapplier.js"></script>
      <script type="text/javascript"
              src="/lib/rangy/rangy-highlighter.js"></script>
      <script type="text/javascript" src="/lib/rangy/Requests.js"></script>
      <script type="text/javascript" src="/lib/rangy/ArticleService.js"></script>
      <script type="text/javascript" src="/lib/rangy/index.js"></script>
    </Helmet>
    <div id={'article-controllers'}></div>
    <div id={'article-content'}></div>
    <div id={'article-annotations'}></div>
  </div>;
}
