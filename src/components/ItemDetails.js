import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart.js";

function ItemDetails({ match }) {
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

  const [item, setItem] = useState({});
  const [price, setPrice] = useState({});

  useEffect(() => {
    fetchItem();
    matchPrice();
  }, []);

  const fetchItem = async () => {
    const artData = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${match.params.objectID}`,
      { mode: "cors" }
    );
    const artObject = await artData.json();
    setItem(artObject);
  };

  const matchPrice = () => {
    priceList.map((obj) => {
      if (obj.id === +match.params.objectID) {
        setPrice(obj);
      }
    });
  };

  return (
    <div>
      <h4>
        {item.title} by{" "}
        {item.artistDisplayName ? item.artistDisplayName : `unknown`},{" "}
        {item.objectDate}
      </h4>
      <img src={item.primaryImageSmall} alt={item.title}></img>
      <p>{item.medium}</p>
      <p>{item.dimensions}</p>
      <a
        className="linkToMet"
        href={item.objectURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here to learn more about this piece.
      </a>
      <AddToCart price={price} item={item}></AddToCart>
    </div>
  );
}

export default ItemDetails;
