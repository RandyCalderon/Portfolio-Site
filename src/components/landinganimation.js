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
  padding-left: 10px;
`

// Font-size styling for composition to pass as an array
const fontSize = css`
  font-size: 40px;
`
// Flex styling
const flex = css`
  display: flex;
  width: 100%;
  min-width: 900px;
`

// Pre-animation text
const description = css`
  padding-left: 20px;
`
class LandingAnimation extends React.PureComponent {
  state = { items: [] }

  componentDidMount() {
    this.setState({ items: ['UI/UX'] })
    setTimeout(() => this.setState({ items: ['education'] }), 2000)
    setTimeout(() => this.setState({ items: ['enviromentalism'] }), 4000)
    setTimeout(() => this.componentDidMount(), 6000)
  }

  render() {
    return (
      <div css={flex}>
        <h2 css={[fontSize, description]}>
          FrontEnd web developer interested in
        </h2>
        <Transition
          native
          items={this.state.items}
          from={{ width: 0 }}
          enter={{ width: 0 }}
          leave={{ width: 330 }}
        >
          {item => props => (
            <animated.h2
              css={[fontSize, animationStyle]}
              style={props}
              children={item}
            />
          )}
        </Transition>
      </div>
    )
  }
}

export default LandingAnimation
