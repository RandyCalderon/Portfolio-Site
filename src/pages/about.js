import React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/core'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

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
  width: 100px;
  display: flex;
  justify-content: space-between;
  margin-left: 25px;
`

const links = css`
  color: black;
`

const text = css`
  font-family: 'Ubuntu', sans-serif;
  padding-left: 30px;
  width: 700px;
  text-align:justify;
  text-justify:inter-word;
`

const About = () => {
  return (
    <Layout>
      <div css={color}>
        <div css={aboutWrapper}>
          <img css={imgStyle} src='https://res.cloudinary.com/deqko80pg/image/upload/c_fit,h_150,r_0,w_150,x_0,y_0/v1547202723/Randy.jpg' />
          <div css={icons}>
            <a css={links} href='https://twitter.com/RandyCdev' target='__blank'><FaTwitter /></a>
            <a css={links} href='https://www.linkedin.com/in/randy-calderon-237474161/' target='__blank'><FaLinkedin /></a>
            <a css={links} href='https://github.com/RandyCalderon' target='__blank'><FaGithub /></a>
          </div>
        </div>
        <div css={text}>
          <h2>About Me</h2>
          <p>Hi, my name is Randy Calderon and I'm a FrontEnd Web Developer located in Southern California with an interest in animation and solving the challenge of providing the best user experience programmatically. My dream is to one day be able to work in a setting where my work can affect the education model in a positive way and/or bring more awareness to our environmental issues.</p>
          <h3>Contact Me</h3>
        </div>
      </div>
    </Layout>
  )
}

export default About