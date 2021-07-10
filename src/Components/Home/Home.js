import React from "react";
import "./Home.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-scroll";
import Navbar from "../Navbar/Navbar";
// import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section className="home-section">
      <Navbar></Navbar>
      <div className="info-section">
        <h1 className="name-highlight">Unmoy Biswas</h1>
        <p className="type-highlight">Web Developer</p>
      </div>
    </section>
  );
};

export default Home;
