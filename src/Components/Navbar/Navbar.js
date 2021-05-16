import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const backgroundChange = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", backgroundChange);
  return (
    <nav
      className={
        navbar
          ? "navbar navbar-expand-lg navbar-light active mx-auto"
          : "navbar navbar-expand-lg navbar-light"
      }
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a className="nav-link text-white" aria-current="page" href="/">
                <p className="custom-link">Home</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white ms-3" href="/projects">
                <p className="custom-link">Projects</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white ms-3" href="/contact">
                <p className="custom-link">Contacts</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white ms-3" href="/blogs">
                <p className="custom-link">Blogs</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white ms-3" href="/resume">
                <p className="custom-link">Resume</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
