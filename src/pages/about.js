import React, { Component } from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Contact from '../components/about/contact'
import ContactLinks from '../components/about/contactlinks'
import Email from '../components/about/email'

// Container Margin
const margin = css`
  margin-top: 40px;
`

// About me Header
const header = css`
  font-type: candara;
  letter-spacing: 3px;
`

// About me text
const text = css`
  font-size: 20px;
`

const clipCircle = css`
  -webkit-clip-path: circle(120px at center);
  clip-path: circle(120px at center);
`

export default class About extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Layout>
        <div css={margin}>
          <div className="ui stackable grid container">
            <div className="left aligned four wide column">
              <img
                css={clipCircle}
                src="https://res.cloudinary.com/deqko80pg/image/upload/c_fit,h_250,r_0,w_250,x_0,y_0/v1547202723/Randy.jpg"
                alt="profilepic"
              />
              <ContactLinks />
            </div>
            <div className="left aligned twelve wide column">
              <h2 css={header}>About Me</h2>
              <p css={text}>
                Hi, my name is Randy Calderon a FrontEnd Web Developer located
                in Southern California, with an interest in problem solving and
                addressing the challenge of providing the best user experience
                programmatically. My dream is to one day be able to work in a
                setting where my work can affect the education model in a
                positive way and/or bring more awareness to our environmental
                issues.
              </p>
            </div>
          </div>
          <div className="ui stackable grid container">
            <div className="left aligned four wide column">
              <Contact />
            </div>
            <div className="left aligned twelve wide column">
              <Email />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
