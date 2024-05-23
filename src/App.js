import './App.css';
import LogoImage from "./images-and-videos/logo.jpeg";
import LinkedInLogo from "./images-and-videos/LI-In-Bug.png";
import InstagramLogo from "./images-and-videos/Instagram_Glyph_Gradient.png";
import GithubLogo from "./images-and-videos/github-mark.png";
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import { useEffect } from 'react';

import HomePage from "./website-pages/HomePage";
import Resume from "./website-pages/ResumePage";
import CsPortfolio from "./website-pages/CS-Portfolio";
import AboutPage from "./website-pages/AboutPage";

function App() {
  useEffect(() => {
    document.title = "Anthony Salinas Suarez"
  }, [])

  return (
    <Router>
      <header className = "parent-header">
        <div className = "image-div">
          <NavLink to = "/" className = "home-redirect" id = "home-link">
            <img src = {LogoImage} width = "100%" alt = "My Logo"></img> 
          </NavLink>
        </div>
        <div className = "list-div">
          <nav className = "nav-container">
            <ul className = "list-style">
              <li>
                <NavLink to = "/" className = "link-style-nav" id = "home-link">Home</NavLink>
              </li>
              <li>
                <NavLink to = "/about" className = "link-style-nav" id = "about-page">About</NavLink>
              </li>
              <li>
                <NavLink to = "/cs_portfolio" className = "link-style-nav" id = "portfolio-link">Portfolio</NavLink>
                <ul className = "portfolio-section-redirect">
                  <li>
                    <a href = "#experience-sec" className = "section-style">Experience</a>
                  </li>
                  <li>
                    <a href = "#projects-sec" className = "section-style">Projects</a>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to = "/resume" className = "link-style-nav">Resume</NavLink>
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
        </Routes>
      </div>

      <div className = "footer-content-separator">
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
          <h4>&bull; Berkeley Email: anthonysalinas78251@berkeley.edu &bull;&nbsp;&nbsp;&nbsp;</h4>
        </div>
        <div className = "contact-info">
          <h4>&bull; Personal Email: anthonysalinas78251@gmail.com &bull;&nbsp;&nbsp;&nbsp;</h4>
        </div>
        <div className = "contact-info">
          <h4>&bull; Phone: 619.384.8022 &bull;</h4>
        </div>
      </footer>
    </Router>
  );
}

export default App;
