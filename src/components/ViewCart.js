import React from "react";
import { Link } from "react-router-dom";

function ViewCart(props) {
  const handleItemRemoval = (e) => {
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

  const handleQuantityChange = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.closest(`.remove-item`));
  };

  let totalCost;
  const getTotalCost = () => {
    totalCost = 0;
    props.itemsInCart.map((item) => {
      return (totalCost += item[4] * item[3].price);
    });
    console.log(totalCost);
  };
  getTotalCost();

  return (
    <div>
      {!props.itemsInCart.length ? (
        <div className="view-cart-container">
          <h1>Your cart is empty.</h1>
          <Link to="/shop">
            <button>Click to Shop</button>
          </Link>
        </div>
      ) : (
        <div className="view-cart-container">
          <h1>Your Shopping Cart</h1>
          {/* <div id="view-cart-total"> */}
          {/* <h4>Cart Total: ${totalCost}</h4> */}
          {/* <button id="checkout-btn">Continue to Checkout</button> */}
          {/* </div> */}
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
                    <p>by {item[2].artistDisplayName}</p>
                    <p>
                      ${item[3].price} each
                      {item[3].frameOption ? `, ${item[3].frameOption}` : null}
                    </p>
                    {/* <p>quantity: {item[4]}</p> */}
                  </div>
                  <div className="view-cart-edit-container">
                    <p>subtotal: ${item[4] * item[3].price}</p>
                    <input
                      type="number"
                      value={item[4]}
                      onChange={handleQuantityChange}
                    ></input>
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
          {/* {props.itemsInCart.map((item) => {
            return (
              <div key={`${item[2].objectID}${item[3].frameOption}`}>
                <div>
                  <p>{item[4]} - </p>
                  <p>{item[2].title} at</p>
                  <p>
                    ${item[3].price} each
                    {item[3].frameOption ? `, ${item[3].frameOption}` : null}
                  </p>
                  <p>subtotal: ${item[4] * item[3].price}</p>
                </div>
              </div>
            );
          })} */}
          <div id="cart-total-container">
            <h3 id="cart-total">Total: ${totalCost}</h3>
          </div>
          <div id="view-cart-total">
            <button id="checkout-btn">Continue to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewCart;
