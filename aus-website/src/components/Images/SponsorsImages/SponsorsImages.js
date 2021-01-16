import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SponsorsImages = () => {
    const data = useStaticQuery(graphql`
  {
    photos: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "sponsors"}}, sort: {fields: relativePath, order: ASC}) {
       edges {
         node {
           id
           childImageSharp {
             fluid(maxHeight: 400) {
               ...GatsbyImageSharpFluid
             }
           }
         }
       }
     }
   }
 `)
    return (
        data.photos.edges.map(image => (
            <div style={{ maxHeight: "180px", maxWidth: "180px", padding: "1em"}}>
                <Img
                    fluid={image.node.childImageSharp.fluid}
                    alt="Images">
                </Img></div>

        ))

    )
}
export default SponsorsImages