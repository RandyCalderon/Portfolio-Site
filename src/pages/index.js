import React from 'react'
import { css } from '@emotion/core'
import SEO from '../components/seo'
import LandingAnimation from '../components/home/landinganimation'
import Layout from '../components/layout'

const background = css`
  background: url('https://res.cloudinary.com/deqko80pg/image/upload/e_blackwhite,e_auto_contrast,h_1080,w_1920/v1554772298/portbackgroundEdit.jpg')
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -height: auto;
`

// Container for animation
const animationContainer = css`
  margin-top: 100px;
  font-size: 30px;
  font-weight: 700;
  line-height: 2;
  width: 100%;
`

const Home = () => (
  <div css={background}>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div css={animationContainer}>
        <LandingAnimation />
      </div>
    </Layout>
  </div>
)

export default Home
