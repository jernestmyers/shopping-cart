import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const quantityArray = [];
  props.itemsInCart.map((item) => {
    return quantityArray.push(item[4]);
  });

  const totalItems = quantityArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  const handlePathname = (e) => {
    const linkClicked = e.target.closest(`a`).id;
    if (linkClicked === `home-nav`) {
      props.setCurrentPath(`/shopping-cart`);
    } else if (linkClicked === `about-nav`) {
      props.setCurrentPath(`/shopping-cart/about`);
    } else if (linkClicked === `shop-nav`) {
      props.setCurrentPath(`/shopping-cart/shop`);
    } else if (linkClicked === `nav-cart-link`) {
      props.setCurrentPath(`/shopping-cart/cart`);
    }
  };

  return (
    <nav>
      <Link id="home-nav" onClick={handlePathname} to="/shopping-cart">
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
        <li>
          <Link
            id="about-nav"
            onClick={handlePathname}
            to="/shopping-cart/about"
          >
            about
          </Link>
        </li>
        <li>
          <Link id="shop-nav" onClick={handlePathname} to="/shopping-cart/shop">
            shop
          </Link>
        </li>

        <Link
          id="nav-cart-link"
          onClick={handlePathname}
          to="/shopping-cart/cart"
        >
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
