import React from "react";
import "./ProjectDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProjectDetails = ({ project }) => {
  const { live, code, name, description, image } = project;

  return (
    <>
      <div className="projects-carrier">
        <div className="project-box">
          <span></span>
          <div className="vessel">
            <div className="picture">
              <img src={image} alt="" />
            </div>
            <div className="text">
              <h4>{name}</h4>
              <p>{description}</p>
              <div className="links">
                <a href={code} target="_blank">
                  <FontAwesomeIcon className="redirect-link" icon={faGithub} />
                </a>
                <a href={live} target="_blank">
                  <FontAwesomeIcon className="redirect-link" icon={faLink} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
