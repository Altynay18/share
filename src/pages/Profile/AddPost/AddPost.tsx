import React, {ChangeEvent} from 'react'
import DefaultButton from '../../../components/DefaultButton'
import styles from './AddPost.module.scss'
import avatar from '../../../assets/images/avatar.png'
import {useForm} from "react-hook-form";

import FileCopyIcon from '@mui/icons-material/FileCopy';
import ImageIcon from '@mui/icons-material/Image';
import VideoFileIcon from '@mui/icons-material/VideoFile';
// import {InputWrapper} from '../../../components/InputWrapper/InputWrapper';
import {Button, Text, Textarea, Badge, useFormControl} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons';
import {PostService} from '../../../services/PostService';
import AddPostComponent from '../../../components/Forms/AddPostComponent/AddPostComponent';

//TODO: adapt InputWrapper component for textarea
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
        <AddPostComponent />
      </div>
    </div>
  )
}

export default AddPost 