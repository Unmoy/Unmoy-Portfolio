import React from "react";
import me from "../../images/my-image1.jpg";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about-container ">
      <div className="container-fluid row d-flex justify-content-center about-me-logo">
        <div
          data-aos="zoom-out-right"
          data-aos-duration="3000"
          className="col-md-4"
        >
          <div className="text-center my-responsive-img">
            <img src={me} className="my-img" alt="" />
          </div>
        </div>
        <div
          data-aos="zoom-out-left"
          data-aos-duration="3000"
          className="col-md-4 text-secondary about-me-div"
        >
          <p className="who-me">WHO AM I?</p>
          <li className="about-heading">ABOUT ME</li>
          <p className="para">
            I have building remarkable UX/UI designes and web development for
            and
            <span style={{ color: "#e5be55", fontFamily: "Roboto" }}>
              tried
            </span>
            to design according to the best trends.
          </p>
          <p className="para">
            My main goal is how to create a timely product and it will help the
            busiess to reach the peak of developement as a unique example in the
            future .I prioritized to deign model because it is one of the best
            ways to run a company quickly and efficiently.
          </p>
          <div className="about-me">
            <span>
              <span style={{ color: "#e5be55", marginRight: "5px" }}>
                {" "}
                <FontAwesomeIcon className="custom-icon" icon={faUser} />
                Name:
              </span>
              Unmoy Biswas
            </span>
            <span>
              <span
                style={{
                  color: "#e5be55",
                  marginLeft: "10px",
                  marginRight: "5px",
                }}
              >
                <FontAwesomeIcon className="custom-icon" icon={faEnvelope} />
                Email:
              </span>
              u_biswas@aol.com
            </span>
          </div>
          <a
            href="https://drive.google.com/file/d/1rc63_G5IDxAIki9ibuMzNY11vCOs4QYA/view?usp=sharing"
            target="_blank"
          >
            <button type="button" class="rounded-pill custom-btn">
              DOWNLOAD <strong style={{ color: "#e5be55" }}>CV</strong>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
