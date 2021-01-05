import React from 'react'
import styles from './style.module.css'
import Logoimg from '../Images/Logoimg/Logoimg'

const Logo = () => (
    <section className={styles.logo}>
      <div className={styles.logoImg}><Logoimg /></div>
      <span className={styles.sub}>Aerotehnic Association Split</span>
    </section>
  )

export default Logo