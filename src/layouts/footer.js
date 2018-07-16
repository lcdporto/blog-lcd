import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import cc from '../assets/cc.svg'
import by from '../assets/by.svg'

import { rhythm } from '../utils/typography'
import styles from "../css/style.module.css"

class Footer extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteTitle = this.props.siteTitle;
    return (

<footer>
  <div /* Back Home */ >
    <h3>
    <Link
      to={'/'}
    >
      {siteTitle}
    </Link>
    </h3>
  </div>
  <div /* LCD Links */
    style={{
      display: 'flex',
    }}
  >
    <li><a href='https://lcdporto.org'>LCD Porto</a></li>
  </div>


  <div /* cc license */
    className={styles.cc}
  >
    <div className={styles.ccIMG} >
      <a href="https://creativecommons.org/licenses/by/4.0/legalcode.pt">
        <img src={cc} />
        <img src={by} />
      </a>
    </div /* .ccIMG */>
    <div>
      A não ser que explicitamente indicado o <b>{siteTitle}</b> <br />
      está disponível sob a licensa
      <a href="https://creativecommons.org/licenses/by/4.0/legalcode.pt">
        Atribuição 4.0 Internacional
      </a>
    </div>
  </div>


</footer>


    )
  }
}

export default Footer
