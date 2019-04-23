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
  color: black;
  font-size: 40px;
  letter-spacing: 1px;
`

// Margin for post dates
const margin = css`
  margin-top: 20px;
`

// Styling for post excerpts
const description = css`
  font-size: 22px;
  font-weight: 700;
`
// Styling for post
const postStyling = css`
  background-color: #fff;
  box-shadow: 5px 5px 5px gray;
  border-radius: 5px;
  padding: 20px;
`
// Updated text
const italic = css`
  font-style: italic;
`

export default ({ data }) => {
  return (
    <Layout>
      <div className="ui basic segment container">
        <h1 css={pageHeader}>Posts</h1>
        <div css={postStyling} className="ui items">
          {data.cms.postses.map(post => {
            return (
              <div className="item">
                <div className="ui small image">
                  <img src={post.postimage.url} />
                </div>
                <div className="content" key={post.slug}>
                  <Link to={post.slug}>
                    <h3 className="ui header blue">{post.title}</h3>
                  </Link>
                  <div className="ui text container" css={margin}>
                    <h5>{moment(post.createdAt).format('MMMM DD YYYY')}</h5>
                    <p css={description}>{post.excerpt}</p>
                    <h5 css={italic}>
                      Updated on:{' '}
                      {moment(post.updatedAt).format('MMMM DD YYYY')}
                    </h5>
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
        updatedAt
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
