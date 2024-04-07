import React from 'react'

const Header = () => {
  return (
    <>
    <header id="header">
      <div className="head-container">
                    <div className="quote">
                        <p>
                            The beautiful thing about learning is that nobody can take it away from
                            you
                        </p>
                        <h5>
                            Education is the process of facilitating learning, or the acquisition of
                            knowledge, skills, values, beliefs, and habits. Educational methods
                            include teaching, training, storytelling, discussion and directed
                            research!
                        </h5>
                        <div className="play">
                            <img src="../images/icon/play.png" alt="play" />
                            <span>
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                                    Watch Now 
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="svg-image">
                        <img src="../images/extra/svg1.jpg" alt="svg" />
                    </div>
                </div>
                <div className="side-menu" id="side-menu">
                    <div className="close" onclick="sideMenu(1)">
                        <img src="../images/icon/close.png" alt="" />
                    </div>
                    <div className="user">
                        <img src="../images/creator/roshan.jpeg" alt="Username" />
                    </div>
                    <ul>
                        <li>
                            <a href="#about_section">About</a>
                        </li>
                        <li>
                            <a href="#portfolio_section">Portfolio</a>
                        </li>
                        <li>
                            <a href="#team_section">Team</a>
                        </li>
                        <li>
                            <a href="#services_section">Services</a>
                        </li>
                        <li>
                            <a href="#contactus_section">Contact</a>
                        </li>
                        <li>
                            <a href="#feedBACK">Feedback</a>
                        </li>
                    </ul>
                </div>
                </header>
    </>
  )
}

export default Header
