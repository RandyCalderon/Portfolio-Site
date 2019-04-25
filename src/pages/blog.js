import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import moment from 'moment'
import { css } from '@emotion/core'

// Margin for post dates
const margin = css`
  margin-top: 40px;
  color: black;
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
  padding: 15px;
`
// Updated text
const italic = css`
  font-style: italic;
`
// Margin-right
const marginRight = css`
  margin-right: 20px !important;
`
export default ({ data }) => {
  return (
    <Layout>
      <div className="ui basic segment container">
        {data.cms.postses.map(post => {
          return (
            <div css={postStyling} className="ui items">
              <div className="item">
                <div css={marginRight} className="ui medium image">
                  <img alt={post.postimage.handle} src={post.postimage.url} />
                </div>

                <Link to={post.slug}>
                  <div className="content" key={post.slug}>
                    <div className="ui fluid text container" css={margin}>
                      <h3 className="ui header blue">{post.title}</h3>
                      <h5>{moment(post.createdAt).format('MMMM DD YYYY')}</h5>
                      <p css={description}>{post.excerpt}</p>
                      <h5 css={italic}>
                        Updated on:{' '}
                        {moment(post.updatedAt).format('MMMM DD YYYY')}
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
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
