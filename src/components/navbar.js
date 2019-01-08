import React from 'react'
import { Link } from 'gatsby'
import { jsx, css } from '@emotion/core'

const color = css`
  color: aqua;
`
const navItems = ['Home', 'About', 'Projects'];

const NavBar = () => {
  return (
    <div css={color}>
      {navItems.map(item => {
        return (
          <Link to={item.toLowerCase()}>{item}</Link>
        )
      })}
    </div>
  )
}

export default NavBar