import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contacts/Contact";
import Projects from "./Components/Projects/Projects";
import Myskills from "./Components/Myskills/Myskills";
// import Blogs from "./Components/Blogs/Blogs";
import MainHome from "./Components/MainHome/MainHome";
import Navbar from "./Components/Navigation/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainHome />} />
        <Route exact path="/skills" element={<Myskills />} />
        <Route exact path="/work" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
