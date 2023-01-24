// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './css/Footer.css'

// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'


function Footer() {

  return (
<footer>
<a target='_blank' href="https://twitter.com/iori73wsy">
<FontAwesomeIcon icon={faSquareTwitter}  className='icon'/>
</a>
<a target='_blank' href="https://www.facebook.com/ioriii/">
<FontAwesomeIcon icon={faSquareFacebook} className='icon' />
</a>
<a target='_blank' href="https://www.instagram.com/ioriiii_13/">
<FontAwesomeIcon icon={faSquareInstagram} className='icon'/>
</a>
<a target='_blank' href="https://github.com/yoriss67">
<FontAwesomeIcon icon={faSquareGithub} className='icon hover:text-gray-500'/>
</a>
</footer>
  )
}

const root = document.getElementById('root')


export default Footer
