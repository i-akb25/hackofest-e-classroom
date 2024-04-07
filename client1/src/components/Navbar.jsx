import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header id="header">
                <nav>
                    <div className="logo">
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
              COURSES
            </NavLink>
                        </li>
                        <li>
                            <a href="#contactus_section">Chat Room</a>
                        </li>
                        <li>
                            <a href="#contactus_section">Discussion Forum</a>
                        </li>
                        <li>
                            <a href="#contactus_section">Know Yourself</a>
                        </li>
                    </ul>
                    <div className="srch">
                        <input type="text" className="search" placeholder="Search here..." />
                        <img src="../images/icon/search.png" alt="search" onclick="slide()" />
                    </div>
                    <img
                        src="../images/icon/menu.png"
                        className="menu"
                        onclick="sideMenu(0)"
                        alt="menu"
                    />
                </nav>
            </header>

        </>
    )
}

export default Navbar