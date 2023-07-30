import './App.css';
import LogoImage from "./logo.jpeg";
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';

import HomePage from "./HomePage";
import Resume from "./ResumePage";
import Contact from "./ContactPage";
import CS_Portfolio from "./CS-Portfolio";
import AboutPage from "./AboutPage";

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <Router>
      <div className = "image-div inline-div">
        <NavLink to = "/" className = "link-style" id = "home-link">
          <img src = {LogoImage} width = "100%" height = "100%"></img>
        </NavLink>
      </div>
      <div className = "inline-div">
        <nav>
          <ul className = "list-style">
            <li>
              <NavLink to = "/" className = "link-style" id = "home-link">Home</NavLink>
            </li>
            <li>
              <NavLink to = "/about" className = "link-style" id = "about-page">About</NavLink>
            </li>
            <li>
              <NavLink to = "/cs_portfolio" className = "link-style">CS Portfolio</NavLink>
            </li>
            <li>
              <NavLink to = "/resume" className = "link-style">Resume</NavLink>
            </li>
            <li>
              <NavLink to = "/contact" className = "link-style">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path = "/" element = {<HomePage />} />
          <Route path = "/about" element = {<AboutPage />} />
          <Route path = "/cs_portfolio" element = {<CS_Portfolio/>} />
          <Route path = "/resume" element = {<Resume/>}/>
          <Route path = "/contact" component = {<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
