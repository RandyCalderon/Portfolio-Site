import React from 'react'
import Email from '../about/email'
import { css } from '@emotion/core'

// Contact me Container
const container = css`
    color: white;
    background-color: black;
`
// Header styling
const header = css`
    font-size: 50px;
    text-align: center;
    padding-top: 40px;
`

const Contact = () => {
    return(
        <div css={container}>
        <h2 css={header}>Contact</h2>
        <Email/>
        </div>
    )
}

export default Contact