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
  padding-left: 20px;
  position: absolute;
`

// Font-size styling for composition to pass as an array
const fontSize = css`
  font-size: 30px;
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

// Pre-animation text
const description = css``
class LandingAnimation extends React.PureComponent {
  state = { items: ['UI/UX'] }

  componentDidMount() {
    setTimeout(() => this.setState({ items: ['UI/UX'] }), 100)
    setTimeout(() => this.setState({ items: ['education'] }), 1500)
    setTimeout(() => this.setState({ items: ['environmentalism'] }), 2700)
    setTimeout(() => this.componentDidMount(), 4000)
  }

  render() {
    return (
      <div css={[flex, white]}>
        <h2 css={[fontSize, description]}>
          FrontEnd web developer interested in
        </h2>
        <div>
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
        </div>
      </div>
    )
  }
}

export default LandingAnimation
