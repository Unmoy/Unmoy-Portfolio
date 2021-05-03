import React from "react";
import "./Workedon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Workedon = ({ project }) => {
  console.log(project);
  const { name, description } = project;
  return (
    <div
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
