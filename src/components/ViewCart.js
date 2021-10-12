import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewCart(props) {
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
    // ORIGINAL CODE BELOW HERE
    props.setItemsInCart(
      props.itemsInCart.filter((item) => {
        if (e.target.dataset.title !== item[0]) {
          return item;
        } else if (
          e.target.dataset.frameoption &&
          e.target.dataset.title === item[0] &&
          e.target.dataset.frameoption !== item[1]
        ) {
          return item;
        }
      })
    );
  };

  const getTotalCost = () => {
    let totalCost = 0;
    props.itemsInCart.map((item) => {
      totalCost += item[4] * item[3].price;
    });
    console.log(totalCost);
  };
  getTotalCost();

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
              <div key={item[3].objectID}>
                <p>{item[2].title}</p>
                <div className="cart-thumbnail-container">
                  <img
                    className="cart-thumbnail"
                    src={item[2].primaryImageSmall}
                    alt="Artwork displayed in Shopping Cart"
                  />
                </div>
                <p>
                  ${item[3].price} each
                  {item[3].frameOption ? `, ${item[3].frameOption}` : null}
                </p>
                <p>quantity: {item[4]}</p>
                <button
                  data-title={item[0]}
                  data-frameoption={item[1]}
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
