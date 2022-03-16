import React from "react";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import bytefix from "../../images/Bytefix.jpg";
import furniture from "../../images/furniture.jpg";
import transport from "../../images/transport.jpg";
import library from "../../images/library.jpg";
import league from "../../images/league.jpg";
import "./Projects.css";
import "../././ProjectDetails/ProjectDetails.css";
const projects = [
  {
    id: 1,
    name: "BYTEFIX",
    image: bytefix,
    description:
      "Developed a full-stack website where users can order necessary services of their choice.",
    live: "https://bytefix-9f0e7.web.app",
    code: "https://github.com/Unmoy/ByteFix-client",
    tools: ["VS Code", "React", "Express", "Node"],
  },
  {
    id: 2,
    name: "WINDWILL LIBRARY",
    image: library,
    description:
      "Implemented an online book store for individuals who love to read books and buy online.",
    live: "https://windwill-library.web.app ",
    code: "https://github.com/Unmoy/Windwill-Library-Client",
    tools: ["VS Code", "React", "HTML", "CSS"],
  },
  {
    id: 3,
    name: "TRAVELOCITY",
    image: transport,
    description:
      "An online ticket selling web designed for easier user interface.In here user can choose their desired vehicle and choose a pick and end location and date of the journey.Used Google Maps API for easier user interaction.Implemented login method with firebase for securing access to the website.",
    live: "https://travelocity-5fea9.web.app",
    code: "https://github.com/Unmoy/Travelocity",
    tools: ["VS Code", "React-Router", "React-Bootstrap", "Firebase"],
  },
  {
    id: 4,
    name: "UMBRELLA FURNITURES",
    image: furniture,
    description:
      "Furnitures of best qualities and gorgeous house interiors for the people with exclusive offers ",
    live: "https://umbrella-b7187.web.app/",
    code: "https://github.com/Unmoy/Umbrella",
    tools: ["VS Code", "React", "HTML", "Netlify"],
  },
  {
    id: 5,
    name: "PREMIER LEAGUE",
    image: league,
    description:
      "Clients can look for thier favourite team details using this amazing website,used some API for calling the team details, and added some dynamic features to make it elegant and user friendly",
    live: "https://604a41cfc16299178999ef76--kind-shaw-de68c3.netlify.app",
    code: "https://github.com/Porgramming-Hero-web-course/react-router-Unmoy",
    tools: ["VS Code", "React", "HTML", "CSS"],
  },
];

const Projects = () => {
  return (
    <div className="work_container">
      <h1 className="work_heading">Some Things I've Built</h1>
      <section className="projects">
        <div className="work">
          {projects.map((project) => (
            <ProjectDetails key={project.id} project={project}></ProjectDetails>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
