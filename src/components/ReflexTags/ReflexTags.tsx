import * as React from 'react';
import styles from './ReflexTags.module.scss';
import {TAG_NAMES} from '../../constants';

type Props = {
  handleClick: (e) => void
};

export function ReflexTags({handleClick}: Props) {
  return (
    <div className={styles.tags}>
      <button className={styles.categoryTag1} value="all"
              onClick={handleClick}>All posts
      </button>
      <button className={styles.categoryTag2}
              value={TAG_NAMES.TRAINING_AND_TEACHING}
              onClick={handleClick}>Обучение и преподавание
      </button>
      <button className={styles.categoryTag3}
              value={TAG_NAMES.TEACHERS_COLLABORATION}
              onClick={handleClick}>Сотрудничество учителей
      </button>
      <button className={styles.categoryTag4}
              value={TAG_NAMES.CREATE_CONDITIONS}
              onClick={handleClick}>Создание условий
      </button>
      <button className={styles.categoryTag5} value={TAG_NAMES.METHODOLOGY_AR}
              onClick={handleClick}>Методология AR
      </button>
      <button className={styles.categoryTag6}
              value={TAG_NAMES.TRAINEE_SUPPORT}
              onClick={handleClick}>Сопровождение учащегося
      </button>
    </div>
  );
};