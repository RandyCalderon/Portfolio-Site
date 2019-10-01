import React from 'react'
import { Popup } from 'semantic-ui-react'
import { FaServicestack } from 'react-icons/fa'

const style = {
  borderRadius: 0,
  opacity: 0.8,
  padding: '2em',
  background: 'black',
  color: 'white',
  fontSize: '14px',
}

const Stack = () => {
  return (
    <div style={{ width: '500px' }}>
      <h1 style={{ textAlign: 'center' }}>Tech Stack</h1>
      <div style={{ columns: '1 auto' }}>
        <h2>FrontEnd</h2>
        <ul>
          <li>React</li>
          <li>Classnames</li>
        </ul>
      </div>
      <div style={{ columns: '1 auto' }}>
        <h2>BackEnd/API</h2>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Google Calendar API</li>
          <li>Slack API</li>
          <li>Auth0</li>
        </ul>
      </div>
    </div>
  )
}

const anchoredPopup = () => (
  <Popup
    style={style}
    content={Stack}
    trigger={
      <FaServicestack
        style={{ width: '30px', height: '30px', marginLeft: '10px' }}
      />
    }
    basic
  />
)

export default anchoredPopup
