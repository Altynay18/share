// @flow
import * as React from 'react';
import {useParams} from 'react-router';
import './rangy.css';
import DefaultButton from '../../components/DefaultButton';

type Props = {};

export function Article(props: Props) {
  const {articleId} = useParams();

  function surroundSelection() {
    const range = window.getSelection().getRangeAt(0);
    let span = document.createElement('span');

    span.classList.add('note');
    span.classList.add('noteasdsa');
    span.appendChild(range.extractContents());
    range.insertNode(span);
  }

  function removeSelection() {
    const range: any = window.getSelection().getRangeAt(0);
    const commonAncestorContainer = range.commonAncestorContainer as any;

    // if(commonAncestorContainer.childNodes.length){
    const isHighlighted = range.commonAncestorContainer.parentNode.classList.value.includes('note');

    console.log(isHighlighted);
    // }
    // commonAncestorContainer.replaceWith(...commonAncestorContainer.childNodes)

  }

  return <div>
    {/*<Helmet>*/}
    {/*  <script type="text/javascript" src="/lib/rangy/rangy-core.js"></script>*/}
    {/*  <script type="text/javascript"*/}
    {/*    src="/lib/rangy/rangy-classapplier.js"></script>*/}
    {/*  <script type="text/javascript"*/}
    {/*    src="/lib/rangy/rangy-highlighter.js"></script>*/}
    {/*  <script type="text/javascript" src="/lib/rangy/Requests.js"></script>*/}
    {/*  <script type="text/javascript" src="/lib/rangy/ArticleService.js"></script>*/}
    {/*  <script type="text/javascript" src="/lib/rangy/index.js" async></script>*/}
    {/*</Helmet>*/}

    <DefaultButton onClick={() => surroundSelection()}>surround</DefaultButton>
    <DefaultButton onClick={() => removeSelection()}>REMOVE</DefaultButton>
    <div id={'article-controllers'}></div>
    <div id={'article-content'}>

      <div id="content">
        <p id="summary">
          some countries, such as the United States, it is called
          InNew Zealand, South Africa, Australia, Canada
          and
          Republic of Ireland, both words are commonly used.
          some countries, such as the United States, it is called
          InNew Zealand, South Africa, Australia, Canada
          and
          Republic of Ireland, both words are commonly used.
          some countries, such as the United States, it is called
          InNew Zealand, South Africa, Australia, Canada
          and
          Republic of Ireland, both words are commonly used.
          some countries, such as the United States, it is called
          InNew Zealand, South Africa, Australia, Canada
          and
          Republic of Ireland, both words are commonly used.

        </p>
        <p id="summary">
          some countries, such as the United States, it is called
          InNew Zealand, South Africa, Australia, Canada
          and
          Republic of Ireland, both words are commonly used.
          some countries, such as the United States, it is called
          InNew Zealand, South Africa, Australia, Canada
          and
          Republic of Ireland, both words are commonly used.
          some countries, such as the United States, it is called
          InNew Zealand, South Africa, Australia, Canada
          and
          Republic of Ireland, both words are commonly used.
          some countries, such as the United States, it is called
          InNew Zealand, South Africa, Australia, Canada
          and
          Republic of Ireland, both words are commonly used.

        </p>
      </div>

    </div>
    <div id={'article-annotations'}></div>
  </div>;
}
