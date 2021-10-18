import React from "react";
import { Link } from "react-router-dom";

function Shop(props) {
  return (
    <div>
      {/* <h1>choose among our curated replicas</h1> */}
      <div id="filter-container">
        <h4 id="filter-desc">filter by medium</h4>
        <div id="filter-btn-container">
          <button className="filter-btn" id="show-all">
            show all
          </button>
          <button className="filter-btn" id="show-photos">
            photos
          </button>
          <button className="filter-btn" id="show-textiles">
            textiles
          </button>
          <button className="filter-btn" id="show-paintings">
            paintings
          </button>
          <button className="filter-btn" id="show-other">
            other
          </button>
        </div>
      </div>
      <div className="shop-overall-container">
        {props.itemsForSale.map((item) => (
          <Link to={`/shop/${item.objectID}`} key={item.objectID}>
            <div className="shop-thumbnail-container">
              <div className="image-container">
                <img
                  className="shop-thumbnail-img"
                  src={item.primaryImageSmall}
                  alt={item.title}
                ></img>
              </div>
              <div className="info-container">
                <p>
                  {item.title} by{" "}
                  {item.artistDisplayName ? item.artistDisplayName : `unknown`}
                </p>
                <p>
                  {props.priceList.map((obj) => {
                    if (obj.id === item.objectID) {
                      if (obj.frame) {
                        return `$${obj.price} unframed / $${
                          obj.price + obj.frame
                        } framed`;
                      } else {
                        return `$${obj.price}, textile`;
                      }
                    }
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Shop;
