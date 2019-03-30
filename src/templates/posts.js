import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.cms.postses
  return (
    <Layout>
      <div>
        <h2 class="ui header">{post[0].title}</h2>
        <p>{post[0].body.text}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    cms {
      postses(where: { slug: $slug }) {
        updatedAt
        createdAt
        title
        slug
        postimage {
          id
          handle
          fileName
          height
          width
        }
        body {
          text
        }
        excerpt
      }
    }
  }
`
