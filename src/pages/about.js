import React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/core'
import { FaTwitter, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Email from '../components/email'

const color = css`
  margin-top: 100px;
  color: black;
  display: flex;
`
const imgStyle = css`
  border-radius: 50%;
`
const aboutWrapper = css`
  display: flex;
  flex-direction: column;
`

const icons = css`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  margin-left: 25px;
`

const links = css`
  color: black;
`

const iconSize = css`
  height: 35px;
  width: 35px;
`

const text = css`
display: flex;
flex-direction: column;
  font-family: 'Ubuntu', sans-serif;
  padding-left: 30px;
  width: 700px;
  text-align:justify;
  text-justify:inter-word;
  font-size: 20px;
`
const contactDetails = css`
  display: flex;
  justify-content: space-between;
  width: 290px;
  `

const contactinfo = css`
  display: flex;
  justify-content: space-between;
  width: 400px;
`

const contactText = css`
  padding-bottom: 25px;
`

const About = () => {
  return (
    <Layout>
      <div css={color}>
        <div css={aboutWrapper}>
          <img css={imgStyle} src='https://res.cloudinary.com/deqko80pg/image/upload/c_fit,h_250,r_0,w_250,x_0,y_0/v1547202723/Randy.jpg' />
          <div css={icons}>
            <a css={links} href='https://twitter.com/RandyCdev' target='__blank'><FaTwitter css={iconSize} /></a>
            <a css={links} href='https://www.linkedin.com/in/randy-calderon-237474161/' target='__blank'><FaLinkedin css={iconSize} /></a>
            <a css={links} href='https://github.com/RandyCalderon' target='__blank'><FaGithub css={iconSize} /></a>
          </div>
        </div>
        <div css={text}>
          <h2>About Me</h2>
          <p>Hi, my name is Randy Calderon and I'm a FrontEnd Web Developer located in Southern California with an interest in animation and solving the challenge of providing the best user experience programmatically. My dream is to one day be able to work in a setting where my work can affect the education model in a positive way and/or bring more awareness to our environmental issues.</p>
          <h3>Contact Me</h3>
          <div css={contactDetails}>
            <h3><FaPhone css={iconSize} />Phone</h3>
            <h3><MdEmail css={iconSize} /> Email</h3>
          </div>
          <div css={contactinfo}>
            <span css={contactText}>818-284-5384</span>
            <span>randycweb@gmail.com</span>
          </div>
          <Email />
        </div>
      </div>
    </Layout>
  )
}

export default About