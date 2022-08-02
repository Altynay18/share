import styles from './AddPostComponent.module.scss';
import {useForm} from 'react-hook-form';
import {ReflectionPostService} from '../../../services/ReflectionPostService';
import {TAG_NAMES} from '../../../constants';

type Props = {
  isReflection?: boolean
}

function AddPostComponent({isReflection}: Props) {
  const postService = new ReflectionPostService();
  const {register, handleSubmit} = useForm({
    defaultValues: {
      content: '',
      tag: '',
      title: '',
    },
  });

  const onSubmit = (data) => {
    const postData = {
      'content': data.content,
      'tag': [data.tag],
      'title': data.title,
    };
    postService.addReflectionPost(postData);
  };
  return (
    <div className={styles.addPost}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Название рефлексии:</label>
          <br></br>
          <input {...register('title')}></input>
          <br></br>
          <label>Содержимое рефлексии:</label>
          <br></br>
          <input {...register('content')}></input>
          <br></br>
          {isReflection && <select {...register('tag')}>
            <option>Выберите теги</option>
            <option value={TAG_NAMES.TRAINING_AND_TEACHING}>Обучение и
              преподавание
            </option>
            <option value={TAG_NAMES.TEACHERS_COLLABORATION}>Сотрудничество
              учителей
            </option>
            <option value={TAG_NAMES.CREATE_CONDITIONS}>Создание условий
            </option>
            <option value={TAG_NAMES.METHODOLOGY_AR}>Методология AR</option>
            <option value={TAG_NAMES.TRAINEE_SUPPORT}>Сопровождение учащегося
            </option>
          </select>}
          <br></br>
          <input type="submit"/>
        </form>
      </div>
    </div>
  );
}

export default AddPostComponent;