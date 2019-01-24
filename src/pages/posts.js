import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

const color = css`
  color: black;
`

const Posts = ({ data }) => {
  const posts = data.cms.assets
  return (
    <Layout>
      <div>
        {posts.map(post => {
          return <h1>{post.title}</h1>
        })}
      </div>
    </Layout>
  )
}

export default Posts

export const query = graphql`
  query {
    cms {
      assets(where: { status: PUBLISHED }) {
        title
        body
      }
    }
  }
`
