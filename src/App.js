
import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Import the correct loader
import Home from './containers/home/Home';
import About from './containers/about/About';
import Resume from './containers/resume/Resume';
import Skills from './containers/skills/Skills';
import Projects from './containers/projects/Projects';
import Contact from './containers/contact/Contact';
import Navbar from './components/navBar/navBar';



function App() {
const location = useLocation();

  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles...");
    await loadSlim(engine); // Properly load tsparticles-slim
}, []);

const renderParticlesjsInHomePage = location.pathname === "/";

  return (
    <div className="App">

        {/* Particles Background */}
        {renderParticlesjsInHomePage && <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
          background: { color: "#181818" },
            particles: {
              number: { value: 100 },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: 3 },
              move: { enable: true, speed: 4 },
              links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4 },
              },
              interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
              },
            }}
            className="absolute top-0 left-0 w-full h-full z-0"
        />
        }
      
     {/* navBar js */}
      <Navbar/>

     {/* Main page Content */}
        <div className='App__main-page-content'>
        <Routes>
          <Route index path='/'  element={<Home />} />
          <Route path='/about' element={ <About /> } />
          <Route path='/resume' element={ <Resume /> } />
          <Route path='/skills' element={ <Skills /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
        </div>
    
    </div>
  );
}

export default App;
