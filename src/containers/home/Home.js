import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import PujaProfile from '../../assets/puja.jpg';
import Resume from '../../assets/Puja-Resume.pdf';

function Home() {
  const navigate = useNavigate();
  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleNavigateToProjectsPage = () =>{
    navigate("/projects");
  }

  return (
    <section id="home" className="home-section">
      <div className="home">
        <main className="home-main">
          {/* Right Container */}
          <div className="right-container">
            <img
              src={PujaProfile}
              alt="home pic"
              className="profile-img"
            />
            <h1 className="name-heading">Puja Rokade</h1>
            <h3 className="role-heading">Frontend Developer</h3>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/pujaghodke/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin id="social-icon" className="social-icon-linkedin" size={25} />
              </a>
              <a
                href="https://github.com/puja-1998"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub  id="social-icon" className="social-icon-github" size={25}/>
              </a>
            </div>
          </div>

          {/* Left Container */}
          <div className="info-container">
            <h1 className="greeting-text">Hello,</h1>
            <div className="button-group">
              <a href={Resume} download="Puja-Resume.pdf" className="button-link">
                <div className="button-style">Resume</div>
              </a>
              <div className="button-style" onClick={handleNavigateToProjectsPage}>Projects</div>
            </div>
            <p className="description">
              I'm Puja, a passionate and creative frontend developer with a love
              for crafting beautiful and user-friendly digital experiences. My
              journey in the world of web development began with a curiosity
              that turned into a genuine fascination for transforming ideas into
              interactive, visually appealing websites. I'm well-versed in the
              latest frontend technologies, including HTML5, CSS3, and
              JavaScript. I have experience working with popular frameworks like
              React.
            </p>
            <div className="button-style contact-btn" onClick={handleNavigateToContactMePage}>
              Contact Me
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Home;
