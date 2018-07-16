import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import { rhythm, scale } from '../utils/typography'
import styles from "../css/style.module.css"

import Footer from './footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          className={styles.blogtitle}
          style={{
            ...scale(1.3),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            to={'/'}
          >
            {siteTitle}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          className={styles.blogtitle}
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            to={'/'}
          >
            {siteTitle}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
        <Footer siteTitle={siteTitle} />
      </div>
    )
  }
}

export default Template

export const pageQ = graphql`
  query IQ {
    site {
      siteMetadata {
        title
      }
    }
  }
`
