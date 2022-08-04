import styles from './ProjectPost.module.scss';
import {ProjectPostData} from '../../types/services';

type Props = {
  data: ProjectPostData
};

export function ProjectPost({data}: Props) {
  return (
    <div key={data?.id} className={styles.postContainer}>
      <div className={styles.postInfo}>
        <div>11 Июля &bull; 12:05</div>
        <div>{data?.userfirstname} {data?.userlastname}</div>
      </div>
      <div>{data?.title}</div>
      <div className={styles.postContent}>{data?.text}</div>
    </div>
  );
};