import React from "react";
import "./ContactCard.css";

const ContactCard = () => {
  return (
    <div className="contact_wrapper d-flex justify-content-center align-items-center">
      <div className="container text-center">
        <div className="contact_content">
          <p>
            I am available <br />
            for working
          </p>
          <h3>
            <a href="/contact">
              Connect
              <br /> Me
            </a>
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 17 17"
              style={{ height: "2em" }}
            >
              <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z"></path>
            </svg>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
