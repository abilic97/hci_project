import { faDivide } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import SponsorsImages from "../../components/Images/SponsorsImages/SponsorsImages"
import styles from './style.module.css'

const MainPageSponsors = () => (
    <div>
        <div className={styles.sponsorsTitle}>Sponsors</div>
        <div className={styles.sponsorsContainer}>
            <SponsorsImages />
        </div>

    </div>
)

export default MainPageSponsors