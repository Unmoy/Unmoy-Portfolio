import React from "react";
import "./Overview.css";
import Workedon from "../Workedon/Workedon";
const overview = [
  {
    id: 1,
    name: "BYTEFIX",
    description:
      "A servicing website built for easy ordering of any services as required by the customer ,with admin panel authentication made for securing and managing data.",
  },
  {
    id: 2,
    name: "WINDWILL LIBRARY",
    description:
      "A online book store for people who love to read books and buy online.",
  },
  {
    id: 3,
    name: "TRAVELOCITY",
    description:
      "An online ticket selling web designed for easier user interface for the users. In here user can choose their desired vehicle and choose a pick and end location and date of the journey.",
  },
];
const Overview = () => {
  return (
    <div className="overview-container" id="overview">
      <div className="container ">
        <div className="row ">
          <div className="overview-heading">
            <h5>Here are some projects i worked on</h5>
          </div>
          {overview.map((project) => (
            <Workedon key={project.id} project={project}></Workedon>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
