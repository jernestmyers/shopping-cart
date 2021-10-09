import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewCart(props) {
  console.log(props.itemsInCart);
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
                <p>${item.selectedPrice.price}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ViewCart;
