import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./mystyle.css"

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light background font fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand text-light font">NewsSite</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/home"><a className="nav-link text-light active size" aria-current="page">Home</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="/politics"><a className="nav-link text-light size" >Politics</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="/education"><a className="nav-link text-light size" >Education</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="/technology"><a className="nav-link text-light size">Technology</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="/sports"><a className="nav-link text-light size">Sports</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="/crime"><a className="nav-link text-light size">Crime</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="/jokes"><a className="nav-link text-light size">Jokes</a></Link>
                </li>
                <li className="nav-item">
                  <Link to="/entertainment"><a className="nav-link text-light size">Entertainment</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br></br>
        <br></br>
        <br></br>
      </>
    )
  }
}
