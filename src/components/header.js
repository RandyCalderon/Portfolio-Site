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

  @media screen and (max-width: 360px) {
    width: 200px;
  }
`
const remove = css`
  text-decoration: none;
  color: white;
  &:hover {
    border-bottom: 1px solid white;
  }

  @media screen and (max-width: 450px) {
    font-size: 14px;
  }

  @media screen and (max-width: 355px) {
    font-size: 10px;
  }
`

const font = css`
  font-family: 'Qwigley', cursive;
  color: white;
  line-height: 2;

  @media screen and (max-width: 450px) {
    line-height: 2.75;
    font-size: 22px;
  }

  @media screen and (max-width: 370px) {
    font-size: 16px;
    line-height: 3.75;
  }
`

const Header = () => (
  <div css={mainContainer}>
    <h2 css={font}>Randy Calderon</h2>
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
