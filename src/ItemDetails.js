import React, { useEffect, useState } from "react";

function ItemDetails({ match }) {
  const metApiIds = [
    11116, 36131, 39901, 265904, 282234, 266983, 449534, 625591, 337070, 10946,
    751505, 827660, 283099, 13390, 39737, 707455, 10186, 11227, 262612,
  ];

  useEffect(() => {
    fetchItem();
    console.log(match.params.objectID);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const artData = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${match.params.objectID}`,
      { mode: "cors" }
    );
    const artObject = await artData.json();
    setItem(artObject);
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
      <a href={item.objectURL} target="_blank" rel="noopener noreferrer">
        Click here to learn more about this piece.
      </a>
    </div>
  );
}

export default ItemDetails;
