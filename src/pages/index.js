import React from 'react'
import { css } from '@emotion/core'
import SEO from '../components/seo'
import Layout from '../components/layout'
import About from '../components/sections/about'
import Projects from '../components/sections/projects'

const background = css`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`
// Container for image and text
const mainContainer = css`
  position: relative;
`

// Container for animation
const blurbContainer = css`
  position: absolute;
  top: 25%;
  left: 70%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  font-weight: 700;
  line-height: 2;
  width: 100%;
`

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div css={background}>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div css-={mainContainer}>
          <img src="https://res.cloudinary.com/deqko80pg/image/upload/e_blackwhite,e_auto_contrast,h_1080,w_1920/v1554772298/portbackgroundEdit.jpg"/>
            <h2 style={{ color: 'white' }} css={blurbContainer}>Software Engineer interested in education, environmentalism and UI/UX</h2>
            </div>
            <About/>
            <Projects/>
          </Layout>
      </div>
    )
  }
}

export default Home
