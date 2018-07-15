import React from 'react'

import cc from '../assets/cc.svg'
import by from '../assets/by.svg'

import { rhythm } from '../utils/typography'
import styles from "../css/style.module.css"

class Footer extends React.Component {
  render() {
    return (

<footer>
  <div /* LCD Links */
    style={{
      display: 'flex',
    }}
  >
    <a href='https://lcdporto.org'>LCD Porto</a>
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
      A não ser que explicitamente indicado o <b>Blog LCD Porto</b> <br />
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
