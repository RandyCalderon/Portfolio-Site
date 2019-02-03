import React from 'react'
import { css } from '@emotion/core'
import { Transition, animated } from 'react-spring'

const animationStyle = css`
  overflow: hidden;
  color: white;
  font-size: 30px;
  white-space: nowrap;
  animation: typing 6s steps(80, end);
  text-align: left;
  padding-left: 10px;
`
const flex = css`
  display: flex;
  width: 100%;
  min-width: 900px;
`

class LandingAnimation extends React.PureComponent {
  state = { items: [] }

  componentDidMount() {
    setTimeout(() => this.setState({ items: ['UI/UX'] }), 0)
    setTimeout(() => this.setState({ items: ['education'] }), 2000)
    setTimeout(() => this.setState({ items: ['enviromentalism'] }), 4000)
    setTimeout(() => this.componentDidMount(), 6000)
  }

  render() {
    return (
      <div css={flex}>
        <h2>FrontEnd web developer interested in</h2>
        <Transition
          native
          items={this.state.items}
          from={{ width: 0 }}
          enter={{ width: 0 }}
          leave={{ width: 260 }}
        >
          {item => props => (
            <animated.h2 css={animationStyle} style={props} children={item} />
          )}
        </Transition>
      </div>
    )
  }
}

export default LandingAnimation
