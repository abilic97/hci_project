import React from 'react'

import styles from './style.module.css'
import Logo from '../../components/Logo'
import NavBar from '../../components/NavBar'
import LoginButton from '../../components/LoginButton'

const NavHeader = ({ activeTab }) => (
    <section className={styles.navHeader}>
        <Logo />
        <NavBar activeTab={activeTab} />
        <LoginButton />
    </section>
)
export default NavHeader