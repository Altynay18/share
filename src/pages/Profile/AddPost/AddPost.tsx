import React, {ChangeEvent} from 'react'
import DefaultButton from '../../../components/DefaultButton'
import styles from './AddPost.module.scss'
import avatar from '../../../assets/images/avatar.png'

import FileCopyIcon from '@mui/icons-material/FileCopy';
import ImageIcon from '@mui/icons-material/Image';
import VideoFileIcon from '@mui/icons-material/VideoFile';
// import {Input} from '../../../components/Input/Input';
import {Button, Text, Textarea, Badge} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons';



//TODO: adapt Input component for textarea
function AddPost() {
  let [value, setValue] = React.useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
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
        <Text mb='8px'>Содержимое рефлексии: {value}</Text>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder='Here is a sample placeholder'
          size='sm'
          borderRadius={'1rem'}
        />      </div>
      <div className={styles.tags}>
        Категория рефлексии:
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} marginLeft={'2rem'}>
            Выбрать категорию
          </MenuButton>
          <MenuList>
            <MenuItem><Badge padding={'1rem 2rem'} colorScheme='green' borderRadius={'1rem'}>Обучение и преподавание</Badge>
            </MenuItem>
            <MenuItem><Badge padding={'1rem 2rem'} colorScheme='red' borderRadius={'1rem'}>Сотрудничество учителей</Badge>
            </MenuItem>
            <MenuItem><Badge padding={'1rem 2rem'} colorScheme='purple' borderRadius={'1rem'}>Создание условий</Badge>
            </MenuItem>
            <MenuItem><Badge padding={'1rem 2rem'} colorScheme='yellow' borderRadius={'1rem'}>Методология AR</Badge>
            </MenuItem>
            <MenuItem><Badge padding={'1rem 2rem'} colorScheme='twitter' borderRadius={'1rem'}>
              Сопровождение учащегося</Badge >
            </MenuItem>
          </MenuList>
        </Menu>
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