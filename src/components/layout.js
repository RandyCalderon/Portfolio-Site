import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Header from './header'
import './layout.css'

const color = css`
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
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
        <Header
          siteTitle={data.site.siteMetadata.title} />
        <div
          css={color}
        >
          {children}
          <footer>
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
