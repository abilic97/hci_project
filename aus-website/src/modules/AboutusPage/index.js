import React from 'react'

import styles from './style.module.css'

import AboutUsImage from '../../components/AboutUsImage'
import AboutUsHistory from '../../components/AboutUsHistory'

const NavigationHeader = ({ activeTab }) => (
    <section>
       <AboutUsImage></AboutUsImage>
       <AboutUsHistory></AboutUsHistory>
    </section>
)
export default NavigationHeader