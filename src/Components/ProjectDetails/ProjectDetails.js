import React from "react";
import "./ProjectDetails.css";

const ProjectDetails = ({ project }) => {
  console.log(project);
  const { live, code, name, description } = project;

  return (
    <div className="col-md-6">
      <div class="card mt-3 carded" style={{ width: "25rem" }}>
        <img src={project.image} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>

          <p class="card-text">{description}</p>
          <div className="text-center">
            <a
              href={live}
              target="_blank"
              class="card-link text-decoration-none links"
            >
              Website
            </a>
            <a
              href={code}
              target="_blank"
              class="card-link text-decoration-none links"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
