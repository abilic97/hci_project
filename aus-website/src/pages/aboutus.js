import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import AboutUsTeam from '../modules/AboutUsTeam'
import AboutUsHistory from '../modules/AboutUsHistory'
import AboutUsHeader from "../modules/AboutUsHeader"

const IndexPage = () => (
    <main>
        <HeaderFooterLayout activeTab="About us">
            <AboutUsHeader></AboutUsHeader>
            <AboutUsHistory></AboutUsHistory>
            <AboutUsTeam></AboutUsTeam>
        </HeaderFooterLayout>
    </main>
)

export default IndexPage