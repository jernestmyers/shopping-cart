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
            <p id="home-icon-text">replica</p>
          </div>
        </div>
      </Link>
      <ul>
        <Link to="/about">
          <li>about</li>
        </Link>
        <Link to="/shop">
          <li>shop</li>
        </Link>
        <Link to="/cart">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-shopping-cart"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;