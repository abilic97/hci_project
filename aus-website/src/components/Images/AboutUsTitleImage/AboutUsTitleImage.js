import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutUsTitleImage = () => {
    const data = useStaticQuery(graphql`
      {
        myImage: file(relativePath: {eq: "AboutUsTitleImage.png"}) {
          childImageSharp {
            fluid(maxWidth: 800 maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
        <Img fluid={data.myImage.childImageSharp.fluid} />)
   }
  
  export default AboutUsTitleImage