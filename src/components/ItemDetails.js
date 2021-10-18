import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart.js";
import { Link } from "react-router-dom";

function ItemDetails({
  match,
  itemsForSale,
  itemsInCart,
  setItemsInCart,
  priceList,
  selectedQuantity,
  setSelectedQuantity,
}) {
  const [item, setItem] = useState({});
  const [price, setPrice] = useState({});

  useEffect(() => {
    matchItem();
    matchPrice();
  }, []);

  const matchItem = () => {
    itemsForSale.map((obj) => {
      if (obj.objectID === +match.params.objectID) {
        setItem(obj);
      }
    });
  };

  const matchPrice = () => {
    priceList.map((obj) => {
      if (obj.id === +match.params.objectID) {
        setPrice(obj);
      }
    });
  };

  return (
    <div id="item-details-container">
      <div id="item-details-info-container">
        <div id="item-details-info">
          <h3 id="object-details-header">Details</h3>
          <h4>
            <strong>Title</strong>: {item.title}
          </h4>
          <h4>
            <strong>Date</strong>: {item.objectDate}
          </h4>
          <h4>
            <strong>Artist</strong>:{" "}
            {item.artistDisplayName ? item.artistDisplayName : `unknown`}
          </h4>
          <h4>
            <strong>Medium</strong>: {item.medium}
          </h4>
          <h4>
            <strong>Dimensions</strong>: {item.dimensions}
          </h4>
          <a
            className="linkToMet"
            href={item.objectURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to learn more about this piece.
          </a>
        </div>
        <div id="add-item-container">
          <AddToCart
            price={price}
            itemToAdd={item}
            itemsInCart={itemsInCart}
            setItemsInCart={setItemsInCart}
            selectedQuantity={selectedQuantity}
            setSelectedQuantity={setSelectedQuantity}
          ></AddToCart>
        </div>
        <div id="back-container">
          <Link id="back-to-shop" to="/shop">
            <p> &#8592; back</p>
          </Link>
        </div>
      </div>
      <div>
        <img src={item.primaryImageSmall} alt={item.title}></img>
      </div>
    </div>
  );
}

export default ItemDetails;
