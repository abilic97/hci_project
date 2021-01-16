import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselPageElement = () => {
  const data = useStaticQuery(graphql`
  {
    photos: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "carousel"}}, sort: {fields: relativePath, order: ASC}) {
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
    <Container>
      <Carousel>
        {data.photos.edges.map(image => (
          <Carousel.Item key={image.node.id}>
            <div style={{maxHeight: "400px"}}>
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt="Images">
            </Img></div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}
export default CarouselPageElement




