import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MapImage = () => {
  const data = useStaticQuery(graphql`
    {
      myImage: file(relativePath: {eq: "map.jpeg"}) {
        childImageSharp {
          fixed(height: 320 width: 700) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.myImage.childImageSharp.fixed} ></Img>
}

export default MapImage