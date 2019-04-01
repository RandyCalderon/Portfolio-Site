import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const ContactLinks = () => {
  return (
    <div>
      <a href="https://twitter.com/RandyCdev" target="__blank">
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/randy-calderon-237474161/"
        target="__blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/RandyCalderon" target="__blank">
        <FaGithub />
      </a>
    </div>
  )
}

export default ContactLinks
