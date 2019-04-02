import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Cards from '../components/cards'

// Margin Container
const margin = css`
  margin-top: 40px;
`

// Header container
const header = css`
  text-align: center;
  font-family: candara;
  font-weight: 400;
  color: #2185d0;
`

const Projects = () => {
  return (
    <Layout>
      <div css={margin}>
        <h2 css={header}>Projects</h2>
        <Cards />
      </div>
    </Layout>
  )
}

export default Projects
