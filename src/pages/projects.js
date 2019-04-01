import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Cards from '../components/cards'

const color = css`
  background-color: orange;
`

// Header container
const header = css`
  text-align: center;
`

const Projects = () => {
  return (
    <Layout css={color}>
      <div>
        <h2 css={header}>Projects</h2>
        <Cards />
      </div>
    </Layout>
  )
}

export default Projects
