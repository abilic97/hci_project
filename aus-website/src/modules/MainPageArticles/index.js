import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import TextEllipsis from 'react-text-ellipsis';
import styles from './style.module.css'

const MainPageArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(limit: 3) {
        edges {
          node {
            title
            blogImage {
              fixed (width: 500 height:200) {
                srcWebp
                srcSetWebp
                srcSet
                src
                height
                base64
                width
                aspectRatio
              }
            }
            content {
              raw
            }
            slug
          }
        }
      }
  }
`)
  return (
    <div>
      <div className={styles.articlesTitle}>Featured Blog Posts</div>
      <div className={styles.articleContainer}>
        {data.allContentfulBlogPost.edges.map(node => {
          return (
            <div className={styles.article}>
              <div>
                <Img fixed={node.node.blogImage.fixed} />
              </div>
              <div className={styles.articleTitle}>{node.node.title}</div>
              <div className={styles.elipsis}>
                <TextEllipsis
                  lines={5}
                  tag={'p'}
                  ellipsisChars={'...'}
                  tagClass={'className'}
                  debounceTimeoutOnResize={200}
                  useJsOnly={true}
                  onResult={(result) => {
                    if (result === TextEllipsis.RESULT.TRUNCATED)
                      console.log('text get truncated');
                    else
                      console.log('text does not get truncated');
                  }}>
                  {renderRichText(node.node.content)}
                </TextEllipsis>
              </div>
              <Link className={styles.readMore} to={`/posts/${node.node.slug}`}>
                <div className={styles.linkToPost}>Continue reading</div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainPageArticles