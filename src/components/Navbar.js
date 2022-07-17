import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundColor = "#B5DEFF";
    }
    if (location.pathname === "/business") {
      document.body.style.backgroundColor = "#CAB8FF";
    }
    if (location.pathname === "/entertainment") {
      document.body.style.backgroundColor = "#A9E4D7";
    }
    if (location.pathname === "/general") {
      document.body.style.backgroundColor = "#B5DEFF";
    }
    if (location.pathname === "/health") {
      document.body.style.backgroundColor = "#FFEBA1";
    }
    if (location.pathname === "/science") {
      document.body.style.backgroundColor = "#FE8F8F";
    }
    if (location.pathname === "/sports") {
      document.body.style.backgroundColor = "#B97A95";
    }
    if (location.pathname === "/technology") {
      document.body.style.backgroundColor = "#F1ECC3";
    }
  }, [location]);

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
