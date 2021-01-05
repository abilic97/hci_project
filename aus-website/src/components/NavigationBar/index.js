import React from 'react'

import styles from './style.module.css'

const NavigationBar = () => (
    <nav className={styles.navigationBar}>
        <li className={styles.active}>HOME</li>
        <li>WORK</li>
        <li>BLOG</li>
        <li>ABOUT US</li>
        <li>CONTACT</li>
    </nav>
  )

export default NavigationBar