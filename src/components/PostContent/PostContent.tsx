import React, {ChangeEvent} from 'react'
import DefaultButton from '../DefaultButton'
import styles from './PostContent.module.scss'
import {Badge} from '@chakra-ui/react'
import {Input} from '../Input/Input'
function PostContent() {
  return (
    <div className={styles.postModal}>
      <div className={styles.postInfo}> <div>
        Username
      </div>
        <div>
          11 Июля &bull; 12:05
        </div>
        <Badge borderRadius="16px" px="2" backgroundColor={"#FFCA7A"}>
          {'#post type'}
        </Badge></div>
      <div className={styles.postContent}>Post content</div>
      <div className={styles.postModalComments}>
        <div className={styles.title}>Комментарии:</div>
        <div className={styles.postModalComment}>
          Comment content 0
        </div>
        <div className={styles.postModalComment}>
          Comment content 1
        </div>
        <div className={styles.postModalComment}>
          Comment content 2
        </div>
      </div>
      <div className={styles.postModalActions}>
        <div className={styles.title}>Написать комментарии:</div>
        {/*TODO add input for postContent*/}
        <DefaultButton bgColor='#BCD7DA' children={'Отправить'}></DefaultButton>
      </div>
    </div>
  )
}

export default PostContent