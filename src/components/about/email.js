import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'

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
    this.sendEmail(this.state.name, this.state.email, this.state.message)
    this.setState({
      emailSubmitted: true,
    })
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
      <form className="ui form success" onSubmit={this.handleSubmit}>
        <h3>Message me</h3>
        <div className="inline fields">
          <div className="eight wide field">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              onChange={this.handleName}
              value={this.state.name}
            />
          </div>
        </div>
        <div className="inline fields">
          <div className="eight wide field">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              placeholder="Email"
              name="Email"
              onChange={this.handleEmail}
              value={this.state.email}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="contactinfo">Message</label>
          <textarea
            name="contactinfo"
            onChange={this.handleMessage}
            placeholder="Enter your message here"
            required
            value={this.state.message}
          />
        </div>
        <div>
          <input className="ui button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}
