import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogContainer from "../modules/BlogContainer"
import BlogTitleImage from "../components/Images/BlogTitleImage/BlogTitleImage"
import Search from "../components/Search"
import { graphql } from "gatsby"

const Blog = ( {data} ) => {
  return (
  <main>
    <HeaderFooterLayout activeTab="Blog">
        <BlogTitleImage />
        <Search />
        <BlogContainer blogPosts={data.allContentfulBlogPost.edges} />
    </HeaderFooterLayout>
  </main> 
  )
}

export const blogquery = graphql`
query {
  allContentfulBlogPost {
    edges {
      node {
        title
        author
        slug
        category
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
`

export default Blog