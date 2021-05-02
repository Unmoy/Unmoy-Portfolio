import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light sticky-top">
        <div class="container-fluid w-75 navigation sticky-top">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link ms-5 text-white" href="/projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5 text-white" href="/resume">
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5 text-white" href="/contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5 text-white" href="/blogs">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
