import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WorkTitleImage = () => {
    const data = useStaticQuery(graphql`
      {
        myImage: file(relativePath: {eq: "work3.jpg"}) {
          childImageSharp {
            fluid(maxWidth:900, maxHeight: 270, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
        <Img fluid={data.myImage.childImageSharp.fluid} />)
   }
  
  export default WorkTitleImage