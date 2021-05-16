import React from "react";
import Skills from "../Skills/Skills";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="d-flex flex-column justify-content-center resume-container">
      <h1 className="heading">Resume</h1>
      <div
        class="card m-5 card-shadow"
        style={{ maxWidth: "640px", height: "300px" }}
      >
        <h5 className="mt-3 mx-5 text-success">ABOUT</h5>
        <div class="row g-0">
          <div class="col-md-4 mt-2 ms-auto text-center edu"></div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="card-content">
                <p>
                  Junior web developer able to build a web presence from
                  scratch, knowledgeable in user interface, testing and
                  debugging processes.Highly self-motivated and adaptable in
                  learning and understanding new technologies.Able to
                  effectively self-manage during independent projects, as well
                  as collaborate in a team setting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="card m-5 card-shadow"
        style={{ maxWidth: "640px", height: "300px" }}
      >
        <h5 className="mt-3 mx-5 text-success">EDUCATION</h5>
        <div class="row g-0">
          <div class="col-md-4 mt-2 ms-auto text-center edu">
            <p style={{ color: "blue" }}>2018-Present</p>
            <p>Yunnan University</p>
            <p>Kunming,China</p>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
                I am currently studying software enginerring at this
                institution. Here i have learned and experienced many.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Skills></Skills>
    </section>
  );
};

export default Resume;
