import React, { useState } from "react";
import "./project.css";
import { TbLayoutDashboard } from "react-icons/tb";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import html1 from "../../assets/html2.jpg";
import html2 from "../../assets/html3.jpg";
import html3 from "../../assets/html4.jpg";
import html4 from "../../assets/html5.jpg";
import tailwind from "../../assets/tailwind1.jpg";

// id == 1 ==> All Project
// id == 2 ==> HTML5/CSS3 Project
// id == 3 ==> JAVASCRIPT Project
// id == 4 ==> REACT Project
// id == 5 ==> TAILWIND CSS Project
// id == 6 ==> FIGMA Project

const projectData = [
  {
    id: 2,
    name: "Camping Page Clone",
    image: html1,
    link: "",
  },
  {
    id: 2,
    name: "Amazon Clone",
    image: html2,
    link: "",
  },
  {
    id: 2,
    name: "Youtube Clone",
    image: html3,
    link: "",
  },
  {
    id: 2,
    name: "Myntra Clone",
    image: html4,
    link: "",
  },
  {
    id: 5,
    name: "Landing Page",
    image: tailwind,
    link: "",
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
    label: "Figma",
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
                    <div className="overlay-div" >
                      <p>{item.name}</p>
                      <div className="btn">
                        <button>View Page</button>
                        <button>Source Code</button>
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
