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
          fixed(resizingBehavior: FILL, height: 400, width: 900) {
            aspectRatio
            base64
            height
            src
            srcSet
            srcSetWebp
            srcWebp
            width
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

  const projectPage = await graphql(`
    query {
      allContentfulProjects {
          edges {
            node {
              projectName
              slug
              projectImage {
                fixed(resizingBehavior: FILL, height: 400, width: 1000) {
                  aspectRatio
                  base64
                  height
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                  width
                }
              }
              projectDescription {
                raw
              }
              categories
            }
          }
      }
  }
  `
  )
  const blogCategory = await graphql(`
  query {
      allContentfulBlogPost {
        distinct(field: category)
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
  }));

  const proj = projectPage.data.allContentfulProjects.edges

  proj.forEach((b) => actions.createPage({
    component: path.resolve(`./src/layouts/project.js`),
    context: {
      ...b,
    },
    path: `posts/${b.node.slug}`,
    slug: `posts/${b.node.slug}`
  }))

  blogCategory.data.allContentfulBlogPost.distinct.forEach((category) => {
    actions.createPage(
      {
        path: `posts/${category}`,
        component: path.resolve(`./src/layouts/blogLayout.js`),
        context: {
          category: category,
        },
      }
    )
  })
}

