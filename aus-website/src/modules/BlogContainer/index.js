import React from "react"
import { Link } from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import TextEllipsis from 'react-text-ellipsis';
import styles from './style.module.css'

const BlogContainer = ({ blogPosts }) => {

  const chooseColor = (test) => {

    console.log(test)
    if(test =="Mehanical") {
      return '#97B8ED'
    }
    else if(test == "Software") {
      return '#E96EE9'
    }
    else if(test == "Electronics") {
      return '#D3AC2B'
    }
    else if (test == "Competitions") {
      return '#77D96E'
    }
    else if (test == "Events") {
      return '#f75858'
    }
    else if(test == "All posts") {
      return 'black'
    }
  }
  return (
    <section className={styles.container}>
      <div>
          {blogPosts.map(node => {
            return (
              <div className={styles.postBackground}>
                <div className={styles.imageContainer}>
                  <Img fixed={node.node.blogImage.fixed} /> </div>
                <div className={styles.textContainer}>
                  <div className={styles.blogPostTitle}>{node.node.title}</div>
                  <div style={{backgroundColor: chooseColor(node.node.category)}}
                  className={styles.categoryContainer}>{node.node.category}</div>
                  <div className={styles.elipsis}>
                  <TextEllipsis
                    lines={3}
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
                  <Link className={styles.linkStyle} to={`/posts/${node.node.slug}`}>
                    <div className={styles.linkToPost}>Read More</div>
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
      <div className={styles.categories}>
        Categories
      <Link to={`/blog`} className={styles.linkCatStyle}><div className={styles.categoryItem}>
          All posts
        </div></Link>
        <Link to={`/posts/Mehanical`} className={styles.linkCatStyle}><div className={styles.categoryItem}>
          Mehanical
        </div></Link>
        <Link to={`/posts/Software`} className={styles.linkCatStyle}><div className={styles.categoryItem}>
          Software
        </div></Link>
        <Link to={`/posts/Electronics`} className={styles.linkCatStyle}><div className={styles.categoryItem}>
          Electronics
        </div></Link>
        <Link to={`/posts/Competitions`} className={styles.linkCatStyle}><div className={styles.categoryItem}>
          Competitions
        </div></Link>
        <Link to={`/posts/Events`} className={styles.linkCatStyle}><div className={styles.categoryItem}>
          Events
        </div></Link>
      </div>
    </section>
  )
}

export default BlogContainer