import React from 'react'
import styles from './style.module.css'
import Logoimg from '../Images/Logoimg/Logoimg'

const Logo = () => (
    <section className={styles.logo}>
      <div className={styles.logoImg}><Logoimg /></div>
      <div className={styles.sub}>Aerotehnic Association Split</div>
    </section>
  )

export default Logo