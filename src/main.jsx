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




// https://pisuke-code.com/chrome-mailto-not-working/
document.addEventListener("DOMContentLoaded", function() {
  if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js";
  document.body.appendChild(script);
  }
  });


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
