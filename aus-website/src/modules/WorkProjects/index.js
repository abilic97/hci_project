import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import TextEllipsis from 'react-text-ellipsis';
import styles from './style.module.css'

const WorkProjects = ({ posts }) => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulProjects {
            edges {
              node {
                projectName
                slug
                projectImage {
                    fluid (maxWidth:500 maxHeight:200)  {
                        ...GatsbyContentfulFluid
                      }
                }
                projectDescription {
                  raw
                }
              }
            }
        }
    }
 `
    )

    return (
        <div className={styles.test}>
            <h2 className={styles.projectsHeadline}>Projects</h2>
            <div className={styles.projectContainer}>
                {data.allContentfulProjects.edges.map(node => {
                    return (
                        <div className={styles.project}>
                            <Link className={styles.linkToProjects} to={`/posts/${node.node.slug}`}>
                                <div>
                                    <Img fluid={node.node.projectImage.fluid} /> </div>
                                <div>
                                    <div className={styles.projectName}>{node.node.projectName}</div>
                                    <div className={styles.ellipsisContainer}>
                                        <TextEllipsis
                                            lines={5}
                                            tag={'p'}
                                            ellipsisChars={'...'}
                                            tagClass={'classname'}
                                            debounceTimeoutOnResize={200}
                                            useJsOnly={true}
                                            onResult={(result) => {
                                                if (result === TextEllipsis.RESULT.TRUNCATED)
                                                    console.log('text get truncated');
                                                else
                                                    console.log('text does not get truncated');
                                            }}>
                                            {renderRichText(node.node.projectDescription)}
                                        </TextEllipsis>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkProjects