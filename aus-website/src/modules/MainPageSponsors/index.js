import React from 'react'
import SponsorsImages from "../../components/Images/SponsorsImages/SponsorsImages"
import styles from './style.module.css'

const MainPageSponsors = () => (
    <section>
        <div className={styles.sponsorsTitle}>Sponsors</div>
        <div class={styles.spons}>
            <SponsorsImages />
        </div>
    </section>
)

export default MainPageSponsors