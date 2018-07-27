import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import cc from '../assets/cc.svg'
import by from '../assets/by.svg'
import gh from '../assets/github-mark-small-black.svg'
import fb from '../assets/F_icon-black.svg'
import ig from '../assets/instagram-black.svg'
import tw from '../assets/Twitter-black.svg'
import rss from '../assets/rss-symbol.svg'

import { rhythm } from '../utils/typography'
import styles from "../css/style.module.css"

class Footer extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteTitle = this.props.siteTitle;
    return (

<footer>

  <div /* LCD Links */
    className={styles.lcdlinks}
    style={{display: 'flex', justifyContent: 'center'}}
  >
    <li><a href='https://lcdporto.org' title='Website' target='_blank'><b>LCD Porto</b></a></li>
    <li><a href='https://github.com/lcdporto/' target='_blank'><img src={gh} /></a></li>
    <li><a href='https://facebook.com/lcdporto/' target='_blank'><img src={fb} /></a></li>
    <li><a href='https://www.instagram.com/lcdporto/' target='_blank'><img src={ig} /></a></li>
    <li><a href='https://twitter.com/lcdporto/' target='_blank'><img src={tw} /></a></li>
    <li><Link to='rss.xml'><img src={rss} /></Link></li>
  </div /* /LCD Links */>


  <div /* cc license */
    className={styles.cc}
    style={{display: 'flex', justifyContent: 'center'}}
  >
    <a href="https://creativecommons.org/licenses/by/4.0/legalcode.pt">
      <img src={cc} />
      <img src={by} />
    </a>
    <a href="https://creativecommons.org/licenses/by/4.0/legalcode.pt">
      A não ser que explicitamente indicado o <b>{siteTitle}</b> está
      disponível sob a licensa Atribuição 4.0 Internacional
    </a>
  </div /* /cc license */ >


</footer>


    )
  }
}

export default Footer
