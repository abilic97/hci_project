import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogContainer from "../modules/BlogContainer"
import BlogTitleImage from "../components/Images/BlogTitleImage/BlogTitleImage"
import Search from "../components/Search"
import { graphql } from "gatsby"

const blogLayout = props => {
    const {
        data: {
            allContentfulBlogPost: { edges: posts },
        },
    } = props

    return (<main>
        <HeaderFooterLayout activeTab="Blog">
            <BlogTitleImage />
            <Search />
            <BlogContainer blogPosts={posts} />
        </HeaderFooterLayout>
    </main>)
}


export const query = graphql`
query BlogQuery($category: String) {
    allContentfulBlogPost(filter: {category: {eq: $category}}) {
      edges {
        node {
          title
          slug
          category
          content {
            raw
          }
          author
          blogImage {
            fluid (maxWidth:390 maxHeight:270)  {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default blogLayout