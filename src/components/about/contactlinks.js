import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const ContactLinks = () => {
  return (
    <div class="ui simple dropdown item">
      Social
      <i class="dropdown icon" />
      <div class="menu">
        <a class="item" href="https://twitter.com/RandyCdev" target="__blank">
          <FaTwitter />
        </a>
        <a
          class="item"
          href="https://www.linkedin.com/in/randy-calderon-237474161/"
          target="__blank"
        >
          <FaLinkedin />
        </a>
        <a
          class="item"
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
