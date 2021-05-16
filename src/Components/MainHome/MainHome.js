import React, { useEffect, useState } from "react";
import "./MainHome.css";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Overview from "../Overview/Overview";

const MainHome = () => {
  const [done, setdone] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setdone(true);
    }, 1000);
  }, []);

  return (
    <>
      {!done ? (
        <div className="loading front">
          <div class="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>
          <Home></Home>
          <About></About>
          <Overview></Overview>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default MainHome;
