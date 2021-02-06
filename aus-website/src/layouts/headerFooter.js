// /src/layouts/headerFooter.js
import React from 'react'
import NavHeader from '../modules/NavHeader'
import Footer from '../modules/Footer'
 
const HeaderFooterLayout = ({children, activeTab}) => (
  <>
    <NavHeader activeTab={activeTab} />
      {children}
    <Footer />
  </>
)
 
export default HeaderFooterLayout