import React from "react";
import Navbar from "../Navbar/Navbar";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import bytefix from "../../images/Bytefix.jpg";
import nba from "../../images/nba.jpg";
import transport from "../../images/transport.jpg";
import library from "../../images/library.jpg";
import league from "../../images/league.jpg";
import "./Projects.css";

const projects = [
  {
    id: 11,
    name: "BYTEFIX",
    image: bytefix,
    description:
      "Built a full stack website to allow users to order services of their required needs all at one place.Services can be booked by the users, also users can leave a review of their services which will be directly stored in our backend and admin can manage all the services and can change the status of a ordered service. admin can also make new admins for better coordination.Used- JavaScript, React.js, HTML/CSS.",
    live: "https://bytefix-9f0e7.web.app",
    code: "https://github.com/Porgramming-Hero-web-course/complete-website-client-Unmoy",
  },
  {
    id: 7,
    name: "NATIONAL BASKETBALL ASSOCIATION",
    image: nba,
    description:
      "User can make a their own team select player as they want .each player has his own values user can check the total credit to buy the players.Used: bootstrap,fontawesome react.js, HTML/CSS.",
    live: "https://condescending-ptolemy-6a840c.netlify.app",
    code: "https://github.com/Porgramming-Hero-web-course/simple-react-Unmoy",
  },
  {
    id: 9,
    name: "TRAVELOCITY",
    image: transport,
    description:
      "An online ticket selling web designed for easier user interface.In here user can choose their desired vehicle and choose a pick and end location and date of the journey.Used Google Maps API for easier user interaction.Implemented login method with firebase for securing access to the website.Used: React.js, react-router, react-bootstrap, firebase.",
    live: "https://travelocity-5fea9.web.app",
    code: "https://github.com/Porgramming-Hero-web-course/react-auth-Unmoy",
  },
  {
    id: 10,
    name: "WINDWILL LIBRARY",
    image: library,
    description:
      "A MERN project, to implement an online book store for the individuals who loves to read books and buy online,	Users can order a book from this website.	Login system is made by using firebase, react-router to navigate to different pages, bootstrap for UI.Incorporated API calls to several applications and stored data efficiently in our MongoDB backend.",
    live: "https://windwill-library.web.app ",
    code: "https://github.com/Unmoy/windwill-server",
  },
  {
    id: 8,
    name: "PREMIER LEAGUE",
    image: league,
    description:
      "Clients can look for thier favourite team details using this amazing website,used some API for calling the team details, and added some dynamic features to make it elegant and user friendly",
    live: " https://604a41cfc16299178999ef76--kind-shaw-de68c3.netlify.app ",
    code: " https://github.com/Porgramming-Hero-web-course/react-router-Unmoy",
  },
];

const Projects = () => {
  return (
    <div  style={{ backgroundColor: "#010119" }}>
      <Navbar></Navbar>
      <h1 className="heading">PROJECTS</h1>
      <hr style={{ color: "#de1c63", fontSize: "50px" }} />
      <div className=" container d-flex justify-content-center">
        <div className="w-75 row ">
          {projects.map((project) => (
            <ProjectDetails
             
              key={project.id}
              project={project}
            ></ProjectDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
