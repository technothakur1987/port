import React from 'react'
import { Link } from "react-router-dom";

export default function Header(props) {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg mynav">
        <div className="container-fluid ">
          <Link className="navbar-brand navbarFontcolor fw-bolder fs-1 logohover glowanimation" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white ">X</span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link navbarFontcolor " aria-current="page" to="/about">{props.title2}</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link navbarFontcolor " aria-current="page" to="/worksamples">{props.title3}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbarFontcolor " aria-current="page" to="/downloadresume">{props.title4}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbarFontcolor " aria-current="page" to="/contact">{props.title5}</Link>
              </li>




            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}
