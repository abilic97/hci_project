import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faLaptop, faFighterJet, faAward, faUsers } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const WorkFeatures = () => (
    < div className={styles.featuresContainer}>
        <h2>OUR ACHIEVEMENTS</h2>
        <div className={styles.features}>
            <div className={styles.featureComponent}>
                <FontAwesomeIcon className={styles.ikona} icon={faTachometerAlt} color="#D3AC2B" padding="1em"></FontAwesomeIcon>
                <h4>Fast Adaptation</h4>
                <div className={styles.featureParagraph}>Our Association is very good at adapting the newest technologies and
                making it work for our purposes. We track the newest trends in Aeronautical world and try to keep up as much as possible                
                </div>
            </div>
            <div className={styles.featureComponent}>
                <FontAwesomeIcon className={styles.ikona} icon={faLaptop} color="#D3AC2B" />
                <h4>Practical Knowledge</h4>
                <div className={styles.featureParagraph}>Our Association is very good at adapting the newest technologies and making it work for our purposes. 
                We track the newest trends in Aeronautical world and try to keep up as much as possible</div>
            </div>
            <div className={styles.featureComponent}>
                <FontAwesomeIcon className={styles.ikona} icon={faFighterJet} color="#D3AC2B" />
                <h4>Quality Design</h4>
                <div className={styles.featureParagraph}>Our Association is very good at adapting the newest technologies and making it work for our purposes. We
                 track the newest trends in Aeronautical world and try to keep up as much as possible</div>
            </div>
            <div className={styles.featureComponent}>
                <FontAwesomeIcon className={styles.ikona} icon={faAward} color="#D3AC2B" width="1.25em" />
                <h4>Awards</h4>
                <div className={styles.featureParagraph}>Our Association is very good at adapting the newest technologies and making it work for our purposes.
                 We track the newest trends in Aeronautical world and try to keep up as much as possible</div>
            </div>
            <div className={styles.featureComponent}>
                <FontAwesomeIcon className={styles.ikona} icon={faUsers} color="#D3AC2B" />
                <h4>Teamwork</h4>
                <div className={styles.featureParagraph}>Our Association is very good at adapting the newest technologies and making it work for our purposes.
                 We track the newest trends in Aeronautical world and try to keep up as much as possible</div>
            </div>
        </div>
    </div>
)

export default WorkFeatures