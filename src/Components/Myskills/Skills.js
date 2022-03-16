import React from "react";
import "./Skills.css";
// skills logo imports
import sass from "../../images/sass32.png";
import html from "../../images/html5.png";
import css from "../../images/css3.png";
import react from "../../images/react.png";
import bootstrap from "../../images/bootstrap.png";
import js from "../../images/javascript.png";
import node from "../../images/node-js.png";
import redux from "../../images/redux.png";
import mongo from "../../images/m3.png";
const Skills = () => {
  return (
    <section className="container">
      <div class="skill-bars row">
        <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
          <div class="bar">
            <div class="info">
              <span>HTML</span>
            </div>
            <div class="progress-line html">
              <span>
                <img src={html} alt="html" />
              </span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>CSS</span>
            </div>
            <div class="progress-line css">
              <span>
                <img src={css} alt="css" />
              </span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>React</span>
            </div>
            <div class="progress-line react">
              <span>
                <img src={react} alt="react" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
          <div class="bar">
            <div class="info">
              <span>Bootstrap</span>
            </div>
            <div class="progress-line bootstrap">
              <span>
                <img src={bootstrap} alt="bootstrap" />
              </span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>Sass</span>
            </div>
            <div class="progress-line sass">
              <span>
                <img src={sass} alt="sass" />
              </span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>Javascript</span>
            </div>
            <div class="progress-line js">
              <span>
                <img src={js} alt="js" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
          <div class="bar">
            <div class="info">
              <span>Node JS</span>
            </div>
            <div class="progress-line node">
              <span>
                <img src={node} alt="node" />
              </span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>MongoDB</span>
            </div>
            <div class="progress-line mongo">
              <span>
                <img src={mongo} alt="mongodb" />
              </span>
            </div>
          </div>
          <div class="bar">
            <div class="info">
              <span>Redux</span>
            </div>
            <div class="progress-line redux">
              <span>
                <img src={redux} alt="redux" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
