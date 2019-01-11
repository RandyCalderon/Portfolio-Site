import React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/core'

const color = css`
  color: black;
`

const Posts = () => {
  return (
    <Layout>
      <div css={color}>
        I was once a person with posts
      </div>
    </Layout >
  )
}

export default Posts