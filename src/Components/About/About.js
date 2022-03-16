import React from "react";
import me from "../../images/my-image1.jpg";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about_section">
      <div className="about_heading"></div>
      <div className="about_container container d-flex justify-content-center flex-column">
        <div className="about_content row">
          <div className="col-md-6 m-auto about_con ">
            <div className="about_sub_heading">
              <span>Who M I?</span>
            </div>
            <p>
              Hello! My name is Unmoy and I love building things for the
              internet. I am a web devloper currently living in bangladesh. I
              have serious passion for UI effects, animations, and creating
              intuitive ,dynamic user experience. Although I focus on both
              frontend and backend web development. My favorite development
              stack at the moment is MongoDB, Express, React, Node. Fan of NBA ,
              outdoor activities ,TV series and fictional books.
            </p>
            <p>
              Whether it’s creating servers in Node, connecting to MongoDB
              databases or designing user experiences while still maintaining a
              consistent brand experience I will bring your ideas to life.
            </p>
            <div className="about-me">
              <span>
                <span style={{ color: "#7d7789", marginRight: "5px" }}>
                  <FontAwesomeIcon className="custom-icon" icon={faUser} />
                  Name:
                </span>
                Unmoy Biswas
              </span>
              <span>
                <span
                  style={{
                    color: "#7d7789",
                    marginLeft: "10px",
                    marginRight: "5px",
                  }}
                >
                  <FontAwesomeIcon className="custom-icon" icon={faEnvelope} />
                  Email:
                </span>
                unmoyb@gmail.com
              </span>
            </div>
            <a
              href="https://drive.google.com/file/d/1rc63_G5IDxAIki9ibuMzNY11vCOs4QYA/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" class="rounded-pill custom-btn">
                DOWNLOAD <strong style={{ color: "#e5be55" }}>CV</strong>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
