import React from 'react'

import styles from './style.module.css'
import Logo from '../../components/Logo'
import NavBar from '../../components/NavBar'
import LoginRegister from '../../components/LoginRegister'

const NavHeader = ({ activeTab }) => (
    <section className={styles.navHeader}>
        <Logo />
        <NavBar activeTab={activeTab} />
        <LoginRegister />
    </section>
)
export default NavHeader