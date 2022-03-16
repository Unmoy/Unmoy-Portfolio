import React from "react";
import "./Overview.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import {
  faCodepen,
  faConnectdevelop,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    id: 1,
    name: "Front End Development",
    description:
      "You want a website. It must look great and you want it to work... All the time. Well, that's why I'm here! I help you by designing, building, and hosting a beautiful site that'll grow your business. Promise.",
    icon: faDesktop,
  },
  {
    id: 2,
    name: "Backend Development",
    description:
      "I have acquired skill and knowledge in back-end web technologies such as Node, Express and MongoDB to create multi-functional web portals from content management systems to full-stack e-commerce solutions,and beyond.",
    icon: faCodepen,
  },
  {
    id: 3,
    name: "Search Engine Optimization",
    description:
      "An impressive Google ranking means more people see your fantastic blog post or revolutionary product. I ensure you have a leading ranking with best SEO practices. Give your content the audience it deserves!",
    icon: faConnectdevelop,
  },
  {
    id: 4,
    name: "Mobile App Development",
    description:
      "I have been learning and working closely with building Android and iOS apps, using a unique hybrid methodology that integrates web technologies and native app development - combining the best elements of both worlds.",
    icon: faGitlab,
  },
];
const Overview = () => {
  return (
    <div className="overview_container">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="services_header">
              <h2>Services For You</h2>
              <span></span>
              <p>Somethings I provide</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row g-3">
              {services.map((service, index) => {
                return <ServiceCard key={index} service={service} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
