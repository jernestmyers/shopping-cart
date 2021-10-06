import React, { useState, useEffect } from "react";

function Shop() {
  const metApiIds = [
    11116, 36131, 39901, 265904, 282234, 266983, 449534, 625591, 337070, 10946,
    751505, 827660, 283099, 13390, 39737, 707455, 10186, 11227, 262612,
  ];

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  //   const fetchItems = async () => {
  //     // metApiIds.map((id) => {
  //     const artData = await fetch(
  //       `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
  //     );
  //     const artObject = await artData.json();
  //     console.log(artObject);
  //     setItems(items.concat(artObject));
  //     // });
  //   };

  const fetchItems = async () => {
    const replicaObjects = [];
    await Promise.all(
      metApiIds.map(async (id) => {
        const artData = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        );
        const artObject = await artData.json();
        replicaObjects.push(artObject);
      })
    );
    setItems(items.concat(replicaObjects));
  };

  //   const fetchItems = async () => {
  //     const homerData = await fetch(
  //       `https://collectionapi.metmuseum.org/public/collection/v1/objects/${metApiIds[0]}`
  //     );
  //     const homerObject = await homerData.json();
  //     console.log(homerObject);
  //     setItems(items.concat(homerObject));
  //   };

  return (
    <div>
      <h1>Shop Our Replicas</h1>
      <p>Choose one of several replicas from our most cherished possessions.</p>
      <div>
        {items.map((item) => (
          <p key={item.objectID}>{item.title}</p>
        ))}
      </div>
    </div>
  );
}

export default Shop;
