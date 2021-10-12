import React, { useEffect, useState } from "react";

function AddToCart(props) {
  const [selectedPrice, setSelectedPrice] = useState(props.price.price);
  //   console.log(props);
  const updateTextilePrice = () => {
    setSelectedPrice({ price: props.price.price, frameOption: null });
  };

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
            return [item[0], item[1], item[2], item[3], (item[4] += 1)];
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
            1,
          ],
        ])
      );
    }
  };

  useEffect(() => {
    if (!props.price.frame) {
      updateTextilePrice();
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.price.frame) {
      if (
        !document.querySelector(`#unframed`).checked &&
        !document.querySelector(`#framed`).checked
      ) {
        alert(`Please choose a framing option.`);
      } else {
        // props.itemsInCart.map((item) => {
        //   if (
        //     props.itemToAdd.title === item[0] &&
        //     selectedPrice.frameOption === item[1]
        //   ) {
        //     setQuantity((quantity += 1));
        //   } else {
        //     props.setItemsInCart(
        //       props.itemsInCart.concat([
        //         [
        //           props.itemToAdd.title,
        //           selectedPrice.frameOption,
        //           props.itemToAdd,
        //           selectedPrice,
        //           1,
        //         ],
        //       ])
        //     );
        //   }
        // });
        organizeCart();
      }
      console.log(props.itemsInCart);
    } else {
      //   props.setItemsInCart(
      //     props.itemsInCart.concat([
      //       [props.itemToAdd.title, null, props.itemToAdd, selectedPrice],
      //     ])
      //   );
      //   let isPresent = false;
      updateTextilePrice();
      organizeCart();
      //   if (props.itemsInCart.length) {
      //     props.setItemsInCart(
      //       props.itemsInCart.map((item) => {
      //         if (
      //           props.itemToAdd.title === item[0] &&
      //           selectedPrice.frameOption === item[1]
      //         ) {
      //           isPresent = true;
      //           return [item[0], item[1], item[2], item[3], (item[4] += 1)];
      //         } else {
      //           return item;
      //         }
      //       })
      //     );
      //   }
      //   if (!isPresent) {
      //     props.setItemsInCart(
      //       props.itemsInCart.concat([
      //         [
      //           props.itemToAdd.title,
      //           selectedPrice.frameOption,
      //           props.itemToAdd,
      //           selectedPrice,
      //           1,
      //         ],
      //       ])
      //     );
      //   }
      //   console.log(props.itemsInCart);
    }
    // console.log(selectedPrice);
  };

  const handleChange = (e) => {
    setSelectedPrice({ price: e.target.value, frameOption: e.target.id });
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
            <label htmlFor="unframed">${props.price.price} unframed</label>
            <input
              onChange={handleChange}
              type="radio"
              name="frameChoice"
              id="framed"
              value={props.price.price + props.price.frame}
            ></input>
            <label htmlFor="framed">
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
