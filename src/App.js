import './App.css';
import LogoImage from "./logo.jpeg";
import LinkedInLogo from "./LI-In-Bug.png";
import InstagramLogo from "./Instagram_Glyph_Gradient.png";
import GithubLogo from "./github-mark.png";
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';

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
        <div className = "image-div">
          <NavLink to = "/" className = "link-style" id = "home-link">
            <img src = {LogoImage} width = "100%" height = "100%" alt = "My Logo"></img> 
          </NavLink>
        </div>
        <div className = "list-div">
          <nav>
            <ul className = "list-style">
              <li>
                <NavLink to = "/" className = "link-style" id = "home-link">Home</NavLink>
              </li>
              <li>
                <NavLink to = "/about" className = "link-style" id = "about-page">About</NavLink>
              </li>
              <li>
                <NavLink to = "/cs_portfolio" className = "link-style">Portfolio</NavLink>
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

      <div className = "main-body-frame">
        <Routes>
          <Route exact path = "/" element = {<HomePage />} />
          <Route path = "/about" element = {<AboutPage />} />
          <Route path = "/cs_portfolio" element = {<CsPortfolio/>} />
          <Route path = "/resume" element = {<Resume/>}/>
          <Route path = "/contact" component = {<Contact/>} />
        </Routes>
      </div>

      <div className = "header-content-separator">
        <hr className = "separator"></hr>
      </div>

      <footer className = "footer-parent">
        <div className = "footer-div-logos">
          <a href = "https://www.linkedin.com/in/anthony-salinas-suarez/" target = "_blank" rel="noopener noreferrer">
            <img src = {LinkedInLogo} alt = "Linked In Logo"/>
          </a>
        </div>
        <div className = "footer-div-logos">
          <a href = "https://github.com/AXM78251" target = "_blank" rel="noopener noreferrer">
            <img src = {GithubLogo} alt = "Github Logo"/>
          </a>
        </div>
        <div className = "footer-div-logos">
          <a href = "https://www.instagram.com/anthonyyy._.s/" target = "_blank" rel = "noopener noreferrer">
            <img src = {InstagramLogo} alt = "Instagram Logo"/>
          </a>
        </div>
      </footer>

      <footer className = "footer-contact-info">
        <div className = "contact-info">
          <h4>Berkeley Email: anthonysalinas78251@berkeley.edu</h4>
        </div>
        <div className = "contact-info">
          <h4>|</h4>
        </div>
        <div className = "contact-info">
          <h4>Personal Email: anthonysalinas78251@gmail.com</h4>
        </div>
        <div className = "contact-info">
          <h4>|</h4>
        </div>
        <div className = "contact-info">
          <h4>Phone: 619.384.8022</h4>
        </div>
      </footer>
    </Router>
  );
}

export default App;
