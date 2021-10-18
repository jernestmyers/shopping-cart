import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  // document.querySelector(`nav`).addEventListener(`click`, () => {
  //   // const navDecoration = () => {
  //   if (window.location.pathname === `/about`) {
  //     document.querySelector(`#about-nav`).classList.add(`nav-underline`);
  //     document.querySelector(`#shop-nav`).classList.remove(`nav-underline`);
  //   } else if (window.location.pathname === `/shop`) {
  //     document.querySelector(`#shop-nav`).classList.add(`nav-underline`);
  //     document.querySelector(`#about-nav`).classList.remove(`nav-underline`);
  //   } else {
  //     document.querySelector(`#about-nav`).classList.remove(`nav-underline`);
  //     document.querySelector(`#shop-nav`).classList.remove(`nav-underline`);
  //   }
  //   // };
  //   console.log(`click nav`);
  // });

  const quantityArray = [];
  props.itemsInCart.map((item) => {
    return quantityArray.push(item[4]);
  });

  const totalItems = quantityArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

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
          <li id="about-nav">about</li>
        </Link>
        <Link to="/shop">
          <li id="shop-nav">shop</li>
        </Link>
        <Link to="/cart">
          <li id="nav-cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-shopping-cart"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {props.itemsInCart.length ? (
              <p id="cart-counter">{totalItems}</p>
            ) : (
              <p id="cart-counter"></p>
            )}
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
