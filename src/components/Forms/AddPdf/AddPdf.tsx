import styles from './AddPdf.module.scss';
import AddIcon from '@mui/icons-material/Add';
import {TAG_NAMES} from '../../../constants';
import {useForm} from 'react-hook-form';
import DefaultButton from '../../DefaultButton';
import React, {useEffect, useState} from 'react';
import {Select} from '@chakra-ui/react';
import {GeneralService} from '../../../services/GeneralService';

interface FormInputs {
  file: File,
  tags: string[]
}

type Props = {
  onSubmit: ({file, tags}: FormInputs) => void
};

const tagOptions = [
  {value: TAG_NAMES.TRAINING_AND_TEACHING, label: 'Обучение и преподавание'},
  {value: TAG_NAMES.TEACHERS_COLLABORATION, label: 'Сотрудничество учителей'},
  {value: TAG_NAMES.CREATE_CONDITIONS, label: 'Создание условий'},
  {value: TAG_NAMES.METHODOLOGY_AR, name: 'Методология AR'},
  {value: TAG_NAMES.TRAINEE_SUPPORT, name: 'Сопровождение учащегося'},

];

export function AddPdf({onSubmit}: Props) {
  const [tagList, setTagList] = useState([])
  const {register, handleSubmit, formState: {errors}} = useForm();
  const generalService = new GeneralService()
  async function getTags(){
    const res = await generalService.getTagList()
    if(res) setTagList(res)
  }
  useEffect(()=>{
    // getTags()
  },[])
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="addFile">
        <div className={styles.addFile}>
          <AddIcon/>Add File
          <input {...register('file', {required: true})}
                 id="addFile"
                 type="file"
                 accept={'application/pdf'}/>
        </div>
      </label>
      {errors.files && <span className={styles.err}>File is not selected</span>}

      <Select className={styles.select} {...register('tag')}>
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
      </Select>

      <DefaultButton type={'submit'}>Upload Pdf</DefaultButton>
    </form>
  );
};