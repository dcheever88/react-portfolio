import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar stick="top">
                <NavLink className="nav-link" to="/">
                    <div>
                        <h4 class="nav-title-font">Danny Cheever</h4>
                    </div>
                </NavLink>
                <ul class="navbar-nav navitem-indent">
                    <li class="nav-item">
                        <NavLink to="/aboutme">
                            <div class="nav-font">About Me</div>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/portfolio">
                            <div class="nav-font">Portfolio</div>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/contactme">
                            <div class="nav-font">Contact Me</div>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/resume">
                            <div class="nav-font">Resume</div>
                        </NavLink>
                    </li>
                </ul>
            </Navbar>
        </div>
    );
}

export default Navigation;