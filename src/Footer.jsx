// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './css/Footer.css'

// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'


function Footer() {

  return (
<footer>
<a href="">
<FontAwesomeIcon icon={faSquareTwitter}  className='icon'/>
</a>
<a href="">
<FontAwesomeIcon icon={faSquareFacebook} className='icon' />
</a>
<a href="">
<FontAwesomeIcon icon={faSquareInstagram} className='icon'/>
</a>
<a href="">
<FontAwesomeIcon icon={faSquareGithub} className='icon hover:text-gray-500'/>
</a>
</footer>
  )
}

const root = document.getElementById('root')


export default Footer
