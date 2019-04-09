import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import moment from 'moment'
import { css } from '@emotion/core'

// Styling for main page header
const pageHeader = css`
  font-family: candara;
  text-decoration: underline;
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
      <div className="ui basic segment container">
        <h1 css={pageHeader}>Posts</h1>
        <div className="ui items">
          {data.cms.postses.map(post => {
            return (
              <div className="item ">
                <div className="ui small image">
                  <img src={post.postimage.url} />
                </div>
                <div className="content" key={post.slug}>
                  <Link to={post.slug}>
                    <h3 className="ui header blue">{post.title}</h3>
                  </Link>
                  <div className="ui text container" css={margin}>
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
