import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutModal from "./CheckoutModal.js";

function ViewCart(props) {
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);

  const handleItemRemoval = (e) => {
    props.setItemsInCart(
      props.itemsInCart.filter((item) => {
        if (e.target.dataset.title !== item[0]) {
          return true;
        } else if (
          e.target.dataset.frameoption &&
          e.target.dataset.title === item[0] &&
          e.target.dataset.frameoption !== item[1]
        ) {
          return true;
        }
      })
    );
  };

  const handleQuantityChange = (e) => {
    const inputToEditQuantity = e.target;
    if (inputToEditQuantity.validity.valid && inputToEditQuantity.value) {
      props.setItemsInCart(
        props.itemsInCart.map((item) => {
          if (e.target.dataset.title !== item[0]) {
            return item;
          } else if (
            e.target.dataset.frameoption &&
            e.target.dataset.title === item[0] &&
            e.target.dataset.frameoption !== item[1]
          ) {
            return item;
          } else {
            return [item[0], item[1], item[2], item[3], +e.target.value];
          }
        })
      );
    }
  };

  let totalCost;
  const getTotalCost = () => {
    totalCost = 0;
    props.itemsInCart.map((item) => {
      return (totalCost += item[4] * item[3].price);
    });
  };
  getTotalCost();

  const handlePathname = (e) => {
    const linkClicked = e.target.closest(`a`).id;
    if (linkClicked === `back-to-shop`) {
      props.setCurrentPath(`/shopping-cart/shop`);
    }
  };

  return (
    <div className="content-container">
      {!props.itemsInCart.length ? (
        <div className="view-cart-container">
          <h1>Your cart is empty.</h1>
          <Link
            onClick={handlePathname}
            id="back-to-shop"
            to="/shopping-cart/shop"
          >
            <button>Click to Shop</button>
          </Link>
        </div>
      ) : (
        <div className="view-cart-container">
          <h1>Your Shopping Cart</h1>
          {props.itemsInCart.map((item) => {
            return (
              <div key={`${item[2].objectID}${item[3].frameOption}`}>
                <div className="item-in-cart-container">
                  <div className="cart-thumbnail-container">
                    <img
                      className="cart-thumbnail"
                      src={item[2].primaryImageSmall}
                      alt="Artwork displayed in Shopping Cart"
                    />
                  </div>
                  <div className="view-cart-details-container">
                    <p>{item[2].title}</p>
                    <p className="middle-spacing-helper">
                      by {item[2].artistDisplayName}
                    </p>
                    <p>
                      ${item[3].price} each
                      {item[3].frameOption ? `, ${item[3].frameOption}` : null}
                    </p>
                  </div>
                  <div className="view-cart-edit-container">
                    <p>subtotal: ${item[4] * item[3].price}</p>
                    <div
                      id="quantity-container"
                      className="middle-spacing-helper"
                    >
                      <label className="quantity-label" htmlFor="quantityInput">
                        edit:
                      </label>
                      <input
                        data-title={item[0]}
                        data-frameoption={item[1]}
                        onChange={handleQuantityChange}
                        type="number"
                        id="quantityInput"
                        min="1"
                        step="1"
                        value={item[4]}
                      ></input>
                    </div>
                    <button
                      data-title={item[0]}
                      data-frameoption={item[1]}
                      className="remove-item"
                      onClick={handleItemRemoval}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div id="cart-total-container">
            <h3 id="cart-total">Total: ${totalCost}</h3>
          </div>
          <div id="view-cart-total">
            <button
              id="checkout-btn"
              onClick={() => setIsCheckoutClicked(true)}
            >
              Continue to Checkout
            </button>
          </div>
          <div id="viewCart-back-container">
            <Link
              onClick={handlePathname}
              id="back-to-shop"
              to="/shopping-cart/shop"
            >
              <p> &#8592; continue shopping</p>
            </Link>
          </div>
          {isCheckoutClicked ? (
            <CheckoutModal
              setIsCheckoutClicked={setIsCheckoutClicked}
            ></CheckoutModal>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default ViewCart;
