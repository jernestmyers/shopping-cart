import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import About from "./components/About.js";
import Shop from "./components/Shop.js";
import ItemDetails from "./components/ItemDetails.js";
import ViewCart from "./components/ViewCart.js";
import metFacade from "./imgs/the-met.jpg";
import Footer from "./components/Footer.js";

function App() {
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

  const [itemsForSale, setItemsForSale] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  // const [selectedQuantity, setSelectedQuantity] = useState(1);

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
        />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route
            path="/shop"
            exact
            render={(props) => (
              <Shop
                {...props}
                itemsForSale={itemsForSale}
                priceList={priceList}
              />
            )}
          ></Route>
          <Route
            path="/shop/:objectID"
            render={(props) => (
              <ItemDetails
                {...props}
                itemsForSale={itemsForSale}
                itemsInCart={itemsInCart}
                setItemsInCart={setItemsInCart}
                priceList={priceList}
                // selectedQuantity={selectedQuantity}
                // setSelectedQuantity={setSelectedQuantity}
              />
            )}
          ></Route>
          <Route
            path="/cart"
            render={(props) => (
              <ViewCart
                {...props}
                itemsInCart={itemsInCart}
                setItemsInCart={setItemsInCart}
                // selectedQuantity={selectedQuantity}
                // setSelectedQuantity={setSelectedQuantity}
              />
            )}
          ></Route>
        </Switch>
        {/* <Footer></Footer> */}
      </div>
    </Router>
  );
}

const Home = () => (
  <div id="home-container">
    <img id="met-facade" src={metFacade} alt="Facade of The Met"></img>
  </div>
);

export default App;
