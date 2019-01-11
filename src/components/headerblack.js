import { Link } from '@reach/router'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import React from 'react'


const mainContainerBlack = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: black;
`

const navStyling = css`
width: 250px;
display: flex;
justify-content: space-evenly;
list-style-type: none;
padding-right: 20px;
line-height: 2;
`
const remove = css`
  text-decoration: none;
  color: white;
  &:hover {
    border-bottom: 1px solid white;
  }
`

const font = css`
  font-family: 'Qwigley', cursive;
  color: white;
`


const HeaderBlack = () => (
  <div css={mainContainerBlack}>
    <h1 css={font}>Randy Calderon</h1>
    <nav>
      <ul css={navStyling}>
        <li><Link css={remove} to={'/posts'}>Posts</Link></li>
        <li><Link css={remove} to={'/projects'}>Projects</Link></li>
        <li><Link css={remove} to={'/about'}>About</Link></li>
      </ul>
    </nav>
  </div>
)

HeaderBlack.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderBlack.defaultProps = {
  siteTitle: ``,
}

export default HeaderBlack
