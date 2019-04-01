import React, { Component } from 'react'
import Layout from '../components/layout'
import Email from '../components/email'

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
        <div>
          <div>
            <img
              src="https://res.cloudinary.com/deqko80pg/image/upload/c_fit,h_250,r_0,w_250,x_0,y_0/v1547202723/Randy.jpg"
              alt="profilepic"
            />
          </div>
          <div>
            <h2>About Me</h2>
            <p>
              Hi, my name is Randy Calderon and I'm a FrontEnd Web Developer
              located in Southern California with an interest in animation and
              solving the challenge of providing the best user experience
              programmatically. My dream is to one day be able to work in a
              setting where my work can affect the education model in a positive
              way and/or bring more awareness to our environmental issues.
            </p>
          </div>
          <Email />
        </div>
      </Layout>
    )
  }
}
