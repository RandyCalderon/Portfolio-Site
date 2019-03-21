import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'

const color = css`
  color: black;
`

const Posts = ({ data }) => {
  const posts = data.cms.assets
  return (
    <Layout>
      <div css={color}>
        {posts.map((post, i) => {
          return (
            <div key={i}>
              <h3>{post.title}</h3>
              <p>{post.body.join('').slice(0, 55) + '...'}</p>
              <Link to={post.title} key={i}>
                Click
              </Link>
            </div>
          )
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
