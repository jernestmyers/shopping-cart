import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import About from "./components/About.js";
import Shop from "./components/Shop.js";
import ItemDetails from "./components/ItemDetails.js";
import ViewCart from "./components/ViewCart.js";
import metFacade from "./imgs/the-met.jpg";

function App() {
  const metApiIds = [
    11116, 36131, 39901, 265904, 282234, 266983, 449534, 625591, 337070, 10946,
    751505, 827660, 283099, 13390, 39737, 707455, 10186, 11227, 262612,
  ];

  const [itemsForSale, setItemsForSale] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);

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
        <Nav itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route
            path="/shop"
            exact
            render={(props) => <Shop {...props} itemsForSale={itemsForSale} />}
          ></Route>
          <Route
            path="/shop/:objectID"
            render={(props) => (
              <ItemDetails
                {...props}
                itemsForSale={itemsForSale}
                itemsInCart={itemsInCart}
                setItemsInCart={setItemsInCart}
              />
            )}
          ></Route>
          <Route path="/cart" component={ViewCart}></Route>
        </Switch>
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
