import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { css } from '@emotion/core'

const background = css`
  background: url('https://res.cloudinary.com/deqko80pg/image/upload/c_scale,e_brightness:-40,h_1080,w_1920/v1547037334/siteload.jpg');
  height: 100vh;
`

const IndexPage = () => (
  <div css={background}>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Layout>
  </div>
)

export default IndexPage  
