import React, { useState } from "react";
import "./project.css";
import { TbLayoutDashboard } from "react-icons/tb";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import html1 from "../../assets/html2.jpg";
import coffeeHousePage from "../../assets/coffeeHousePage.JPG";
import GridTemplate from "../../assets/GridTemplate.JPG";
import html3 from "../../assets/html4.jpg";
import GridMagazine from "../../assets/GridMagazine.JPG";
import html5 from "../../assets/html1.JPG";
import shoePage from "../../assets/shoePage.JPG";
import flexboxPhoto from "../../assets/flexboxPhoto.JPG";
import jadoo from "../../assets/jadoo.JPG";
import bakingo from "../../assets/bakingo.JPG";
import nodejs2 from "../../assets/nodejs2.JPG";
import stickyNotes from '../../assets/stickyNotes.JPG';
import AgeCalculator from '../../assets/AgeCalculator.JPG';
import digitalClock from '../../assets/digitalClock.JPG';
import stopWatch from '../../assets/stopWatch.JPG';
import dadJokesGenerator from '../../assets/dadJokesGenerator.JPG';
import geeksterMon from '../../assets/geeksterMon.JPG';
import changeColorShape from "../../assets/changeColorShape.JPG";
import bookApp from "../../assets/bookApp.JPG";
import feedbackUI from "../../assets/feedbackUI.JPG";

// id == 1 ==> All Project

const projectData = [
  // id == 4 ==> REACT Project
  {
    id: 4,
    name: "Youtube Clone",
    image: html3,
    sourceLink: "https://github.com/puja-1998/YouTube_Clone",
    viewLink: "https://puja-1998.github.io/YouTube_Clone/",
  },
  // id == 3 ==> JAVASCRIPT Project
  {
    id: 3,
    name: "Book App",
    image: bookApp,
    sourceLink: "https://github.com/puja-1998/Book_App",
    viewLink: "https://puja-1998.github.io/Book_App/",
  },
  {
    id: 3,
    name: "Feedback UI",
    image: feedbackUI,
    sourceLink: "https://github.com/puja-1998/JS_PRACTICE_PROJECT/tree/main/feedbackUI",
    viewLink: "https://puja-1998.github.io/JS_PRACTICE_PROJECT/feedbackUI/index.html",
  },
  {
    id: 3,
    name: "PokeMon",
    image: geeksterMon,
    sourceLink: "https://github.com/puja-1998/JS-Projects/tree/main/GeeksterPok",
    viewLink: "https://puja-1998.github.io/JS-Projects/GeeksterPok/index.html",
  },
  {
    id: 3,
    name: "Joke Generator",
    image: dadJokesGenerator,
    sourceLink: "https://github.com/puja-1998/JS-Projects/tree/main/DadJokesGenerator",
    viewLink: "https://puja-1998.github.io/JS-Projects/DadJokesGenerator/index.html",
  },
  {
    id: 3,
    name: "StopWatch",
    image: stopWatch,
    sourceLink: "https://github.com/puja-1998/JS-Projects/tree/main/StopWatch",
    viewLink: "https://puja-1998.github.io/JS-Projects/StopWatch/index.html",
  },
  {
    id: 3,
    name: "Digital Clock",
    image: digitalClock,
    sourceLink: "https://github.com/puja-1998/JS-Projects/tree/main/DigitalClock",
    viewLink: "https://puja-1998.github.io/JS-Projects/DigitalClock/index.html",
  },
  {
    id: 3,
    name: "Sticky Notes",
    image: stickyNotes,
    sourceLink: "https://github.com/puja-1998/JS-Projects/tree/main/StickyNotes",
    viewLink: "https://puja-1998.github.io/Sticky-Notes/",
  },
  {
    id: 3,
    name: "Age Calculator",
    image: AgeCalculator,
    sourceLink: "https://github.com/puja-1998/JS-Projects/tree/main/AgeCalculator",
    viewLink: "https://puja-1998.github.io/JS-Projects/AgeCalculator/index.html",
  },
  {
    id: 3,
    name: "Change Color & Shape",
    image: changeColorShape,
    sourceLink: "https://github.com/puja-1998/JS-Projects/tree/main/ChangeColorAndShape",
    viewLink: "https://puja-1998.github.io/JS-Projects/ChangeColorAndShape/changeColor.html",
  },
  // id == 2 ==> HTML5/CSS3 Project
 
  {
    id: 2,
    name: " Bakingo UI",
    image: bakingo,
    sourceLink: "https://github.com/puja-1998/TeamBakingo",
    viewLink: "https://puja-1998.github.io/TeamBakingo/",
  },
  {
    id: 2,
    name: "Youtube Clone UI",
    image: html3,
    sourceLink: "https://github.com/puja-1998/YouTube_Clone",
    viewLink: "https://puja-1998.github.io/YouTube_Clone/",
  },
  {
    id: 2,
    name: "Camping Page Clone",
    image: html1,
    sourceLink:
      "https://github.com/puja-1998/CSS_Assignments/blob/main/Assignments/weekly_test_4.html",
    viewLink:
      "https://puja-1998.github.io/CSS_Assignments/Assignments/weekly_test_4.html",
  },
  {
    id: 2,
    name: "Magazine",
    image: GridMagazine,
    sourceLink:
      "https://github.com/puja-1998/CSS_Assignments/tree/main/Assignments",
    viewLink:
      "https://puja-1998.github.io/CSS_Assignments/Assignments/Grid_Magazine.html",
  },
  {
    id: 2,
    name: "Coffee House Page",
    image: coffeeHousePage,
    sourceLink:
      "https://github.com/puja-1998/CSS_Assignments/tree/main/Assignments",
    viewLink:
      "https://puja-1998.github.io/CSS_Assignments/Assignments/homework_4.html",
  },
  {
    id: 2,
    name: "Puma Clone",
    image: html5,
    sourceLink: "https://github.com/puja-1998/Puma_Clone",
    viewLink: "https://puja-1998.github.io/Puma_Clone/",
  },
  {
    id: 2,
    name: "Grid Template",
    image: GridTemplate,
    sourceLink: "https://github.com/puja-1998/CSS_Assignments/tree/main/Assignments",
    viewLink: "https://puja-1998.github.io/CSS_Assignments/Assignments/Homework_8.html",
  },
  {
    id: 2,
    name: "Shoe Page",
    image: shoePage,
    sourceLink:
      "https://github.com/puja-1998/CSS_Assignments/tree/main/Assignments",
    viewLink:
      "https://puja-1998.github.io/CSS_Assignments/Assignments/classwork_4.html",
  },
  {
    id: 2,
    name: "Flexbox Photo Gallery",
    image: flexboxPhoto,
    sourceLink:
      "https://github.com/puja-1998/CSS_Assignments/tree/main/Assignments",
    viewLink:
      "https://puja-1998.github.io/CSS_Assignments/Assignments/Homework_6.html",
  },

  // id == 5 ==> TAILWIND CSS Project
  {
    id: 5,
    name: "Jadoo Clone UI",
    image: jadoo,
    sourceLink: "https://github.com/puja-1998/Jadoo",
    viewLink: "https://puja-1998.github.io/Jadoo/",
  },
  // id == 6 ==> Node.Js Project
  {
    id: 6,
    name: "URL Shortner application",
    image: nodejs2,
    sourceLink: "https://github.com/puja-1998/URL-shortener-application-nodejs",
    viewLink: "https://url-shortener-application-ntro.onrender.com/",
  },
];

const filterData = [
  {
    filteredId: 1,
    label: "All",
  },
  {
    filteredId: 2,
    label: " HTML5/CSS3",
  },
  {
    filteredId: 3,
    label: "Javascript",
  },
  {
    filteredId: 4,
    label: "React",
  },
  {
    filteredId: 5,
    label: "Tailwind CSS",
  },
  {
    filteredId: 6,
    label: "NodeJS",
  },
];

function Projects() {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  function handleSourceCode(sourceLink) {
    if (sourceLink) {
      // Opens link in a new tab
      window.open(sourceLink, "_blank");
    } else {
      alert("Source code link not available");
    }
  }

  function handleViewCode(viewLink) {
    if (viewLink) {
      window.open(viewLink, "_blank");
    } else {
      alert("View Code Link not available");
    }
  }

  const filteredItems =
    filteredValue === 1
      ? projectData
      : projectData.filter((item) => item.id === filteredValue);

  return (
    <section id="project" className="project">
      <PageHeaderContent
        headerText="My Projects"
        icon={<TbLayoutDashboard size={40} />}
      />

      <div className="project__content">
        <ul className="project__content-filter">
          {filterData.map((item) => (
            <li
              className={item.filteredId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filteredId)}
              key={item.filteredId}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="project__content-cards">
          {filteredItems.map((item, index) => (
            <div
              className="project__content-cards-item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="project__content-cards-item-img-wrapper">
                <a>
                  <img src={item.image} alt="html1" />
                </a>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div className="overlay-div">
                      <p>{item.name}</p>
                      <div className="btn">
                        <button onClick={() => handleViewCode(item.viewLink)}>
                          View Page
                        </button>
                        <button
                          onClick={() => handleSourceCode(item.sourceLink)}
                        >
                          Source Code
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
