import React from 'react'

import styles from './style.module.css'
import Logo from '../Logo'
import NavigationBar from '../NavigationBar'
import LoginButton from '../LoginButton'

const NavigationHeader = () => (
    <section className = {styles.navigationHeader}>
        <Logo />
        <NavigationBar />
        <LoginButton />
    </section>
)
export default NavigationHeader