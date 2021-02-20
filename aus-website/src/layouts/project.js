import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    TwitterIcon,
    FacebookIcon,
    WhatsappIcon
} from "react-share";

import styles from './project.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'

const Project = ({ pageContext }) => {

    return (
        <HeaderFooterLayout>
            <main className={styles.projectContainer}>
                <div className={styles.projectContent}>
                    <div className={styles.projectName}>
                        <h2>
                            {pageContext.node.projectName}
                        </h2>
                    </div>
                    <div className={styles.projectImg}>
                        <Img fixed={pageContext.node.projectImage.fixed} />
                    </div>
                    <article className={styles.projectDescr}>
                        {renderRichText(pageContext.node.projectDescription)}
                    </article>
                    <div className={styles.shareContainer}>
                        <div className={styles.shareText}>Share: </div>
                        <div className={styles.shareIconsCont}>
                            <FacebookShareButton


                                url={pageContext.node.slug}
                                title={pageContext.node.projectName}
                                className="Demo__some-network__share-button">
                                <FacebookIcon className={styles.test}
                                    size={35}
                                    round />
                            </FacebookShareButton>
                            <WhatsappShareButton
                                url={pageContext.node.slug}
                                title={pageContext.node.projectName}
                                className="Demo__some-network__share-button">
                                <WhatsappIcon
                                    size={35}
                                    round />
                            </WhatsappShareButton>

                            <TwitterShareButton
                                url={pageContext.node.slug}
                                title={pageContext.node.projectName}
                                className="Demo__some-network__share-button">
                                <TwitterIcon
                                    size={35}
                                    round />
                            </TwitterShareButton>
                        </div>
                    </div>
                </div>
            </main>
        </HeaderFooterLayout>
    )
}

export default Project