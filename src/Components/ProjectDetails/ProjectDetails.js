import React from "react";
import "./ProjectDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
const ProjectDetails = ({ project }) => {
  const { id, live, code, name, description, image, tools } = project;
  console.log(tools);
  return (
    <div className="item">
      <div className="left">
        <div className="work_image">
          <img src={image} alt="work-img" />
        </div>
      </div>
      <div className="right">
        <div>
          <h2 className="project-title">
            Featured Project
            <span>{id}</span>
          </h2>
          <h3 className="project-sub-title">{name}</h3>
        </div>
        <p className="project-desc">{description}</p>
        <ul className="work_tools">
          {tools.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
        <div className="external_buttons">
          <span>
            <a href={code} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
          <span>
            <a href={live} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
