import React from 'react'

import styles from './style.module.css'

const navTabs = ['Home', 'Work', 'About us', 'Blog', 'Contact']

const NavigationBar = props => (
  <nav className={styles.navigationBar}>
      {navTabs.map(tab => <li className={tab === props.activeTab ? styles.active : ''}>
        {tab}</li>
      )}
  </nav>
)

export default NavigationBar