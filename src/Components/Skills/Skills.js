import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div class="container skill-vessel">
        <div class="row">
          <div class="col-md-3 ">
            <h5 className="text-center text-white mt-5 mb-5">HTML</h5>
            <div class="progress-bar-html">
              <h2>90%</h2>
            </div>
          </div>
          <div class="col-md-3">
            <h5 className="text-center text-white mt-5 mb-5">REACT JS</h5>
            <div class="progress-bar-react">
              <h2>80%</h2>
            </div>
          </div>

          <div class="col-md-3">
            <h5 className="text-center text-white mt-5 mb-5">CSS</h5>
            <div class="progress-bar-css">
              <h2>90%</h2>
            </div>
          </div>
          <div class="col-md-3">
            <h5 className="text-center text-white mt-5 mb-5">JAVASCRIPT</h5>
            <div class="progress-bar-js">
              <h2>70%</h2>
            </div>
          </div>
          <div class="col-md-3">
            <h5 className="text-center text-white mt-5 mb-5">REDUX</h5>
            <div class="progress-bar-redux">
              <h2>50%</h2>
            </div>
          </div>
          <div class="col-md-3">
            <h5 className="text-center text-white mt-5 mb-5">EXPRESS JS</h5>
            <div class="progress-bar-express">
              <h2>60%</h2>
            </div>
          </div>
          <div class="col-md-3">
            <h5 className="text-center text-white mt-5 mb-5">MONGO DB</h5>
            <div class="progress-bar-mongo">
              <h2>60%</h2>
            </div>
          </div>
          <div class="col-md-3 skill-box">
            <h5 className="text-center text-white mt-5 mb-5">BOOTSTRAP</h5>
            <div class="progress-bar-bootstrap">
              <h2>80%</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
