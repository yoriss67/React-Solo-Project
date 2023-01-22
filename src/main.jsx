import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <div className='container'> 
  <Info />
    <About />
    <Interests />
    <Footer />
    </div>
    </>
)
