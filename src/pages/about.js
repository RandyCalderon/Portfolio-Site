import React, { Component } from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/core'
import { FaTwitter, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import PDFObject from 'pdfobject'
import pdf from '../resume/Randy Calderon-Resume.pdf'
import Email from '../components/email'

const color = css`
  color: black;
  display: flex;
  width: 100%;
  box-sizing: border-box;
`
const imgStyle = css`
  border-radius: 50%;
`
const aboutWrapper = css`
  display: flex;
  margin: 0 auto;
  width: 960px;
  padding-top: 40px;
`

const icons = css`
  max-width: 200px;
  display: flex;
  justify-content: space-evenly;
  margin-left: 25px;
  padding-bottom: 10px;
`

const links = css`
  color: black;
`

const iconSize = css`
  height: 25px;
  width: 25px;
`

const text = css`
  display: flex;
  flex-direction: column;
  font-family: 'Ubuntu', sans-serif;
  padding-left: 30px;
  width: 700px;
  text-align: justify;
  text-justify: inter-word;
  font-size: 20px;
  vertical-align: top;
  height: 100%;
`
const contactDetails = css`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 650px;
`
const contactInfo = css`
  display: flex;
  justify-content: space-between;
`
const flex = css`
  display: flex;
`

const iconContainer = css`
  display: flex;
  justify-content: space-between;
`

const modal = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const resume = css`
  border-radius: 2.5px;
  width: 100px;
  border: 1px solid black;
  margin: 0 auto;
  background: white;
  min-height: 25px;
`

const leftcontent = css`
  display: flex;
  flex-direction: column;
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
      height: '800px',
      width: '800px',
      pdfOpenParams: { view: 'FitV' },
    }

    PDFObject.embed(pdf, '#pdf', options)

    this.setState({
      isOpen: true,
    })
  }

  render() {
    return (
      <Layout>
        <div css={modal} id="pdf" />
        <div
          style={{
            backgroundColor: this.state.isOpen ? 'rgba(0,0,0,0.4)' : '',
            height: this.state.isOpen ? 'calc(100vh - 60px)' : '',
            boxSizing: this.stateisOpen ? 'border-box' : '',
          }}
          css={color}
        >
          <div css={aboutWrapper}>
            <div css={leftcontent}>
              <img
                css={imgStyle}
                src="https://res.cloudinary.com/deqko80pg/image/upload/c_fit,h_250,r_0,w_250,x_0,y_0/v1547202723/Randy.jpg"
                alt="profilepic"
              />
              <div css={icons}>
                <a
                  css={links}
                  href="https://twitter.com/RandyCdev"
                  target="__blank"
                >
                  <FaTwitter css={iconSize} />
                </a>
                <a
                  css={links}
                  href="https://www.linkedin.com/in/randy-calderon-237474161/"
                  target="__blank"
                >
                  <FaLinkedin css={iconSize} />
                </a>
                <a
                  css={links}
                  href="https://github.com/RandyCalderon"
                  target="__blank"
                >
                  <FaGithub css={iconSize} />
                </a>
              </div>
              <button css={resume} onClick={this.handleClick}>
                Resume
              </button>
            </div>
            <div css={text}>
              <h2>About Me</h2>
              <p>
                Hi, my name is Randy Calderon and I'm a FrontEnd Web Developer
                located in Southern California with an interest in animation and
                solving the challenge of providing the best user experience
                programmatically. My dream is to one day be able to work in a
                setting where my work can affect the education model in a
                positive way and/or bring more awareness to our environmental
                issues.
              </p>
              <div css={contactDetails}>
                <h3>Contact Me</h3>
                <div css={iconContainer}>
                  <div css={flex}>
                    <FaPhone css={iconSize} />
                    <h3>Phone</h3>
                  </div>
                  <div css={flex}>
                    <MdEmail css={iconSize} />
                    <h3>Email</h3>
                  </div>
                </div>
                <div css={contactInfo}>
                  <p>818-284-5384</p>
                  <p>randycweb@gmail.com</p>
                </div>
              </div>
              <Email />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
