//import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header id="header">
        <nav>
          <div className="logo">
            <img style={{width:"50px", height:"50px"}} src="../images/adhayan logo.jpg" alt="" />
            <p>ADHAYAN</p>
          </div>
          <ul>
            <li>
              <a className="active" href="/">
                Home
              </a>
            </li>
            <li>
              <NavLink className="Link" to="/courses">
                Courses
              </NavLink>
            </li>
            <li>
            <NavLink className="Link" to="/lectures">
                Lectures
              </NavLink>
            </li>
            <li>
              <a href="#contactus_section">Discussion Forum</a>
            </li>
            <li>
            <NavLink className="Link" to="/login">
              Login
            </NavLink>
            </li>
            <li>
            <NavLink className="Link" to="/register">
              Register
            </NavLink>
            </li>
          </ul>
          <div className="srch">
            <input
              type="text"
              className="search"
              placeholder="Search here..."
            />
            <img
              src="../images/icon/search.png"
              alt="search"
              onClick="slide()"
            />
          </div>
          <img
            src="../images/icon/menu.png"
            className="menu"
            onClick="sideMenu(0)"
            alt="menu"
          />
        </nav>
      </header>
    </>
  );
};


export default Navbar;
