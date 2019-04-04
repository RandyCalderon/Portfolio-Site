const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      cms {
        postses {
          slug
        }
      }
    }
  `).then(result => {
    result.data.cms.postses.forEach(post => {
      createPage({
        path: post.slug,
        component: path.resolve(`src/templates/posts.js`),
        context: {
          slug: post.slug,
        },
      })
    })
  })
}
