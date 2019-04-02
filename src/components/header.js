import { Link } from '@reach/router'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import React from 'react'

const mainContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: black;
  height: 60px;
  border-bottom: 2px solid white;
`

const navStyling = css`
  font-size: 18px;
  width: 250px;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  padding-right: 20px;
  line-height: 3;
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
  line-height: 1.5;
`

const Header = () => (
  <div css={mainContainer}>
    <h1 css={font}>Randy Calderon</h1>
    <nav>
      <ul css={navStyling}>
        <li>
          <Link css={remove} to={'/about'}>
            About
          </Link>
        </li>
        <li>
          <Link css={remove} to={'/blog'}>
            Blog
          </Link>
        </li>
        <li>
          <Link css={remove} to={'/projects'}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
