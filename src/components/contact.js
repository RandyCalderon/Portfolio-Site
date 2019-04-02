import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div class="ui stackable grid container">
      <h3>Contact Me</h3>
      <div class="row">
        <h4>Phone:</h4>
        <FaPhone /> 818-284-5384
      </div>
      <div class="row">
        <h4>Email:</h4>
        <MdEmail /> randycweb@gmail.com
      </div>
    </div>
  )
}

export default Contact
