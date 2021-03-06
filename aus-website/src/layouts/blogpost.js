import React, { useState } from 'react'
import { Link } from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  FacebookIcon,
  WhatsappIcon
} from "react-share";

import styles from './blogpost.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'

const BlogPost = ({ pageContext }) => {

  const [email, seteMail] = useState("")
  const subscribe = () => {
    if (email === "") {
      window.alert("Enter your e-mail if you want to subscribe")
    } else {
      window.alert("You have successfully subscribed to our Newsletter!")
    }
  }

  return (
    <HeaderFooterLayout>
      <main className={styles.container}>
        <div className={styles.blogPostcontainer}>
          <div className={styles.blogTitle}>
            <h2>
              {pageContext.node.title}
            </h2>
            <div>by {pageContext.node.author}</div>
          </div>
          <div className={styles.imageContainer}>
            <Img fixed={pageContext.node.blogImage.fixed} />
          </div>
          <article className={styles.blogArticle}>
            {renderRichText(pageContext.node.content)}
          </article>
          <div className={styles.shareContainer}>
            <div className={styles.shareText}>Share: </div>
            <div className={styles.shareIconsCont}>
              <FacebookShareButton


                url={pageContext.node.slug}
                title={pageContext.node.title}
                className="Demo__some-network__share-button">
                <FacebookIcon className={styles.test}
                  size={35}
                  round />
              </FacebookShareButton>
              <WhatsappShareButton
                url={pageContext.node.slug}
                title={pageContext.node.title}
                className="Demo__some-network__share-button">
                <WhatsappIcon
                  size={35}
                  round />
              </WhatsappShareButton>

              <TwitterShareButton
                url={pageContext.node.slug}
                title={pageContext.node.title}
                className="Demo__some-network__share-button">
                <TwitterIcon
                  size={35}
                  round />
              </TwitterShareButton>
            </div>
          </div>
        </div>
        <div className={styles.subscribeContainer}>
          <div className={styles.newsletterContainer}>
            <div>Don't miss any updates from us! </div>
            <FontAwesomeIcon icon={faEnvelopeOpenText} color='#D3AC2B' className={styles.mailIcon} />
            <div className={styles.subscribeText}>Subscribe to our newsletter and get interesting news right in your inbox</div>
            <div className={styles.submitContainer}>
              <input className={styles.emailInput} type="email" name="email" placeholder="Enter your e-mail" onChange={e => seteMail(e.target.value)}></input>
              <button className={styles.submitButton} onClick={subscribe}>Subscribe</button>
            </div>
            <div className={styles.socialIconContainer}>
              <a href="https://web.facebook.com/flowdesignteam/?_rdc=1&_rdr"> <FontAwesomeIcon className={styles.iconLink} icon={faFacebook} /></a>
              <a href="https://www.instagram.com/flowdesignteam/?hl=en"><FontAwesomeIcon className={styles.iconLink} icon={faInstagram} /> </a>
              <a href="https://twitter.com/?lang=en"><FontAwesomeIcon className={styles.iconLink} icon={faTwitter} /> </a>
            </div>
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
        </div>
      </main>
    </HeaderFooterLayout>
  )
}

export default BlogPost