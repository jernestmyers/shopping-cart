import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewCart(props) {
  const [sortedItemsInCart, setSortedItemsInCart] = useState([]);

  useEffect(() => {
    if (props.itemsInCart.length) sortItemsInCart();
  }, []);

  const sortItemsInCart = () => {};

  const handleItemRemoval = (e) => {
    // const amendedCart = [];
    // props.itemsInCart.filter((item) => {
    //   if (e.target.dataset.title !== item.itemToAdd.title) {
    //     amendedCart.push(item);
    //   } else if (
    //     e.target.dataset.frameoption &&
    //     e.target.dataset.title === item.itemToAdd.title &&
    //     e.target.dataset.frameoption !== item.selectedPrice.frameOption
    //   ) {
    //     amendedCart.push(item);
    //   }
    // });
    // console.log(amendedCart);
    // props.setItemsInCart(amendedCart);
    props.setItemsInCart(
      props.itemsInCart.filter((item) => {
        if (e.target.dataset.title !== item.itemToAdd.title) {
          return item;
        } else if (
          e.target.dataset.frameoption &&
          e.target.dataset.title === item.itemToAdd.title &&
          e.target.dataset.frameoption !== item.selectedPrice.frameOption
        ) {
          return item;
        }
      })
    );
  };

  return (
    <div>
      {!props.itemsInCart.length ? (
        <div>
          <h4>Your cart is empty</h4>
          <Link to="/shop">
            <button>Shop</button>
          </Link>
        </div>
      ) : (
        <div>
          <h4>Your Shopping Cart</h4>
          {props.itemsInCart.map((item) => {
            return (
              <div>
                <p>{item.itemToAdd.title}</p>
                <div className="cart-thumbnail-container">
                  <img
                    className="cart-thumbnail"
                    src={item.itemToAdd.primaryImageSmall}
                    alt="Artwork displayed in Shopping Cart"
                  />
                </div>
                <p>
                  ${item.selectedPrice.price}{" "}
                  {item.selectedPrice.frameOption
                    ? item.selectedPrice.frameOption
                    : null}
                </p>
                <button
                  data-title={item.itemToAdd.title}
                  data-frameoption={item.selectedPrice.frameOption}
                  className="remove-item"
                  onClick={handleItemRemoval}
                >
                  Remove Item
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ViewCart;
