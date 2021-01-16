import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import MainPageHeader from "../modules/MainPageHeader"
import MainPageArticles from "../modules/MainPageArticles"

const IndexPage = () => (
  <main>
    <HeaderFooterLayout activeTab="Home">
        <MainPageHeader />
        <MainPageArticles />
    </HeaderFooterLayout>
  </main>
)

export default IndexPage


