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
             fixed(height: 200 ) {
               ...GatsbyImageSharpFixed
             }
           }
         }
       }
     }
   }
 `)
    return (
        data.photos.edges.map(image => (
            <div>
                <Img
                    fixed={image.node.childImageSharp.fixed}
                    alt="Images">
                </Img></div>

        ))

    )
}
export default SponsorsImages