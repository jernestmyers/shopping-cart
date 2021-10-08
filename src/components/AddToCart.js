import React, { useEffect, useState } from "react";

function AddToCart(props) {
  const test = () => {
    console.log(props.price);
  };
  return (
    <div>
      {/* <p>${price.price}</p> */}
      <button onClick={test}>Add to Cart</button>
    </div>
  );
}

export default AddToCart;
