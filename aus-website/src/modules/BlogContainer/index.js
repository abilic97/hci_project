import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import styles from './style.module.css'

const BlogContainer = ( { blogPosts } ) => {
  const data = useStaticQuery(graphql`
    query {
    allContentfulBlogPost {
      edges {
        node {
          title
          author
          slug
          blogImage {
            fixed (width: 390 height:274) {
              src
              srcSet
              srcSetWebp
              srcWebp
              height
              base64
              width
              aspectRatio
            }
          }
          content {
            raw
          }
        }
      }
    }
  }
`)
  return (
    <section className={styles.container}>
      <div>
        <ul className={styles.blogpost}>
          {blogPosts.map(node => {
            return (

              <li className={styles.postBackground}>
                <div className={styles.imageContainer}>
                  <Img fixed={node.node.blogImage.fixed} /> </div>
                <div className={styles.contentContainer}>
                  <div className={styles.blogPostTitle}>{node.node.title}</div>
                  <div className={styles.postParagraph}>{renderRichText(node.node.content)}</div>
                  <Link className={styles.linkStyle} to={`/posts/${node.node.slug}`}>
                    <div className={styles.linkToPost}>Read More</div>
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.categories}>
      Categories
      <Link to={`/blog`} className={styles.linkStyle}><div className={styles.categoryItem}>
          All posts
        </div></Link>
        <Link to={`/posts/Mehanical`} className={styles.linkStyle}><div className={styles.categoryItem}>
          Mehanical
        </div></Link>
        <Link to={`/posts/Software`} className={styles.linkStyle}><div className={styles.categoryItem}>
          Software
        </div></Link>
        <Link to={`/posts/Electronics`} className={styles.linkStyle}><div className={styles.categoryItem}>
          Electronics
        </div></Link>
        <Link to={`/posts/Competitions`} className={styles.linkStyle}><div className={styles.categoryItem}>
          Competitions
        </div></Link>
        <Link to={`/posts/Events`} className={styles.linkStyle}><div className={styles.categoryItem}>
          Events
        </div></Link>
      </div>
    </section>
  )
}

export default BlogContainer