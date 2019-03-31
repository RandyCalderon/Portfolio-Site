import React from 'react'
import { Card } from 'semantic-ui-react'
import { css } from '@emotion/core'
import { FaGithub } from 'react-icons/fa'
import img from '../images/Anchord.png'

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
const header = <h2 css={headerStyle}>Anchord App</h2>

// Anchord Project description
const anchordDesc = (
  <div class="ui text container">
    <p>
      Anchored utilizes Chainpoint's innovative technology which allows users to
      securely link a hash of their data, such as important documents, to the
      Bitcoin blockchain. After logging in, users can connect with third party
      applications such as DocuSign and get timestamp proofs for any file. By
      associating data to a tamper-proof, immutable ledger, it can be
      mathematically proven that the data existed at an exact time and place.
    </p>
    <div css={linkFlex}>
      <a
        href="https://github.com/Lambda-School-Labs/anchored.app"
        target="_blank"
      >
        <FaGithub css={iconSize} />
      </a>
      <a css={clean} href="https://anchored.app/" target="_blank">
        <b>Visit Site</b>
      </a>
    </div>
  </div>
)

const cards = () => (
  <Card
    class="ui container"
    image={img}
    header={header}
    description={anchordDesc}
  />
)

export default cards
