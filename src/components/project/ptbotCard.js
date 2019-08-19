import React from 'react'
import { Card } from 'semantic-ui-react'
import { css } from '@emotion/core'
import { FaGithub } from 'react-icons/fa'
import img from '../../images/PTBot.png'

// Css styling for header for card
const headerStyle = css`
  font-size: 16px;
  font-weight: 700;
  text-decoration: underline gray;
  border-top: 1px solid black;
  padding-top: 20px;
`

// Github iconsize
const iconSize = css`
  width: 30px;
  height: 30px;
  color: black;
`
// Flex for links
const linkFlex = css`
  display: flex;
  justify-content: space-between;
`

// Clean anchor inherit style
const clean = css`
  text-decoration: none;
  color: inherit;
`

// Header config for card
const header = <h2 css={headerStyle}>PTb0t App</h2>

// Main Card Styling
const card = css`
  width: 100% !important;
  max-width: 1000px !important;
`

// Anchord Project description
const ptbotDesc = (
  <div>
    <p>
      PTb0t is a free open-source Slack bot that automatically sends away messages when you are on vacation. Schedule vacation times in Slack or on our dashboard and your vacation is added to your Google Calendar. Create custom messages for specific channels or users, or set an automated message for any time you're mentioned while you're OOO.
    </p>
    <div css={linkFlex}>
      <a
        href="https://github.com/labsce1-ptbot?type=source"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub css={iconSize} />
      </a>
      <a
        css={clean}
        href="https://ptbot.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <b>Visit Site</b>
      </a>
    </div>
  </div>
)

const cards = () => (
  <Card
    css={card}
    className="ui text container"
    image={img}
    header={header}
    description={ptbotDesc}
  />
)

export default cards
