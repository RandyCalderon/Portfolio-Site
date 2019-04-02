import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { css } from '@emotion/core'
import { Link } from '@reach/router'
import LandingAnimation from '../components/landinganimation'

const background = css`
  background: url('https://res.cloudinary.com/deqko80pg/image/upload/e_auto_contrast,h_1080,w_1920/v1553208181/portbackground.jpg')
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
`

const margin = css`
  margin-top: 100px;
  font-size: 30px;
  font-weight: 700;
  line-height: 2;
  margin-right: 200px;
`
const arrow = css`
  border: solid white;
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 15px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`

// Move arrow
const move = css`
  transform: translate(1400px, 200px);
  width: 100px;
  position: sticky;
`

const Home = () => (
  <div css={background}>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div css={margin}>
        <LandingAnimation />
      </div>
      <div css={move}>
        <Link css={arrow} to="/about" />
      </div>
    </Layout>
  </div>
)

export default Home
