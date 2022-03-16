import React from "react";
import "./Tools.css";
import vscode from "../../images/vscode.png";
import netlify from "../../images/netlify.png";
import heroku from "../../images/heroku.png";
import firebase from "../../images/firebase.png";
import github from "../../images/github.png";
const Tools = () => {
  return (
    <section className="container">
      <ul class="tools_bar row d-flex justify-content-evenly align-items-center g-3">
        <li className="tool">
          <div>
            <img src={github} alt="github" />
          </div>
          <span>Github</span>
        </li>
        <li className="tool">
          <div>
            <img src={firebase} alt="firebase" />
          </div>
          <span>Firebase</span>
        </li>
        <li className="tool">
          <div>
            <img src={netlify} alt="netlify" />
          </div>
          <span>Netlify</span>
        </li>
        <li className="tool">
          <div>
            <img src={heroku} alt="heroku" />
          </div>
          <span>Heroku</span>
        </li>
        <li className="tool">
          <div>
            <img src={vscode} alt="vscode" />
          </div>
          <span>Vs Code</span>
        </li>
      </ul>
    </section>
  );
};

export default Tools;
