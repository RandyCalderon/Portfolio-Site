import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import moment from 'moment'
import { css } from '@emotion/core'

// Margin for post dates
const margin = css`
  margin-top: 20px;
`

// Styling for post excerpts
const description = css`
  font-size: 20px;
`

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Posts</h1>
        <div class="ui items">
          {data.cms.postses.map(post => {
            return (
              <div class="item">
                <div class="ui small image">
                  <img src={post.postimage.url} />
                </div>
                <div class="content" key={post.slug}>
                  <Link to={post.slug}>
                    <h3 class="ui dividing header blue">{post.title}</h3>
                  </Link>
                  <div css={margin}>
                    <h5>{moment(post.createdAt).format('MMMM DD YYYY')}</h5>
                    <p css={description}>{post.excerpt}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    cms {
      postses {
        title
        excerpt
        createdAt
        slug
        postimage {
          handle
          fileName
          height
          width
          url
        }
      }
    }
  }
`
