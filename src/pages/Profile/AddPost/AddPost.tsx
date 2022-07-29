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
import {TAG_NAMES} from '../../../constants'


//TODO: adapt InputWrapper component for textarea
function AddPost() {


  const postService = new PostService();
  const {register, handleSubmit} = useForm({
    defaultValues: {
      content: "",
      tag: "",
      title: ""
    }
  });

  const onSubmit = (data) => {
    const postData = {
      'content': data.content,
      'tag': {
        'name': data.tag
      },
      'title': data.title
    }
    postService.addReflectionPost(postData);
  }
  return (
    <div className={styles.addPost}>
      <div className={styles.title}>Создать публикацию</div>
      <div className={styles.header}>
        <img src={avatar} alt="avatar" className={styles.avatar} height={50}
          width={50} />
        <div>Name Surname</div>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Название рефлексии:</label>
          <br></br>
          <input {...register("title")}></input>
          <br></br>
          <label>Содержимое рефлексии:</label>
          <br></br>
          <input {...register("content")}></input>
          <br></br>
          <select {...register("tag")}>
            <option value={TAG_NAMES.TRAINING_AND_TEACHING}>Обучение и преподавание</option>
            <option value={TAG_NAMES.TEACHERS_COLLABORATION}>Сотрудничество учителей</option>
            <option value={TAG_NAMES.CREATE_CONDITIONS}>Создание условий</option>
            <option value={TAG_NAMES.METHODOLOGY_AR}>Методология AR</option>
            <option value={TAG_NAMES.TRAINEE_SUPPORT}>Сопровождение учащегося</option>
          </select>
          <br></br>

          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default AddPost 