import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import PhotoIcon from './images/Ellipse 4.png';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
      <div id="circleA"></div>
      <div id="circleB"></div>
        <div className="nav-container container-fluid">
        <div className="nav-profile d-flex align-items-center w-50">
        <img className="navbar-profile " src={PhotoIcon} alt=""/>
        <span className="nav-dropdown px-4">
          <button className="btn btn-name"><i className="fa fa-angle-down"></i>
            Jonathan Deog
        </button>
        </span>
        </div>

        <div className="d-flex  w-50">
          <div className="l-nav-icon py-2">
            <img className=" px-2" src="../image" alt=""/>
            <span className="badge rounded-pill nav-badge-notificationA bg-yellow">20</span>
            <span className="badge rounded-pill nav-badge-notificationB bg-yellow">50+</span>
            <a href=""><i className="fa fa-envelope px-2"></i></a>
            <a href=""><i className="fa fa-bell px-2"></i></a>
          </div>
          <div className="d-flex align-content-center justify-content-between w-75">
        <div className="form-group has-search align-items-center px-4">
          <span className="fa fa-search fa-search-A form-control-feedback"></span>
          <form className="d-flex">
            <input
              className="form-control me-2 l-search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <div className=" ">
        <img className="navbar-brand " src="images/Group 25.png" alt=""/>
        </div>
        </div>
      </div>

          
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
