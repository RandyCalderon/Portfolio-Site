import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div>
      <h3>Contact Me</h3>
      <div>
        <span>
          818-284-5384 <FaPhone />
        </span>
        <span>
          randycweb@gmail.com <MdEmail />
        </span>
      </div>
    </div>
  )
}

export default Contact
