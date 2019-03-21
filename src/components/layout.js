import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Header from './header'
import './layout.css'

const layout = css`
  display: flex;
  min-height: 100vh;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const content = css`
  flex-grow: 1;
`
const foot = css`
  background: black;
  color: white;
  width: 100%;
  text-align: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div css={layout}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div css={content}>{children}</div>
          <footer css={foot}>
            © {new Date().getFullYear()}, Designed by Randy Calderon
            {` `}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
