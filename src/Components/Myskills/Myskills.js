import React from "react";
import Skills from "../Skills/Skills";
import "./Myskills.css";
import Navbar from "../Navbar/Navbar";
const Resume = () => {
  return (
    <>
      <section className="resume-container">
        <Navbar></Navbar>
        <div>
          <h1 className="skills-heading">My skills</h1>
        </div>
        <Skills></Skills>
      </section>
    </>
  );
};

export default Resume;
