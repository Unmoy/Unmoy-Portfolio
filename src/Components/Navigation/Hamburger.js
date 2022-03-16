import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from "./Animations";

const socialLinks = [
  {
    name: "Facebook",
    color: "#4267B2",
    to: "https://www.facebook.com/unmoy.biswas/",
  },
  {
    name: "Instagram",
    color:
      "linear-gradient(45deg, #405de6, #5851db, #833ab4,#c13584,#e1306c,#fd1d1d)",
    to: "https://www.instagram.com/claudia_cloudss/",
  },
  { name: "GitHub", color: "#171515", to: "https://github.com/Unmoy" },
  {
    name: "LinkedIn",
    color: "#0072b1",
    to: "https://www.linkedin.com/in/unmoy/",
  },
  {
    name: "Email",
    color: "linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335)",
    to: "mailto: unmoyb@gmail.com",
  },
];

const Hamburger = ({ state }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      staggerRevealClose(reveal2, reveal1);

      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });

      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        width: "50%",
      });
      staggerReveal(reveal1, reveal2);
      staggerText(line1, line2, line3, line4);
    }
  }, [state]);

  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (reveal2 = el)} className="menu-layer">
        <div
          ref={(el) => (cityBackground = el)}
          className="menu-city-background"
        ></div>
        <div className="container_nav">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to="/skills"
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line3 = el)}
                      to="/work"
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line4 = el)}
                      to="/contact"
                    >
                      Connect Me
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="social_buttons">
                Social:
                {socialLinks.map((el, index) => (
                  <span key={index}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={el.to}
                      onMouseEnter={() => handleCity(el.color, cityBackground)}
                      onMouseOut={() => handleCityReturn(cityBackground)}
                    >
                      {el.name}
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
