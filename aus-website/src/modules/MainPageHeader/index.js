import React from 'react'

import CarouselPageElement from '../../components/Images/CarouselPageElement/CarouselPageElement'
import styles from './style.module.css'


const MainPageHeader = () => (
    <section>
        <div className={styles.carouselContainer}>
            <CarouselPageElement />
        </div>
    </section>
)

export default MainPageHeader