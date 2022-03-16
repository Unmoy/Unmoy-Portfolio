import React from "react";
import "./Blogs.css";
import Countdown from "react-countdown";
const Blogs = () => {
  return (
    <div className="blogs-vessel">
      <div className="counter">
        <p>Coming Soon...</p>
        <Countdown date={Date.now() + 16000000} />
      </div>
    </div>
  );
};

export default Blogs;
