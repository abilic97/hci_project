import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import MainPageHeader from "../modules/MainPageHeader"
import MainPageArticles from "../modules/MainPageArticles"
import MainPageSponsors from "../modules/MainPageSponsors"

const IndexPage = () => (
  <main>
    <HeaderFooterLayout activeTab="Home">
        <MainPageHeader />
        <MainPageArticles />
        <MainPageSponsors />
    </HeaderFooterLayout>
  </main>
)

export default IndexPage


