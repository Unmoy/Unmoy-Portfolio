import React from "react";
import "./MainHome.css";
import About from "../About/About";
import Home from "../Home/Home";
import Overview from "../Overview/Overview";
import ContactCard from "../Contacts/ContactCard";

const MainHome = () => {
  return (
    <>
      <Home></Home>
      {/* <About></About> */}
      <Overview />
      <ContactCard />
    </>
  );
};

export default MainHome;
