import React from 'react'

import styles from './style.module.css'

const MainPageArticles = () => (
    <section>
      <div className={styles.articlesTitle}>Latest from blog</div>
      <div className={styles.articleContainer}>
          <div className={styles.article}></div>
          <div className={styles.article}></div>
          <div className={styles.article}></div>
      </div>
    </section>
  )
//TODO: Connect with blogs page when blogs is finished

export default MainPageArticles