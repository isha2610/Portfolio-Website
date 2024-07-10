import React from "react";
import { Link } from "react-router-dom";
import toggleTheme from "./PageThemeChange";
// import { useState } from "react";

// const theme = useState(PageThemeChange.detectSystemTheme());


function Navbar() {
  return (
      <nav class="navbar sticky-top bg-body-tertiary navbar-right">
      <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-right">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">ISHA</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item icon-link-hover">
          <Link class="nav-link" to="/experience">Experience</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/learnings">Learnings</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/certifications">Certifications</Link>
        </li>
      </ul>
      {/* <div class="form-check form-switch" >
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleTheme}/>
      <p>Current Theme: {theme}</p>
      {/* Your other components and content 
    </div> */}
    </div>
    </div>
</nav>
      </nav>
  );
}

export default Navbar;
