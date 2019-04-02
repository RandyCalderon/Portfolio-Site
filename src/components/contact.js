import React from 'react'
import { css } from '@emotion/core'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

// Margin for Phone
const margin = css`
  margin-bottom: 20px;
  font-size: 16px;
`

// Margin for Email
const marginTop = css`
  margin-top: 20px;
`

const Contact = () => {
  return (
    <div>
      <h3>Contact Me</h3>
      <div class="row">
        <div css={margin} class="column">
          <h4>Phone:</h4>
          <FaPhone /> 818-284-5384
          <div css={marginTop}>
            <h4>Email:</h4>
            <MdEmail /> randycweb@gmail.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
