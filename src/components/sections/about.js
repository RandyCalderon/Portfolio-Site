import React, { Component } from 'react'
import { css } from '@emotion/core'

// Container Margin
const margin = css`
  width: 100vw !important;
  height: 100vh;
  background-color: black;
  color: white;
  border-bottom: 5px solid black;
  margin: 0 auto;
`

// About me Header
const header = css`
  letter-spacing: 3px;
  text-align: center;
  font-size: 50px;
`

// About me text
const text = css`
  font-size: 26px;
  font-family: candara;
`

// Skills bullet text
const bulletText = css`
  font-size: 28px;
  line-height: 1;
`

export default class About extends Component {
  render() {
    return (
        <div css={margin} style={{margin: '0 auto'}} id="about">
          <div className="ui stackable centered grid" style={{width: '100vw'}}>
            <div style={{marginTop: '20px'}} className="left aligned twelve wide column">
              <h2 css={header}>About Me</h2>
              <p css={text}>
                Hi, my name is Randy Calderon a Software Engineer located
                in Southern California, with an interest in problem solving and
                addressing the challenge of providing the best user experience
                programmatically. My dream is to one day work for a company
                that affects the education model in a positive way and/or brings
                more awareness to our environmental issues. On days where I am not coding I can be found learning Japanese, spending time with my dog or reading up on UI/UX.
              </p>
              <h2 css={header}>Skills</h2>
              <div className="center aligned ui equal width grid">
              <div className="column">
              <h3>Front-End</h3>
              <ul css={bulletText}>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React/Redux</li>
              <li>Jest/Enzyme</li>
              <li>HTML/CSS</li>
              </ul>
              </div>
              <div className="column">
              <h3>Back-end</h3>
              <ul css={bulletText}>
              <li>Node.js</li>
              <li>Java</li>
              <li>MySQL</li>
              <li>Mongo</li>
              <li>GraphQL</li>
              </ul>
              </div>
              <div className="column">
              <h3>Tools</h3>
              <ul css={bulletText}>              
              <li>Git</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
