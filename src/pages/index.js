import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { css } from '@emotion/core'
import { Link } from '@reach/router'

const background = css`
  background: url('https://res.cloudinary.com/deqko80pg/image/upload/c_scale,e_brightness:-40,h_1080,w_1920/v1547037334/siteload.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const margin = css`
  margin-top: 200px;
  font-size: 30px;
  font-weight: 700;
  line-height: 2;
`
const arrow = css`
  border: solid white; 
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 18px;
  line-height: 2;
  transform: translate(-500px, 200px) rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`

const IndexPage = () => (
  <div css={background}>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p css={margin}>FrontEnd Web Developer passionate about UI/UX</p>
      <p><Link css={arrow} to='/about'></Link></p>
    </Layout>
  </div>
)

export default IndexPage  
