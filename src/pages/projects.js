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

// Css styling for card div
const cardFlex = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
  height: 800px;
  margin: 0 auto;
`

const Projects = () => {
  return (
    <Layout css={color}>
      <div>
        <h2 css={header}>Projects</h2>
      </div>
      <div css={cardFlex}>
        <Cards />
      </div>
    </Layout>
  )
}

export default Projects
