import React from "react";
import "./Home.css";
import Me from "../../images/me.jpg";
const Home = () => {
  return (
    <section className="home_section">
      <div className="container">
        <div className="row d-flex justify-content-center header_row">
          <div className="col-md-5 header_image">
            <img src={Me} alt="myself" />
          </div>
          <div className="col-md-7 d-flex justify-content-center align-items-center">
            <div className="header_content">
              <h3>Unmoy Biswas</h3>
              <span className="bar"></span>
              <h4>Web Developer</h4>
              <div>
                <a href="/contact">Connect Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
