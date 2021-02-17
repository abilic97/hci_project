import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogContainer from "../modules/BlogContainer"
import BlogTitleImage from "../components/Images/BlogTitleImage/BlogTitleImage"
import Search from "../components/Search"

const Blog = () => (
  <main>
    <HeaderFooterLayout activeTab="Blog">
        <BlogTitleImage />
        <Search />
        <BlogContainer />
    </HeaderFooterLayout>
  </main>
)

export default Blog