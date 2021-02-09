import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import WorkHeader from "../modules/WorkHeader"
import WorkProjects from "../modules/WorkProjects"

const IndexPage = () => (
    <main>
        <HeaderFooterLayout activeTab="About us">
            <WorkHeader />
            <WorkProjects />
        </HeaderFooterLayout>
    </main>
)

export default IndexPage