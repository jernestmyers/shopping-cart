import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <div id="home-icon-container">
          <img
            id="home-icon"
            src="https://iconape.com/wp-content/files/yu/152764/png/metropolitan-art-museum-logo.png"
            alt="Metropolitan Museuem of Art logo"
          ></img>
          <div id="home-icon-text-container">
            <h3 id="home-icon-text">replica</h3>
          </div>
        </div>
      </Link>
      <ul>
        <Link to="/about">
          <li>about us</li>
        </Link>
        <Link to="/shop">
          <li>shop replicas</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
