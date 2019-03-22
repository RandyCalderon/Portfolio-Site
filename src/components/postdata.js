import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const color = css`
  color: black;
`

const postData = props => {
  return (
    <div css={color}>
      {props.posts.map((post, i) => {
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
  )
}

export default postData
