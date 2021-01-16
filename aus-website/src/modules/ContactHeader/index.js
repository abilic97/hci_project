import React from 'react'
import ContactHeaderImage from '../../components/Images/ContactHeaderImage/ContactHeaderImage'

import styles from './style.module.css'

const ContactHeader = () => (
    <div className={styles.headerContainer}>
        <ContactHeaderImage />
        <div className={styles.overlay}></div>
        <div className={styles.headerTitle}>Have some questions?</div>
        <div className={styles.headerText}>Let's connect!</div>
    </div>
)

export default ContactHeader