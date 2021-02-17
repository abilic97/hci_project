import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BlogTitleImage = () => {
    const data = useStaticQuery(graphql`
      {
        myImage: file(relativePath: {eq: "BlogTitleImage.png"}) {
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
  
  export default BlogTitleImage