import React from "react";
import "./about.css";
// import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import { Animate } from "react-simple-animate";
import {SiMongodb,SiExpress} from "react-icons/si";
import {FaReact,FaNodeJs,FaRegIdBadge } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Puja Rokade",
  },
  {
    label: "DOB",
    value: "20 October 1998",
  },
  {
    label: "Address",
    value: "Solapur, Maharashtra, India",
  },
  {
    label: "Email",
    value: "ghodkepooja98@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91-9284879246",
  },
];

const jobSummary = `I’m a passionate and self-motivated Web Developer with over 2+ years of experience in the tech industry. I specialize in building responsive and dynamic web applications using modern technologies like HTML5, CSS3, Tailwind CSS, JavaScript, React, Node.js, and MongoDB.

I focus on writing clean, maintainable code and have a strong understanding of full-stack development using the MERN stack. I enjoy solving real-world problems, bringing UI designs to life, and working in collaborative environments. I'm currently seeking a junior web developer role where I can grow further and contribute to impactful projects.`;

function About() {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<FaRegIdBadge  size={40} />}
      />

      <div className="about__content">
        <div className="personal-wrapper">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(-900px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <h3>Front End Developer</h3>
          <p>{jobSummary}</p>
        </Animate>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(500px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
        <h3 className="personalInfoHeader">Personal Information</h3>
        <ul>
          {
            personalDetails.map((item, index)=>(
              <li key={index}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))
          }
        </ul>
        </Animate>
        </div>

        <div className="services-wrapper">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(600px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <div className="inner-content">
          
          <div>
              <SiMongodb size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            <div>
            <SiExpress size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            <div>
            <FaReact size={60} color="var(--yellow-theme-main-color)"/>
            </div>
            <div>
            <FaNodeJs size={60} color="var(--yellow-theme-main-color)"/>
            </div>
          </div>
          </Animate>
        </div>
        
      </div>
    </section>
  );
}

export default About;
