import React from 'react'
import { css } from '@emotion/core'
import SEO from '../components/seo'
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
  margin-top: 60px;
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
          <div css={animationContainer}>
            <h2 style={{ color: 'white' }}>Software Engineer interested in education, environmentalism and UI/UX</h2>
          </div>
        </Layout>
      </div>
    )
  }
}

export default Home
