import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logoimg = () => {
    const data = useStaticQuery(graphql`
    {
      myImage: file(relativePath: {eq: "logo.png"}) {
        childImageSharp {
          fixed(height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
    return <Img fixed={data.myImage.childImageSharp.fixed} ></Img>
}

export default Logoimg