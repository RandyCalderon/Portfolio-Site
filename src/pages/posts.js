import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import PostData from '../components/postdata'
import { css } from '@emotion/core'

class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
    console.log(this, this.state.data)
  }

  componentDidMount() {
    this.setState({ data: this.props.data.cms.assets })
  }

  render() {
    console.log(this.state)
    return (
      <Layout>
        <PostData posts={this.state.data} />
      </Layout>
    )
  }
}

export default Posts

export const query = graphql`
  query {
    cms {
      assets(where: { status: PUBLISHED }) {
        title
        body
      }
    }
  }
`
