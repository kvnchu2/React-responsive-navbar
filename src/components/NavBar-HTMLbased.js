import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Pages/root.css";
import logo from "../images/logo.svg";
import logoWhite from "../images/logo-white.svg";
import moon from "../images/moon.svg";
import sun from "../images/sun.svg";

function NavBar() {
  const [click, setClick] = useState("about-unclicked");

  const handleClick = () => setClick("about-clicked");
  return (
    <>
      <nav>
              <div class="navbar-menu">
                  <div id="side-menu" class=" side-nav">
                      <a class="nav-logo" href="/">
                          <img class="light" aria-hidden="true" decoding="async" src={logo} alt="compnay logo" height="80"></img>
                          <img class="dark" aria-hidden="true" decoding="async" src={logoWhite} alt="compnay logo" height="80"></img>
                      </a>
                      <ul id="on-top" class="navbar-links">
                          <li class="nav-li"><a id="active-menu" href="/">Home</a></li>

                          {click === "about-unclicked" ? 
                            <li class="nav-li" onClick={handleClick}><a id="about-unclicked" class="link" href="/about">About</a></li> : 
                            <li class="nav-li" onClick={handleClick}><a id="about-clicked" class="link" href="/about">About</a></li>
                        
                           }
                          <li class="nav-li"><a class="link" href="index.html#services">Services</a></li>
                          {/* <!-- <li class="nav-li"><a class="link" href="html/portfolio.html">Portfolio</a></li> --> */}
                          <li class="nav-li"><a class="link" href="/testimonials.html">Testimonials</a></li>
                          <li class="nav-li"><a class="link" href="/contact">Contact</a></li>
                      </ul>
                  </div>
                  <button class="dark-mode-button top-dark-mode-button" aria-label="dark mode toggle">
                      <img class="moon" aria-hidden="true" src={moon} alt="" width="24" height="24"></img>
                      <img class="sun" aria-hidden="true" src={sun} alt="" width="24" height="24"></img>
                  </button>
              </div>
        </nav>
    </>
  );
}

export default NavBar;
