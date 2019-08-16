import React from 'react'
import { css } from '@emotion/core'
import Cards from '../project/cards'

// Margin Container
const margin = css`
  margin-top: 40px;
  margin-bottom: 40px;
`

// Header container
const header = css`
  text-align: center;
  font-family: candara;
  font-weight: 700;
  letter-spacing: 3px;
`

const Projects = () => {
  return (
      <div css={margin} id="projects">
        <h2 css={header}>Projects</h2>
        <Cards />
      </div>
  )
}

export default Projects
