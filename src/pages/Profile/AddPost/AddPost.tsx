import React, {ChangeEvent} from 'react'
import DefaultButton from '../../../components/DefaultButton'
import styles from './AddPost.module.scss'
import avatar from '../../../assets/images/avatar.png'

import FileCopyIcon from '@mui/icons-material/FileCopy';
import ImageIcon from '@mui/icons-material/Image';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import {Input} from '../../../components/Input/Input';



//TODO: adapt Input component for textarea
function AddPost() {
  return (
    <div className={styles.addPost}>
      <div className={styles.title}>Создать публикацию</div>
      <div className={styles.header}>
        <img src={avatar} alt="avatar" className={styles.avatar} height={50}
          width={50} />
        <div>Name Surname</div>
      </div>
      <div className={styles.content}>
        Содержимое рефлексии:
        <Input value={''} onChange={function (e: ChangeEvent<Element>): void {
          throw new Error('Function not implemented.');
        }} name={''} placeholder={''}></Input>
      </div>
      <div className={styles.extraMedia}>
        <div>Дополнить публикацию: </div>
        <div>
          <FileCopyIcon></FileCopyIcon><input type={'file'}></input><br></br>
          <ImageIcon></ImageIcon> <input type={'file'}></input><br></br>
          <VideoFileIcon></VideoFileIcon> <input type={'file'}></input><br></br>
        </div>
      </div>
      <DefaultButton maxWidth='30%'  >Поделиться</DefaultButton>
    </div>
  )
}

export default AddPost 