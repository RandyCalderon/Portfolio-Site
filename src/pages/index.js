import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { css } from '@emotion/core'


const background = css`
  background: url('https://res.cloudinary.com/deqko80pg/image/upload/c_scale,e_brightness:-40,h_1080,w_1920/v1547037334/siteload.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  overflow:hidden;
`

const IndexPage = () => (
  <div css={background}>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p>FrontEnd Web Developer passionate about design</p>
    </Layout>
  </div>
)

export default IndexPage  
