import React from "react";
import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faSchool,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
const Education = () => {
  return (
    <div>
      <div class="timeline">
        <div class="t_box left">
          <div class="date1">2018 - Present</div>
          <FontAwesomeIcon icon={faGraduationCap} className="edu_icon" />
          <div class="content">
            <h2>Bachelor of Science in Software Engineering</h2>
            <p>Yunnan University</p>
            <h6>Kunming,China</h6>
          </div>
        </div>
        <div class="t_box right">
          <div class="date">2018</div>
          <FontAwesomeIcon icon={faUserGraduate} className="edu_icon" />
          <div class="content">
            <h2>Higher Secondary Certificate</h2>
            <p>Aditya Academy</p>
            <h6>Calcutta,India</h6>
          </div>
        </div>
        <div class="t_box left">
          <div class="date">2016</div>
          <FontAwesomeIcon icon={faSchool} className="edu_icon" />
          <div class="content">
            <h2>Secondary School Certificate</h2>
            <p>Aditya Academy</p>
            <h6>Calcutta,India</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
