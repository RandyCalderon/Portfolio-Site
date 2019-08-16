import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const ContactLinks = () => {
  return (
    <div className="ui simple dropdown item">
      <i className="dropdown icon" style={{fontSize: '18px', fontWeight: 700}}>Social</i>
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
