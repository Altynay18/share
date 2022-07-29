import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../constants';
import styles from './Articles.module.scss';
import PageHeader from '../../components/PageHeader';

function Articles() {
  const arr = new Array(5).fill(0);
  return (
    <div className={styles.articles}>
      <PageHeader title={'Статьи'}/>
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