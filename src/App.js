import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contacts/Contact";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import MainHome from "./Components/MainHome/MainHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <MainHome></MainHome>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/resume">
          <Resume></Resume>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route exact path="/">
          <MainHome></MainHome>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
