import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import moment from 'moment'
import { css } from '@emotion/core'

// Styling for main page container
const wrapper = css`
  margin-top: 40px;
`

// Styling for main page header
const pageHeader = css`
  font-family: candara;
  font-weight: 400;
  color: #2185d0;
`

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
      <div css={wrapper}>
        <h2 css={pageHeader}>Posts</h2>
        <div class="ui items">
          {data.cms.postses.map(post => {
            return (
              <div class="item ">
                <div class="ui small image">
                  <img src={post.postimage.url} />
                </div>
                <div class="content" key={post.slug}>
                  <Link to={post.slug}>
                    <h3 class="ui header blue">{post.title}</h3>
                  </Link>
                  <div class="ui text container" css={margin}>
                    <h5>{moment(post.updatedAt).format('MMMM DD YYYY')}</h5>
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
      postses(where: { status: PUBLISHED }) {
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
