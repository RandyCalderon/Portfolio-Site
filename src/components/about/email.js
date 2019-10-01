import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { css } from '@emotion/core'

const container = css`
  width: 50% !important;
  margin: 0 auto;
  resize: vertical;
`
const buttonStyle = css`
  background-color: black !important;
  color: white !important;
  border: 1px solid white !important;
`

export default class Email extends Component {
  state = {
    message: '',
    emailSubmitted: false,
    email: '',
    name: '',
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value,
    })
  }

  handleName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.message === ''
    ) {
      alert('Please fill in the empty fields')
    } else {
      this.sendEmail(this.state.name, this.state.email, this.state.message)
      this.setState({
        emailSubmitted: true,
      })
    }
  }

  sendEmail(name, email, message) {
    let receiver = process.env.GATSBY_EMAILJS_RECEIVER
    emailjs
      .send(
        'mailgun',
        process.env.GATSBY_EMAILJS_TEMPLATEID,
        {
          name,
          email,
          message,
          receiver,
        },
        process.env.GATSBY_EMAILJS_USERID
      )
      .then(res => {
        alert('Message has been sent')
        this.setState({
          emailSent: true,
        })
      })
      .catch(err => {
        console.error('Failed to send email. Error:', err.message)
      })
  }

  render() {
    return (
      <form
        className="ui form success"
        css={container}
        onSubmit={this.handleSubmit}
      >
        <h3>Message me</h3>
        <div className="inline fields">
          <div className="eight wide field">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleName}
              value={this.state.name}
            />
          </div>
        </div>
        <div className="inline fields">
          <div className="eight wide field">
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.handleEmail}
              value={this.state.email}
            />
          </div>
        </div>
        <div className="field">
          <textarea
            name="message"
            onChange={this.handleMessage}
            placeholder="Enter your message here"
            required
            value={this.state.message}
          />
        </div>
        <div>
          <input
            css={buttonStyle}
            className="ui button"
            type="submit"
            value="Send Message"
          />
        </div>
      </form>
    )
  }
}
