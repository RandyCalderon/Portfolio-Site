import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'

const color = css`
  black;
`

const Projects = () => {
  return (
    <Layout css={color}>
      <div>
        <h2>List of Projects</h2>
      </div>
    </Layout>
  )
}

export default Projects
