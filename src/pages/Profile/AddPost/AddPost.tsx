import React from 'react';
import styles from './AddPost.module.scss';
import avatar from '../../../assets/images/avatar.png';
import AddPostComponent
  from '../../../components/Forms/AddPostComponent';

type Props = {
  isReflection?: boolean
}

function AddPost({isReflection}: Props) {
  return (
    <div className={styles.addPost}>
      <div className={styles.title}>Создать публикацию</div>
      <div className={styles.header}>
        <img src={avatar} alt="avatar" className={styles.avatar} height={50}
             width={50}/>
        <div>Name Surname</div>
      </div>
      <div className={styles.content}>
        <AddPostComponent isReflection={isReflection}/>
      </div>
    </div>
  );
}

export default AddPost;