import React from "react";
import "./Myskills.css";
import Tools from "./Tools";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  return (
    <>
      <section className="skills_container d-flex align-items-center flex-column">
        <div className="skills_header">
          <h1>My Skills</h1>
          <p>
            I always try to stay upto date with the latest technology trending
            in the market. I am a very hard working person who is ready to learn
            and grow.
          </p>
        </div>
        <Skills />
        <div className="tools_header">
          <h1>Other General Tools I Use</h1>
        </div>
        <Tools />
        <div className="education_header">
          <h1>Education</h1>
        </div>
        <Education />
      </section>
    </>
  );
};

export default Resume;
