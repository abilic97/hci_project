import React from 'react'
import { navs as navTabs } from '../../constants/const'
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const NavBar = ({ activeTab }) => (
  <nav className={styles.navBar}>
    {navTabs.map(({ tab, to }) => (
      <Link to={to} >
        <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
      </Link>)
    )}
    <div className={styles.hamburger}>
      <FontAwesomeIcon icon={faBars} /> </div>
  </nav>
)
export default NavBar