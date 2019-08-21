import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { css } from '@emotion/core'

const contact = css`
  color: white;
  font-family: 'candara';
  font-size: 24px;
`

const ContactLinks = () => {
  return (
    <div className="ui simple dropdown item" css={contact}>
      <i className="dropdown icon" >Social</i>
      <div className="menu">
        <a
          className="item"
          href="https://twitter.com/RandyCdev"
          target="__blank"
        >
          <FaTwitter />
        </a>
        <a
          className="item"
          href="https://www.linkedin.com/in/randy-calderon-237474161/"
          target="__blank"
        >
          <FaLinkedin />
        </a>
        <a
          className="item"
          href="https://github.com/RandyCalderon"
          target="__blank"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  )
}

export default ContactLinks
