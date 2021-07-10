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
      className="text-center p-2 "
    >
      <p>
        Copyright &copy;
        {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
};

export default Footer;
