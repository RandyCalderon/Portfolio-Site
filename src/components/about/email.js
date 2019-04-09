import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'

export default class Email extends Component {
  state = {
    contactinfo: '',
    emailSubmitted: false,
    reply_to: '',
    senderEmail: '',
  }

  handleCancel = () => {
    this.setState({
      contactinfo: '',
    })
  }

  handleContact = event => {
    this.setState({
      contactinfo: event.target.value,
    })
  }

  handleName = event => {
    this.setState({
      from_name: event.target.value,
    })
  }

  handleReply = event => {
    this.setState({
      reply_to: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.sendEmail(
      process.env.GATSBY_EMAILJS_USERID,
      process.env.GATSBY_EMAILJS_RECEIVER,
      process.env.GATSBY_EMAILJS_TEMPLATEID,
      this.state.contactinfo,
      this.state.from_name,
      this.state.reply_to
    )

    this.setState({
      emailSubmitted: true,
    })
  }

  sendEmail(contactinfo, senderEmail, from_name) {
    let receiver = process.env.GATSBY_EMAILJS_RECEIVER
    emailjs
      .send(
        'mailgun',
        process.env.GATSBY_EMAILJS_TEMPLATEID,
        {
          receiver,
          contactinfo,
          reply_to,
          from_name,
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
      <form class="ui form success" onSubmit={this.handleSubmit}>
        <h3>Message me</h3>
        <div class="inline fields">
          <div class="eight wide field">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              onChange={this.handleName}
              value={this.state.from_name}
            />
          </div>
        </div>
        <div class="inline fields">
          <div class="eight wide field">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              placeholder="Email"
              name="Email"
              onChange={this.handleReply}
              value={this.state.reply_to}
            />
          </div>
        </div>
        <div class="field">
          <label htmlFor="contactinfo">Message</label>
          <textarea
            name="contactinfo"
            onChange={this.handleContact}
            placeholder="Enter your message here"
            required
            value={this.state.contactinfo}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
          <button class="ui secondary button" onClick={this.handleCancel}>
            Clear
          </button>
        </div>
      </form>
    )
  }
}
