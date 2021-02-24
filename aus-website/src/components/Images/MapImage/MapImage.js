import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MapImage = () => {
  const data = useStaticQuery(graphql`
    {
      myImage: file(relativePath: {eq: "map.jpeg"}) {
        childImageSharp {
          fluid(maxHeight: 220 maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.myImage.childImageSharp.fluid} ></Img>
}

export default MapImage