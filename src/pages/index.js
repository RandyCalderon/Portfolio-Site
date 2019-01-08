import React from 'react'
import { Link } from 'gatsby'
import NavBar from '../components/navbar'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <NavBar />
    <h1>About</h1>
    <p>Front End Web Developer located in Southern California interested in UI/UX, Japanese Culture and traveling the world. Currently increasing his skills and preparing to embark on remote work.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
