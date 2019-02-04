import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Header from './header'
import './layout.css'

const layout = css`
  align-items: center;
  max-width: 100%;
  text-align: center;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const footer = css`
  font-size: 20px;
  display: flex;
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div css={layout}>
          {children}
          <footer css={footer}>
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
