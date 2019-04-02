import React, { Component } from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Contact from '../components/contact'
import ContactLinks from '../components/contactlinks'
import Email from '../components/email'

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
    this.state = {
      isOpen: false,
    }
  }

  handleClick = () => {
    let options = {
      height: '100%',
      width: '100%',
      overflow: 'auto',
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      pdfOpenParams: { view: 'FitV' },
    }

    this.setState({
      isOpen: true,
    })
  }

  render() {
    return (
      <Layout>
        <div class="ui stackable grid container">
          <div class="left aligned four wide column">
            <img
              css={clipCircle}
              src="https://res.cloudinary.com/deqko80pg/image/upload/c_fit,h_250,r_0,w_250,x_0,y_0/v1547202723/Randy.jpg"
              alt="profilepic"
            />
            <ContactLinks />
          </div>
          <div class="left aligned twelve wide column">
            <h2>About Me</h2>
            <p css={text}>
              Hi, my name is Randy Calderon and I'm a FrontEnd Web Developer
              located in Southern California with an interest in animation and
              solving the challenge of providing the best user experience
              programmatically. My dream is to one day be able to work in a
              setting where my work can affect the education model in a positive
              way and/or bring more awareness to our environmental issues.
            </p>
          </div>
        </div>

        <Contact />
        <Email />
      </Layout>
    )
  }
}
