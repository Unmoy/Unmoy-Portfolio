import React, { useEffect } from "react";
import "./Workedon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Workedon = ({ project }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { name, description } = project;
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="3000"
      class="project-container col-md-4"
      ontouchstart="this.classList.toggle('hover');"
    >
      <div class="card-container ">
        <div class="card_front">
          <h1 class="card-symbol">
            <FontAwesomeIcon style={{ fontSize: "12rem" }} icon={faCode} />
          </h1>
        </div>

        <div class="card_back p-2">
          <h5
            style={{
              textAlign: "center",
              fontFamily: "Roboto",
            }}
          >
            {name}
          </h5>
          <div class="card-text">
            <p>{description}</p>
            <a href="/projects">
              <button className="btn btn-dark readbtn">Read More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workedon;
