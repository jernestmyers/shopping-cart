import React, { useEffect, useState } from "react";

function AddToCart(props) {
  const [selectedPrice, setSelectedPrice] = useState(props.price.price);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const organizeCart = () => {
    let isPresent = false;
    if (props.itemsInCart.length) {
      props.setItemsInCart(
        props.itemsInCart.map((item) => {
          if (
            props.itemToAdd.title === item[0] &&
            selectedPrice.frameOption === item[1]
          ) {
            isPresent = true;
            return [
              item[0],
              item[1],
              item[2],
              item[3],
              (item[4] += selectedQuantity),
            ];
          } else {
            return item;
          }
        })
      );
    }
    if (!isPresent) {
      props.setItemsInCart(
        props.itemsInCart.concat([
          [
            props.itemToAdd.title,
            selectedPrice.frameOption,
            props.itemToAdd,
            selectedPrice,
            selectedQuantity,
          ],
        ])
      );
    }
  };

  useEffect(() => {
    if (!props.price.frame) {
      setSelectedPrice((prevState) => ({
        ...prevState,
        price: props.price.price,
        frameOption: props.price.frame,
      }));
    }
  }, [props.price]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.price.frame) {
      if (
        !document.querySelector(`#unframed`).checked &&
        !document.querySelector(`#framed`).checked
      ) {
        alert(`Please choose a framing option.`);
      } else {
        organizeCart();
      }
    } else {
      organizeCart();
    }
  };

  const handleFrameChoice = (e) => {
    setSelectedPrice({ price: e.target.value, frameOption: e.target.id });
  };

  const handleQuantity = (e) => {
    setSelectedQuantity(+e.target.value);
  };

  return (
    <div>
      {!props.price.frame ? (
        <form className="add-item-form" onSubmit={handleSubmit}>
          <p>${props.price.price} textile</p>
          <input className="add-btn" type="submit" value="Add To Cart" />
        </form>
      ) : (
        <div>
          <form className="add-item-form" onSubmit={handleSubmit}>
            <div className="radio-framing">
              <input
                onChange={handleFrameChoice}
                type="radio"
                name="frameChoice"
                id="unframed"
                value={props.price.price}
              ></input>
              <label htmlFor="unframed">${props.price.price} unframed</label>
              <input
                onChange={handleFrameChoice}
                type="radio"
                name="frameChoice"
                id="framed"
                value={props.price.price + props.price.frame}
              ></input>
              <label htmlFor="framed">
                ${props.price.price + props.price.frame} framed
              </label>
            </div>
            <div>
              <label className="quantity-label" htmlFor="quantityInput">
                quantity:
              </label>
              <input
                onChange={handleQuantity}
                type="number"
                id="quantityInput"
                min="1"
                value={selectedQuantity}
              ></input>
            </div>
            <input className="add-btn" type="submit" value="Add To Cart" />
          </form>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
