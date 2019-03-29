import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Blog Posts</h1>
        {data.cms.postses.map(post => {
          return (
            <div key={post.slug}>
              <Link to={post.slug}>
                <h3>{post.title}</h3>
                <span>{post.CreatedAt}</span>
                <p>{post.body}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    cms {
      postses {
        title
        body
        createdAt
        slug
      }
    }
  }
`
