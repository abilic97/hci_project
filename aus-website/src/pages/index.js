import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import MainPageHeader from "../modules/MainPageHeader"

const IndexPage = () => (
  <main>
    <HeaderFooterLayout activeTab="Home">
        <MainPageHeader />
    </HeaderFooterLayout>
  </main>
)

export default IndexPage


