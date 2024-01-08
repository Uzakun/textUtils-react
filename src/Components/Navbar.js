import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <Link className="nav-link" to="/">Home</Link> */}
            <a className="nav-link" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li> */}
        </ul>
        <div className={`form-check form-switch  mx-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input " type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable DarkMode</label>
        </div>

      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Title Name",
  about: "about"
}

