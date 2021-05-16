import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import Navbar from "../Navbar/Navbar";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div>
      <section className="home-container">
        <div className="overlay">
          <Navbar></Navbar>
          <div className="self-details">
            <div className="col-md-12 pb-5">
              <div className="avatar"></div>
              <div className="info">
                <h1>
                  <span style={{ color: "#de1c63" }}>U</span>nmoy
                  <span style={{ color: "#de1c63", marginLeft: "2px" }}>B</span>
                  iswas
                </h1>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "<span style='font-size:25px' >WEB DEVELOPER</span>"
                      )
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString(
                        "<span style='font-size:25px'> UI/UX DESIGNER </span>"
                      )
                      .start();
                  }}
                />
              </div>
              <div className="gotosection">
                <Link to="overview" smooth={true} duration={1000}>
                  <FontAwesomeIcon className="font" icon={faAngleDoubleDown} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
