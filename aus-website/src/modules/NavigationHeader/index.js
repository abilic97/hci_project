import React from 'react'

import styles from './style.module.css'
import Logo from '../../components/Logo'
import NavigationBar from '../../components/NavigationBar'
import LoginButton from '../../components/LoginButton'

const NavigationHeader = ({ activeTab }) => (
    <section className={styles.navigationHeader}>
        <Logo />
        <NavigationBar activeTab={activeTab} />
        <LoginButton />
    </section>
)
export default NavigationHeader