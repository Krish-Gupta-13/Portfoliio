import React from 'react'
// import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
    <div className="nav">
    <div className="leftn">
    <h1>PORTFOLIO</h1></div>
    <ul>
          <li className = "navli"> <a href ="#about">Home</a></li>
          <li className = "navli"> <a href ="#aboutme">About</a></li>
          <li className = "navli"> <a href="#skills">Skills</a></li>
          <li className = "navli"> <a href ="#projectss">Projects</a></li>
          <li className = "navli"> <a href ="#footer">Contact Me</a></li>
        </ul>
      </div>
    </div>
  )
}
