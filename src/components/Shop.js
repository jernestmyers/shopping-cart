import React from "react";
import { Link } from "react-router-dom";

function Shop(props) {
  return (
    <div>
      <p>Choose among several replicas from our collection.</p>
      <div className="shop-overall-container">
        {props.itemsForSale.map((item) => (
          <div className="shop-thumbnail-container" key={item.objectID}>
            <Link to={`/shop/${item.objectID}`}>
              <div className="image-container">
                <img
                  className="shop-thumbnail-img"
                  src={item.primaryImageSmall}
                  alt={item.title}
                ></img>
              </div>
            </Link>
            <div className="info-container">
              <p>
                {item.title} by{" "}
                {item.artistDisplayName ? item.artistDisplayName : `unknown`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
