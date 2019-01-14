import React, { Component } from 'react'
import { css } from '@emotion/core'
import * as emailjs from 'emailjs-com'


const contactContainer = css`
padding-top: 20px;
display: flex;
flex-direction: column;
`
const buttonContainer = css`
  display: flex;
  justify-content: space-between;
  width: 180px;
  padding-top: 15px;
`

const textarea = css`
  width: 500px;
  height: 150px;
`

export default class Email extends Component {
  state = {
    contactinfo: '',
    emailSubmitted: false
  };

  handleCancel = () => {
    this.setState({
      contactinfo: ''
    })
  }

  static sender = 'sender@example.com';

  handleChange = (event) => {
    this.setState({
      contactinfo: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env;

    this.sendEmail(
      template,
      this.sender,
      receiverEmail,
      this.state.contactinfo
    );

    this.setState({
      emailSubmitted: true
    })
  }

  sendEmail(template, senderEmail, receiverEmail, contactinfo) {
    emailjs.send('mailgun', template, {
      senderEmail,
      receiverEmail,
      contactinfo
    }).then(res => {
      console.log('Success!', res.status, res.text)
      this.setState({
        emailSent: true
      })
    }).catch(err => {
      console.error('Failed to send feedback. Error:', err.message)
    })
  }

  render() {
    return (
      <form css={contactContainer} onSubmit={this.handleSubmit}>
        <h3>Message me</h3>
        <textarea
          css={textarea}
          name="contactinfo"
          onChange={this.handleChange}
          placeholder="Enter your message here"
          required value={this.state.contactinfo}
        />
        <div css={buttonContainer}>
          <input type="submit" value="Submit" />
          <button onClick={this.handleCancel}>Clear</button>
        </div>
      </form>
    )
  }
}


