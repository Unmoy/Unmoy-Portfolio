import React from "react";
import "./Footer.css";
import AnalogClock from "analog-clock-react";
// Social Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebookF,
  faGithub,
  faGooglePlusG,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
let options = {
  width: "70px",
  border: true,
  borderColor: "#fff",
  baseColor: "#000000",
  centerColor: "#000000",
  centerBorderColor: "#ffffff",
  handColors: {
    second: "#FF0000",
    minute: "#ffffff",
    hour: "#ffffff",
  },
};
const Footer = () => {
  return (
    <section className="footer_container">
      <h1 className="footer_header">Unmoy Biswas</h1>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-4">
            <div className="footer_col_1">
              <span>
                <p>unmoyb@gmail.com</p>
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer_col_2">
              <blockquote className="blockquote_wrapper">
                <p className="blockquote_text">
                  Creativity is the world's greatest weapon.It always wins.
                </p>
                <div className="blockquote_text_credit">
                  <a href="https://g.co/kgs/GDjNsn">Mimi Valdés</a>
                </div>
              </blockquote>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer_col_3">
              <div className="clock">
                <AnalogClock {...options} />
              </div>
              <div className="footer_content">
                <h6>+880 1676 468 090</h6>
                <p>Chittagong,Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
