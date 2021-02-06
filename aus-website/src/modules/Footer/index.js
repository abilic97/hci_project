import React from 'react'
import Logo from '../../components/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"
import styles from './style.module.css'

const navTabs = ['Home', 'Accommodation', 'Photo Gallery', 'Contact']

const Footer = () => (
  <footer className={styles.footer}>
    <span className={styles.footerLinks}>
      <Logo></Logo>
      <ul>
        <div className={styles.headlines}>Information</div>
        {navTabs.map(tab =>
          <li>{tab}</li>)
        }
      </ul>


      <ul className={styles.contact}>
        <div className={styles.headlines}>Contact</div>
        <div className={styles.contactFont}>
          <FontAwesomeIcon icon={faEnvelope} color="#D3AC2B" />
          <span>example@email.com</span>
        </div>
        <div className={styles.contactFont}>
          <FontAwesomeIcon icon={faPhone} color="#D3AC2B" />
          <span>+385 91 1122334</span>
        </div>
      </ul>
      <ul>
        <div className={styles.headlines}>Helpful links</div>
        <li>Privacy policy</li>
        <li>Terms of use</li>
      </ul>
    </span>
    <div className={styles.socialContainer}> 
    <div className ={styles.socialIconsContainer}>
        <Link external to="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} color="#D3AC2B" /></Link>
        <Link external to="https://web.facebook.com/flowdesignteam/?_rdc=1&_rdr"><FontAwesomeIcon icon={faFacebook} color="#D3AC2B" /> </Link>
        <Link external to="https://www.youtube.com/channel/UC9vR4jHHttIFSnOXp32KTXg"><FontAwesomeIcon icon={faYoutube} color="#D3AC2B" /></Link>
        <Link external to="https://www.instagram.com/flowdesignteam/?hl=en"><FontAwesomeIcon icon={faInstagram} color="#D3AC2B" /> </Link>
        </div>  
      <div className={styles.copyright}>
        2020, Aerotehnic Association Split
    </div>
    </div>
  </footer>
)

export default Footer