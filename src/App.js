import './App.css';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Blurb from './components/Blurb'
import Contact from './components/Contact'
import { useRef } from 'react';

function App() {

  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div class="app">
      <div class="Navbar">
        <div class="logo">marlon</div>
        <a href="#" class="toggle">
          <span class = "bar"></span>
          <span class = "bar"></span>
          <span class = "bar"></span>
        </a>
        <div class="links">
          <ul>
            <li><a onClick={() => aboutRef.current.scrollIntoView({behavior: "smooth"})}>ABOUT</a></li>
            <li><a onClick={() => projectRef.current.scrollIntoView({behavior: "smooth"})}>PROJECTS</a></li>
            <li><a onClick={() => contactRef.current.scrollIntoView({behavior: "smooth"})}>CONTACT</a></li>
          </ul>
        </div>
      </div>
      <div class="Body" />
      <Blurb/>
      <div ref={aboutRef} />
      <AboutMe/>
      <div ref={projectRef} />
      <Projects/>
      <div ref={contactRef} />
      <Contact/>
    </div>
  );
}

export default App;