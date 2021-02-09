import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import WorkHeader from "../modules/WorkHeader"
import WorkFeatures from "../modules/WorkFeatures"

const IndexPage = () => (
    <main>
        <HeaderFooterLayout activeTab="Work">
            <WorkHeader />
            <WorkFeatures />
        </HeaderFooterLayout>
    </main>
)

export default IndexPage