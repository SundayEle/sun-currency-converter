import React from 'react'
import "./nav-bar.scss"
import my_logo from "../../../public/1.png"

function Navbar() {
  return (
    <nav>
      
        <img src={my_logo} alt="Logo" />
        <p>Sun Currency Converter</p>
      
     </nav>
  )
}

export default Navbar