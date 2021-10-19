import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav.js";
import About from "./components/About.js";
import Shop from "./components/Shop.js";
import ItemDetails from "./components/ItemDetails.js";
import ViewCart from "./components/ViewCart.js";
import metFacade from "./imgs/the-met.jpg";
import Footer from "./components/Footer.js";

function App() {
  const [itemsInCart, setItemsInCart] = useState([]);

  const metApiIds = [
    11116, 36131, 39901, 265904, 282234, 266983, 449534, 625591, 337070, 10946,
    751505, 827660, 283099, 13390, 39737, 707455, 10186, 11227, 262612,
  ];

  const priceList = [
    {
      id: 11116,
      price: 50,
      frame: 50,
    },
    {
      id: 36131,
      price: 30,
      frame: 25,
    },
    {
      id: 39901,
      price: 30,
      frame: 25,
    },
    {
      id: 265904,
      price: 25,
      frame: 20,
    },
    {
      id: 282234,
      price: 30,
      frame: 30,
    },
    {
      id: 266983,
      price: 25,
      frame: 25,
    },
    {
      id: 449534,
      price: 60,
      frame: 50,
    },
    {
      id: 625591,
      price: 400,
      frame: null,
    },
    {
      id: 337070,
      price: 25,
      frame: 20,
    },
    {
      id: 10946,
      price: 120,
      frame: 75,
    },
    {
      id: 751505,
      price: 100,
      frame: null,
    },
    {
      id: 827660,
      price: 30,
      frame: 30,
    },
    {
      id: 283099,
      price: 30,
      frame: 30,
    },
    {
      id: 13390,
      price: 25,
      frame: 25,
    },
    {
      id: 39737,
      price: 40,
      frame: null,
    },
    {
      id: 707455,
      price: 25,
      frame: 25,
    },
    {
      id: 10186,
      price: 60,
      frame: 60,
    },
    {
      id: 11227,
      price: 50,
      frame: 50,
    },
    {
      id: 262612,
      price: 35,
      frame: 35,
    },
  ];

  const [currentPath, setCurrentPath] = useState();
  useEffect(() => {
    if (currentPath === `/shopping-cart/about`) {
      document
        .querySelector(`#about-nav`)
        .classList.add(`nav-link-to-decorate`);
      document
        .querySelector(`#shop-nav`)
        .classList.remove(`nav-link-to-decorate`);
    } else if (currentPath === `/shopping-cart/shop`) {
      document
        .querySelector(`#about-nav`)
        .classList.remove(`nav-link-to-decorate`);
      document.querySelector(`#shop-nav`).classList.add(`nav-link-to-decorate`);
    } else {
      document
        .querySelector(`#about-nav`)
        .classList.remove(`nav-link-to-decorate`);
      document
        .querySelector(`#shop-nav`)
        .classList.remove(`nav-link-to-decorate`);
    }
  }, [currentPath]);

  const [itemsForSale, setItemsForSale] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const replicaObjects = [];
      await Promise.all(
        metApiIds.map(async (id) => {
          const artData = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
            { mode: "cors" }
          );
          const artObject = await artData.json();
          replicaObjects.push(artObject);
        })
      );
      setItemsForSale(itemsForSale.concat(replicaObjects));
    };
    fetchItems();
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav
          className="navMenu"
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
        />
        <Switch>
          <Route
            path="/shopping-cart"
            exact
            render={(props) => (
              <Home {...props} setCurrentPath={setCurrentPath} />
            )}
          ></Route>
          <Route path="/shopping-cart/about" component={About}></Route>
          <Route
            path="/shopping-cart/shop"
            exact
            render={(props) => (
              <Shop
                {...props}
                itemsForSale={itemsForSale}
                priceList={priceList}
                setCurrentPath={setCurrentPath}
              />
            )}
          ></Route>
          <Route
            path="/shopping-cart/shop/:objectID"
            render={(props) => (
              <ItemDetails
                {...props}
                itemsForSale={itemsForSale}
                itemsInCart={itemsInCart}
                setItemsInCart={setItemsInCart}
                priceList={priceList}
                currentPath={currentPath}
                setCurrentPath={setCurrentPath}
              />
            )}
          ></Route>
          <Route
            path="/shopping-cart/cart"
            render={(props) => (
              <ViewCart
                {...props}
                itemsInCart={itemsInCart}
                setItemsInCart={setItemsInCart}
                setCurrentPath={setCurrentPath}
              />
            )}
          ></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

const Home = (props) => (
  <div className="content-container" id="home-container">
    <img id="met-facade" src={metFacade} alt="Facade of The Met"></img>
    <div class="top-middle">
      <div id="welcome-msg-container">
        <p class="text" className="welcome-msg">
          welcome to
        </p>
      </div>
      <div id="overlay-icon-container">
        <img
          id="overlay-icon"
          src="https://iconape.com/wp-content/files/yu/152764/png/metropolitan-art-museum-logo.png"
          alt="Metropolitan Museuem of Art logo"
        ></img>
        <div id="overlay-icon-text-container">
          <p id="overlay-icon-text" className="welcome-msg">
            replica
          </p>
        </div>
      </div>
    </div>
    <div class="middle">
      <Link to="/shopping-cart/shop">
        <button
          onClick={() => props.setCurrentPath(`/shopping-cart/shop`)}
          class="text"
        >
          shop now
        </button>
      </Link>
    </div>
  </div>
);

export default App;
