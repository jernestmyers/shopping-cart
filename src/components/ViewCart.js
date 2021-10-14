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
              <div key={`${item[2].objectID}${item[3].frameOption}`}>
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
                  Remove Item
                </button>
              </div>
            );
          })}
          <h4>Total Cost: ${totalCost}</h4>
        </div>
      )}
    </div>
  );
}

export default ViewCart;
