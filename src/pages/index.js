import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

var myPresent = new Date()

myPresent.toLocaleDateString()

/*  */
var inDev = "me not set"
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
  inDev = true
} else {
  // production code
  inDev = false
}

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => { 
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const currentTime = new Date()
          const postDate = new Date( get(node, 'frontmatter.date') )
          const strPostDate = postDate.toLocaleString(
            'pt-PT',
            { year: 'numeric', month: 'numeric', day: 'numeric' })
          if ( ( postDate < currentTime ) || inDev ) {
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{strPostDate}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          } else {
            return(
              null
            )
          }
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`
