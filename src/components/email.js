import React, { Component } from 'react'
import { css } from '@emotion/core'
import * as emailjs from 'emailjs-com'

export default class Email extends Component {
  state = {
    contactinfo: '',
    emailSubmitted: false,
  }

  handleCancel = () => {
    this.setState({
      contactinfo: '',
    })
  }

  handleChange = event => {
    this.setState({
      contactinfo: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.sendEmail(
      process.env.GATSBY_EMAILJS_USERID,
      process.env.GATSBY_EMAILJS_RECEIVER,
      process.env.GATSBY_EMAILJS_TEMPLATEID,
      this.state.contactinfo
    )

    this.setState({
      emailSubmitted: true,
    })
  }

  sendEmail(template, receiverEmail, userID, contactinfo) {
    let receiver = process.env.GATSBY_EMAILJS_RECEIVER
    emailjs
      .send(
        'mailgun',
        process.env.GATSBY_EMAILJS_TEMPLATEID,
        {
          receiver,
          contactinfo,
        },
        process.env.GATSBY_EMAILJS_USERID
      )
      .then(res => {
        alert('Message has been sent')
        this.setState({
          emailSent: true,
        })
        this.handleCancel()
      })
      .catch(err => {
        console.error('Failed to send email. Error:', err.message)
      })
  }

  render() {
    return (
      <form class="column" onSubmit={this.handleSubmit}>
        <h3>Message me</h3>
        <textarea
          name="contactinfo"
          onChange={this.handleChange}
          placeholder="Enter your message here"
          required
          value={this.state.contactinfo}
        />
        <div>
          <input type="submit" value="Submit" />
          <button onClick={this.handleCancel}>Clear</button>
        </div>
      </form>
    )
  }
}
