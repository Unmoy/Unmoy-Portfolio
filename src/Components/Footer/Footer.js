import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        height: "70px",
        color: "white",
        fontFamily: "Railway",
        fontSize: "20px",
        textAlign: "center",
        padding: "10px",
        background: "black",
      }}
      className="text-center p-2 bg-dark "
    >
      <p>
        &copy;
        {new Date().getFullYear()} All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
