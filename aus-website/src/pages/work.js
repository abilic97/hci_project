import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import WorkHeader from "../modules/WorkHeader"
import WorkFeatures from "../modules/WorkFeatures"
import WorkProjects from "../modules/WorkProjects"
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = ( {data} ) => {
    return (
        <main>
            <HeaderFooterLayout activeTab="Work">
                <WorkHeader />
                <WorkFeatures />
                <WorkProjects></WorkProjects>
            </HeaderFooterLayout>
        </main>
    )
}
export default IndexPage