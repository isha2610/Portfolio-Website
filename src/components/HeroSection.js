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
  <span id="dpl-navbar-new-right-buttons" class="navbar-nav ms-auto d-flex flex-row px-4">
    <Link class="navbar-brand" to="/"><h3>ISHA</h3></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-4 mb-lg-0 ">
      
        <li class="nav-item px-4">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item px-4">
          <Link class="nav-link" to="/about">Portfolio</Link>
        </li>
        <li class="nav-item icon-link-hover px-2">
          <Link class="nav-link" to="/experience">Experience</Link>
        </li>
        <li class="nav-item px-2">
          <Link class="nav-link" to="/learnings">Learnings</Link>
        </li>
        <li class="nav-item px-2">
          <Link class="nav-link" to="/certifications">Certifications</Link>
        </li>
      </ul>
    </div>
    </span>
    </div>
</nav>
      </nav>
  );
}

export default Navbar;
