import React from 'react'
import { css } from '@emotion/core'
import Cards from '../project/anchoredcard'
import Carousel from '../project/carousel'

// Margin Container
const margin = css`
  background-color: black;
  height: 100vh;
`

// Header container
const header = css`
  color: white;
  text-align: center;
  font-family: candara;
  font-weight: 700;
  letter-spacing: 3px;
  padding-top: 40px;
`

// Padding for card
const padding = css`
  padding-bottom: 40px;
`


const Projects = () => {
  return (
      <div css={margin} id="projects">
      <h2 css={header}>Projects</h2>  
      <Carousel/>
      </div>
  )
}

export default Projects
