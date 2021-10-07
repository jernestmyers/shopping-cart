import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav.js";
import About from "./About.js";
import Shop from "./Shop.js";
import ItemDetails from "./ItemDetails.js";
import metFacade from "./imgs/the-met.jpg";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/shop/:objectID" component={ItemDetails}></Route>
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
