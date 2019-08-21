import React from 'react'
import { css } from '@emotion/core'
import Carousel from '../project/carousel'

// Margin Container
const margin = css`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
`

// Header container
const header = css`
  color: white;
  text-align: center;
  font-family: candara;
  font-weight: 700;
  letter-spacing: 3px;
  padding-top: 40px;
  font-size: 50px;
`


const Projects = () => {
  return (
      <div css={margin} id="projects">
      <h2 css={header}>Projects</h2>  
      <Carousel />
      </div>
  )
}

export default Projects
