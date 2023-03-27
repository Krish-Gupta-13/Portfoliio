import './css/App.css';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
// import { HashLink as Link } from "react-router-hash-link"
// import {Link} from "react-router-dom"
// import Reactcomponent from 'Reactcomponent'
import Navbar from './js/Navbar';
import Footer from './js/Footer';
import About from './js/About';
import Skills from './js/Skills';
import AboutMe from './js/Aboutme';
import Projects from './js/Projects';
import NavbarCss from './css/Navbar.css';
import FooterCss from './css/Footer.css';
import AboutCss from './css/About.css';
import SkillsCss from './css/Skills.css';
import AboutMeCss from './css/Aboutme.css';
import ProjectsCss from './css/Projects.css';

// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <About/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Footer/>
    </div>
  );
}

export default App;
