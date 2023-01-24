// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './css/Info.css'
import IOYOG from './assets/IOYOG.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faLinkedIn } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)

function Info() {

  return (
    <div className='info'>
    <div className="ioyog-wrapper">
      <img src={IOYOG} alt="IOYOG" className='ioyog'/>
    </div>
    <div className="info-desc">
        <h1>Iori Yogurt</h1>
        <h4>Frontend Developer / Yogurt Freak</h4>
        <a href='https://yoriss67.github.io/Portfolio/' target='_blank' rel="noopener noreferrer">yoriss67.website</a>
    </div>

    <div className="info-links">
            <a href="mailto:iori730002204294@gmail.com" target='_blank' rel="noopener noreferrer" className="info-links-item email  mailtoui">
            <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            <p>Email</p>
            </a>
        <a href="https://www.linkedin.com/in/iori-kawano-131a4122a/" target='_blank' rel="noopener noreferrer" className="info-links-item linkedin">
          <FontAwesomeIcon icon={faLinkedin}  className='icon'/>
          <p>LinkedIn</p>
        </a>
    </div>
</div>
  )
}

export default Info
