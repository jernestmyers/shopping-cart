import React, { useEffect, useState } from "react";

function AddToCart(props) {
  const [selectedPrice, setSelectedPrice] = useState(props.price.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.price.frame) {
      if (
        !document.querySelector(`#unframed`).checked &&
        !document.querySelector(`#framed`).checked
      )
        alert(`Please choose a framing option.`);
    }
    console.log(selectedPrice);
  };

  const handleChange = (e) => {
    setSelectedPrice(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      {!props.price.frame ? (
        <form onSubmit={handleSubmit}>
          <p>${props.price.price}</p>
          <input type="submit" value="Add To Cart" />
        </form>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="radio"
              name="frameChoice"
              id="unframed"
              value={props.price.price}
            ></input>
            <label for="unframed">${props.price.price} unframed</label>
            <input
              onChange={handleChange}
              type="radio"
              name="frameChoice"
              id="framed"
              value={props.price.price + props.price.frame}
            ></input>
            <label for="framed">
              ${props.price.price + props.price.frame} framed
            </label>
            <input type="submit" value="Add To Cart" />
          </form>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
