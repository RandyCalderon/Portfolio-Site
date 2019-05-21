import React from 'react'
import { css } from '@emotion/core'
import { Transition, animated } from 'react-spring'

// For animation styling
const animationStyle = css`
  overflow: hidden;
  color: white;
  white-space: nowrap;
  animation: typing 6s steps(80, end);
  text-align: left;
  line-height: 1.2;
  padding-left: 16px;
  position: absolute;
`

// Font-size styling for composition to pass as an array
const fontSize = css`
  font-size: 28px;
`
// Flex styling
const flex = css`
  display: flex;
  width: 100%;
  min-width: 900px;
`
const white = css`
  color: white;
`

class LandingAnimation extends React.PureComponent {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = { items: [], loaded: false }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ items: ['education'], loaded: true }), 0)
    setTimeout(() => this.setState({ items: ['environmentalism'] }), 2000)
    setTimeout(() => this.setState({ items: ['UI/UX'] }), 3600)
    setTimeout(() => this.componentDidMount(), 5600)
  }

  render() {
    return (
      <div css={[flex, white]}>
        {!this.state.loaded ? <h2 css={fontSize}>FrontEnd web developer interested in education</h2>: <h2 css={fontSize}>FrontEnd web developer interested in</h2>}
        <div>
          {this.state.loaded === true ? (
            <Transition
              native
              items={this.state.items}
              from={{ width: 0 }}
              enter={{ width: 0 }}
              leave={{ width: 400 }}
            >
              {item => props => (
                <animated.span
                  css={[fontSize, animationStyle]}
                  style={props}
                  children={item}
                />
              )}
            </Transition>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

export default LandingAnimation
