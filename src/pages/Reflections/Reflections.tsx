import React from 'react'
import styles from './Reflections.module.scss'
import Post from '../../components/Post'
function Reflections() {
  return (
    <div className={styles.welcomePageContainer}>
      <div className={styles.welcomePageTitle} >
        Рефлексии других учителей:
      </div>
      <Post />
    </div>
  )
}

export default Reflections;