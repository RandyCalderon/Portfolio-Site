import { Link } from '@reach/router'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'
import React from 'react'


const mainContainer = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const navStyling = css`
width: 250px;
display: flex;
justify-content: space-between;
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

const Header = () => (
  <div css={mainContainer}>
    <nav>
      <ul css={navStyling}>
        <li><Link css={remove} to={'/posts'}>Posts</Link></li>
        <li><Link css={remove} to={'/projects'}>Projects</Link></li>
        <li><Link css={remove} to={'/about'}>About</Link></li>
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
