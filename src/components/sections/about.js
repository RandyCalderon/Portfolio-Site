import React, { Component } from 'react'
import { css } from '@emotion/core'
import ContactLinks from '../about/contactlinks'

// Container Margin
const margin = css`
  width: 100vw;
  height: 100vh;
  background-color: rgb(149, 165, 166);
  color: white;
  border-bottom: 5px solid black;
`

// About me Header
const header = css`
  letter-spacing: 3px;
  text-align: center;
`

// About me text
const text = css`
  font-size: 20px;
`

const clipCircle = css`
  -webkit-clip-path: circle(120px at center);
  clip-path: circle(120px at center);
`

// Skills bullet text
const bulletText = css`
  font-size: 22px;
`

export default class About extends Component {
  render() {
    return (
        <div css={margin} id="about">
          <div className="ui stackable grid container">
            <div className="left aligned four wide column">
              <img
                css={clipCircle}
                src="https://res.cloudinary.com/deqko80pg/image/upload/c_fit,h_250,r_0,w_250,x_0,y_0/v1547202723/Randy.jpg"
                alt="profilepic"
              />
              <ContactLinks />
            </div>
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
