import React from "react";
import bytefix from "../../images/Bytefix.jpg";
import nba from "../../images/nba.jpg";
import transport from "../../images/transport.jpg";

import Workedon from "../Workedon/Workedon";
const overview = [
  {
    id: 11,
    name: "BYTEFIX",
    image: bytefix,
    description:
      "A servicing website built for easy ordering of any services as required by the customer ,with admin panel authentication made for securing and managing data.",
    live: "https://bytefix-9f0e7.web.app",
    code:
      "https://github.com/Porgramming-Hero-web-course/complete-website-client-Unmoy",
  },
  {
    id: 7,
    name: "NATIONAL BASKETBALL ASSOCIATION",
    image: nba,
    description:
      "User can make a their own team select player as they want .each player has his own values user can check the total credit to buy the players.",
    live: "https://condescending-ptolemy-6a840c.netlify.app",
    code: "https://github.com/Porgramming-Hero-web-course/simple-react-Unmoy",
  },
  {
    id: 9,
    name: "TRAVELOCITY",
    image: transport,
    description:
      "An online ticket selling web designed for easier user interface for the users. In here user can choose their desired vehicle and choose a pick and end location and date of the journey.",
    live: "https://travelocity-5fea9.web.app",
    code: "https://github.com/Porgramming-Hero-web-course/react-auth-Unmoy",
  },
];
const Overview = () => {
  return (
    <div style={{ height: "600px" }}>
      <h1
        style={{ textAlign: "center", fontFamily: "Roboto", marginTop: "5rem" }}
      >
        HERE ARE SOME PROJECTS I WORKED ON
      </h1>
      <div className="d-flex justify-content-center">
        <div className="w-75 row">
          {overview.map((project) => (
            <Workedon key={project.id} project={project}></Workedon>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
