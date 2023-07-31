import './App.css';
import LogoImage from "./logo.jpeg";
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';

import HomePage from "./HomePage";
import Resume from "./ResumePage";
import Contact from "./ContactPage";
import CsPortfolio from "./CS-Portfolio";
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
      <header className = "parent-header">
        <div className = "image-div inline-div">
          <NavLink to = "/" className = "link-style" id = "home-link">
            <img src = {LogoImage} width = "100%" height = "100%"></img> 
          </NavLink>
        </div>
        <div className = "list-div inline-div">
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
        </div>
      </header>

      <div className = "header-content-separator">
        <hr className = "separator"></hr>
      </div>

      <Routes>
            <Route exact path = "/" element = {<HomePage />} />
            <Route path = "/about" element = {<AboutPage />} />
            <Route path = "/cs_portfolio" element = {<CsPortfolio/>} />
            <Route path = "/resume" element = {<Resume/>}/>
            <Route path = "/contact" component = {<Contact/>} />
          </Routes>
    </Router>
  );
}

export default App;
