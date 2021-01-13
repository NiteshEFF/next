import React from "react";
import Link from 'next/link';

const Nav =()=> (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" datatoggle="collapse" datatarget="#navbarResponsive" ariacontrols="navbarResponsive" ariaexpanded="false" arialabel="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link href="/">
            <a className="nav-link">Home
              <span className="sr-only">(current)</span>
            </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
            <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/services">
            <a className="nav-link">Services</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
            <a className="nav-link">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Nav;