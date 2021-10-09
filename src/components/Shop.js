import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const metApiIds = [
    11116, 36131, 39901, 265904, 282234, 266983, 449534, 625591, 337070, 10946,
    751505, 827660, 283099, 13390, 39737, 707455, 10186, 11227, 262612,
  ];

  const [items, setItems] = useState([]);

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
      setItems(items.concat(replicaObjects));
    };
    fetchItems();
  }, []);

  // const fetchItems = async () => {
  //   const replicaObjects = [];
  //   await Promise.all(
  //     metApiIds.map(async (id) => {
  //       const artData = await fetch(
  //         `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
  //         { mode: "cors" }
  //       );
  //       const artObject = await artData.json();
  //       replicaObjects.push(artObject);
  //     })
  //   );
  //   setItems(items.concat(replicaObjects));
  // };

  return (
    <div>
      <p>Choose among several replicas from our collection.</p>
      <div className="shop-overall-container">
        {items.map((item) => (
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
