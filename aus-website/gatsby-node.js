/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
 
// You can delete this file if you're not using it
const path = require('path')
 
exports.createPages = async ({ graphql, actions }) => {
  const raw = await graphql(`
  query {
  allContentfulBlogPost {
    edges {
      node {
        title
        author
        slug
        blogImage {
          fixed (width: 900 height:400) {
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
 
  const res = raw.data.allContentfulBlogPost.edges
 
  res.forEach((e) => actions.createPage({
    component: path.resolve(`./src/layouts/blogpost.js`),
    context: {
      ...e,
    },
    path: `posts/${e.node.slug}`,
    slug: `posts/${e.node.slug}`
  }))
}