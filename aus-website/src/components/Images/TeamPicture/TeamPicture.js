import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const TeamPicture = ({ fileName, alt, style }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  const fluid = allImageSharp.nodes.find(n => n.fluid.originalName === fileName)
    .fluid

  return (
      <Img fluid={fluid} alt={alt} style={{ height: "100%", width: "100%" }}
        imgStyle={{ objectFit: "cover", objectPosition: "0 0"}}/>

  )
}

export default TeamPicture