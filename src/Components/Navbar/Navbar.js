import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand ms-5" to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse set-right"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <Link className="nav-link mx-3" aria-current="page" to="/home">
              Home
            </Link>
            <Link className="nav-link mx-3" to="/projects">
              Projects
            </Link>
            <Link className="nav-link mx-3 " to="/contact">
              Contact
            </Link>
            <Link className="nav-link mx-3" to="/blogs">
              Blogs
            </Link>
            <Link className="nav-link mx-3" to="/skills">
              Skills
            </Link>
          </div>
        </div>
      </div>
    </nav>
    // <nav
    //   className={
    //     navbar
    //       ? "navbar navbar-expand-lg navbar-light active mx-auto"
    //       : "navbar navbar-expand-lg navbar-light"
    //   }
    // >
    //   <div class="container-fluid">
    //     <button
    //       class="navbar-toggler custom-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav mx-auto">
    //         <li class="nav-item">
    //           <a className="nav-link text-white" aria-current="page" href="/">
    //             <p className="custom-link">Home</p>
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link text-white ms-3" href="/projects">
    //             <p className="custom-link">Projects</p>
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link text-white ms-3" href="/contact">
    //             <p className="custom-link">Contacts</p>
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link text-white ms-3" href="/blogs">
    //             <p className="custom-link">Blogs</p>
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link text-white ms-3" href="/resume">
    //             <p className="custom-link">Resume</p>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
