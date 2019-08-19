import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const Stack = () => {
    return(
        <React.Fragment>
        <h1>Tech Stack</h1>
        <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Styled Components</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Docusign API</li>
        <li>Chainpoint API</li>
        <li>Stripe API</li>
        <li>Auth0</li>
        </ul>
        </React.Fragment>
    )
}

const anchoredPopup = () => (
  <Popup content={Stack} trigger={<Button icon='file code' />} basic />
)

export default anchoredPopup