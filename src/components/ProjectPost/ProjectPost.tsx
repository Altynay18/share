import styles            from './ProjectPost.module.scss';
import {ProjectPostData} from '../../types/services';
import {COLORS}          from '../../constants';

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
      <div className={styles.content}>
        <div className={styles.title}>{data?.title}</div>
        {data?.imageLink && <img src={data.imageLink} alt="" />}
        <div className={styles.postContent}>{data?.text}</div>
        {data?.fileLink && <a style={{color: COLORS.YELLOW, borderBottom: `1px solid ${COLORS.YELLOW}`}} href={data.fileLink} target="_blank">Link to File</a>}
      </div>
    </div>
  );
};