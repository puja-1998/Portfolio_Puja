import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./navBar.css";
import Type from "../../containers/home/Type";

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "RESUME", to: "/resume" },
  { label: "PROJECTS", to: "/projects" },
  { label: "CONTACT ME", to: "/contact" },
];

function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    if (toggleIcon) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }
  }, [toggleIcon]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <h2 className="navbar_logo">
              Puja Rokade |{" "}
              <span className="type-writer">
                <Type />
              </span>
            </h2>
          </Link>
        </div>

        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={() => setToggleIcon(false)} // Closes menu on click
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-icons" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>

      {/* Overlay for dim background */}
      <div
        className={`navbar-overlay ${toggleIcon ? "active" : ""}`}
        onClick={handleToggleIcon}
      ></div>
    </>
  );
}

export default Navbar;
