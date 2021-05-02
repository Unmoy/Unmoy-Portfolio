import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <section className="home-container">
        <div className="overlay">
          <div className="self-details">
            <div className="col-md-12 pb-5">
              <div className="avatar"></div>
              <div className="info">
                <h1 class="">Unmoy Biswas</h1>
                <h2>Web Designer</h2>
              </div>
              <div className="gotosection">
                <a href="#about">
                  <FontAwesomeIcon className="font" icon={faAngleDoubleDown} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Navbar></Navbar>
      <About></About>
    </div>
  );
};

export default Home;
