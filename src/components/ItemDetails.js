import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart.js";

function ItemDetails({
  match,
  itemsForSale,
  itemsInCart,
  setItemsInCart,
  priceList,
}) {
  // const priceList = [
  //   {
  //     id: 11116,
  //     price: 50,
  //     frame: 50,
  //   },
  //   {
  //     id: 36131,
  //     price: 30,
  //     frame: 25,
  //   },
  //   {
  //     id: 39901,
  //     price: 30,
  //     frame: 25,
  //   },
  //   {
  //     id: 265904,
  //     price: 25,
  //     frame: 20,
  //   },
  //   {
  //     id: 282234,
  //     price: 30,
  //     frame: 30,
  //   },
  //   {
  //     id: 266983,
  //     price: 25,
  //     frame: 25,
  //   },
  //   {
  //     id: 449534,
  //     price: 60,
  //     frame: 50,
  //   },
  //   {
  //     id: 625591,
  //     price: 400,
  //     frame: null,
  //   },
  //   {
  //     id: 337070,
  //     price: 25,
  //     frame: 20,
  //   },
  //   {
  //     id: 10946,
  //     price: 120,
  //     frame: 75,
  //   },
  //   {
  //     id: 751505,
  //     price: 100,
  //     frame: null,
  //   },
  //   {
  //     id: 827660,
  //     price: 30,
  //     frame: 30,
  //   },
  //   {
  //     id: 283099,
  //     price: 30,
  //     frame: 30,
  //   },
  //   {
  //     id: 13390,
  //     price: 25,
  //     frame: 25,
  //   },
  //   {
  //     id: 39737,
  //     price: 40,
  //     frame: null,
  //   },
  //   {
  //     id: 707455,
  //     price: 25,
  //     frame: 25,
  //   },
  //   {
  //     id: 10186,
  //     price: 60,
  //     frame: 60,
  //   },
  //   {
  //     id: 11227,
  //     price: 50,
  //     frame: 50,
  //   },
  //   {
  //     id: 262612,
  //     price: 35,
  //     frame: 35,
  //   },
  // ];

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
          <h3 id="object-details-header">Object Details</h3>
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
            Click here to learn more about this piece
          </a>
        </div>
        <div id="add-item-container">
          <AddToCart
            price={price}
            itemToAdd={item}
            itemsInCart={itemsInCart}
            setItemsInCart={setItemsInCart}
          ></AddToCart>
        </div>
      </div>
      <div>
        <img src={item.primaryImageSmall} alt={item.title}></img>
      </div>
    </div>
  );
}

export default ItemDetails;
