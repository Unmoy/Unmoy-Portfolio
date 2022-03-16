import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HamComponent from "./Hamburger";
import Hamburger from "hamburger-react";
import "./App.scss";
const Navbar = () => {
  const location = useLocation();

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setState({ clicked: false, menuName: "Menu" });
  }, [location]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header className={state.clicked ? "sticky-top" : null}>
      <div className="container">
        <div className="wrapper ">
          <div className="inner-header ">
            <div className="logo">
              <Link to="/">UNMOY.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
                <Hamburger
                  toggled={state.clicked}
                  toggle={state.initial}
                  direction="right"
                  size={18}
                  hideOutline={false}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <HamComponent state={state} />
    </header>
  );
};

export default Navbar;
