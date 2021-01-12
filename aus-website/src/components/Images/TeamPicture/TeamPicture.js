import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutUsTitleImage = () => {
    const data = useStaticQuery(graphql`
      {
        myImage: file(relativePath: {eq: "duje.jpeg"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
        <Img style={{ height: "100%", width: "100%" }}
        imgStyle={{ objectFit: "cover", objectPosition: "0 0"}}
        fluid={data.myImage.childImageSharp.fluid} />)
   }
  
  export default AboutUsTitleImage