import * as React from 'react'
import { graphql } from 'gatsby'
import StandardHero from '../components/hero/hero'
// import * as Sentry from '@sentry/gatsby'
import Layout from '../components/layout/layout'
// import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

const HomePage =({data})=>{
  const img = data.allContentfulHomepage.nodes[0].heroImage;
  const pagetitle = data.allContentfulHomepage.nodes[0].pagetitle;

  return (
    <Layout>
       <StandardHero heroImage={img} pagetitle={pagetitle}></StandardHero>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
query {
  allContentfulHomepage {
    nodes {
      contentful_id
      pagetitle
      heroImage {
        description
        file {
          url
        }
        gatsbyImageData(height: 300)
      }
    }
  }
}
`