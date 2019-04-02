import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { css } from '@emotion/core'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'

// Styling for width of container
const width = css`
  max-width: 900px;
  margin-top: 80px;
`

// Styling for font-size of header
const headerSize = css`
  font-size: 24px;
`

// Styling for Date
const date = css`
  font-weight: 700;
`

// Styling for markdown content
const contentSize = css`
  font-size: 20px;
  margin-top: 40px;
`

export default ({ data }) => {
  const post = data.cms.postses
  const postContent = post[0].body.markdown
  return (
    <Layout>
      <div css={width} class="ui text container">
        <h2 css={headerSize} class="ui header">
          {post[0].title}
        </h2>
        <span css={date}>{moment(post.updatedAt).format('MMMM DD YYYY')}</span>
        <ReactMarkdown
          escapeHTML={false}
          source={postContent}
          css={contentSize}
        />
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
        body {
          markdown
        }
        excerpt
      }
    }
  }
`
