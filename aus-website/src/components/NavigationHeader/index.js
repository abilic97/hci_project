import React from 'react'

import styles from './style.module.css'
import Logo from '../Logo'
import NavigationBar from '../NavigationBar'
import LoginButton from '../LoginButton'

const NavigationHeader = ({ activeTab }) => (
    <section className={styles.navigationHeader}>
        <Logo />
        <NavigationBar activeTab={activeTab} />
        <LoginButton />
    </section>
)
export default NavigationHeader