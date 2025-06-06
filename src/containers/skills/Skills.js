import React from "react";
import { BsLaptop   } from "react-icons/bs";
import "./skills.css";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import javaCoffeeCup from "../../assets/java-coffee-cup-logo--v1.png";
import html5 from "../../assets/html-5.png";
import css3 from "../../assets/css3.png";
import Tailwind_CSS from "../../assets/Tailwind_CSS_Logo.svg.png";
import bootsrap from "../../assets//bootsrap.png";
import javascript from "../../assets/javascript--v1.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import vscode from "../../assets/vscode.png";
import react from "../../assets/react.png";
import figma from "../../assets/figma.png";
import scss_logo from "../../assets/scss_logo.png";

function Skills() {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsLaptop  size={40} />}
      />

      <main>
        <Animate
          play
          duration={1}
          delay={0.3}
          start={{
            transform: "translateX(-900px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="container">
            <div className="skill">
              <img src={javaCoffeeCup} alt="java-coffee-cup" />
              <p className="skill-name">Java</p>
            </div>
            <div className="skill">
              <img src={html5} alt="html-5" />
              <p>HTML5</p>
            </div>
            <div className="skill">
              <img src={css3} alt="css3.png" />
              <p>CSS3</p>
            </div>
            <div className="skill">
              <img src={Tailwind_CSS} alt="Tailwind_CSS_Logo" />
              <p>Tailwind</p>
            </div>
            <div className="skill">
              <img src={bootsrap} alt="bootsrap" />
              <p>Bootstrap</p>
            </div>
            <div className="skill">
              <img src={javascript} alt="javascript" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src={git} alt="git" />
              <p>Git</p>
            </div>
            <div className="skill">
              <img src={github} alt="github" />
              <p>Github</p>
            </div>
            <div className="skill">
              <img src={vscode} alt="vscode" />
              <p>VS code</p>
            </div>
            <div className="skill">
              <img src={react} alt="react" />
              <p>React</p>
            </div>
            <div className="skill">
              <img src={figma} alt="figma" />
              <p>Figma</p>
            </div>
            <div className="skill">
              <img src={scss_logo} alt="scss_logo" />
              <p>SCSS</p>
            </div>
          </div>
          {/* <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 360" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(248.49, 71.32, 62.517, 1)" offset="0%"></stop><stop stop-color="rgba(250.767, 104.344, 97.068, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,144L48,174C96,204,192,264,288,270C384,276,480,228,576,222C672,216,768,252,864,276C960,300,1056,312,1152,288C1248,264,1344,204,1440,192C1536,180,1632,216,1728,210C1824,204,1920,156,2016,156C2112,156,2208,204,2304,210C2400,216,2496,180,2592,144C2688,108,2784,72,2880,72C2976,72,3072,108,3168,108C3264,108,3360,72,3456,90C3552,108,3648,180,3744,222C3840,264,3936,276,4032,252C4128,228,4224,168,4320,132C4416,96,4512,84,4608,114C4704,144,4800,216,4896,228C4992,240,5088,192,5184,174C5280,156,5376,168,5472,174C5568,180,5664,180,5760,150C5856,120,5952,60,6048,30C6144,0,6240,0,6336,36C6432,72,6528,144,6624,168C6720,192,6816,168,6864,156L6912,144L6912,360L6864,360C6816,360,6720,360,6624,360C6528,360,6432,360,6336,360C6240,360,6144,360,6048,360C5952,360,5856,360,5760,360C5664,360,5568,360,5472,360C5376,360,5280,360,5184,360C5088,360,4992,360,4896,360C4800,360,4704,360,4608,360C4512,360,4416,360,4320,360C4224,360,4128,360,4032,360C3936,360,3840,360,3744,360C3648,360,3552,360,3456,360C3360,360,3264,360,3168,360C3072,360,2976,360,2880,360C2784,360,2688,360,2592,360C2496,360,2400,360,2304,360C2208,360,2112,360,2016,360C1920,360,1824,360,1728,360C1632,360,1536,360,1440,360C1344,360,1248,360,1152,360C1056,360,960,360,864,360C768,360,672,360,576,360C480,360,384,360,288,360C192,360,96,360,48,360L0,360Z"></path></svg> */}
        </Animate>
      </main>
    </section>
  );
}

export default Skills;
