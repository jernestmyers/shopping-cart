import React from "react";
import Portal from "./Portal";
import { Link } from "react-router-dom";
import "../styles/Modal.css";

const ConfirmAddToCart = (props) => {
  const handleModal = (e) => {
    // if (e.target.closest(`a`).id === `back-to-item-shop`) {
    // props.close();
    // }
    props.setIsSubmitValid(false);
  };

  console.log(props.itemToAdd);
  console.log(props.selectedQuantity);
  console.log(props.selectedPrice);

  return (
    <Portal>
      <div id="confirm-add-modal-container">
        <div id="confirm-add-modal-content" style={{ opacity: "95%" }}>
          <h2 id="confirm-add-modal-header">Success!</h2>
          <p>
            You added {props.selectedQuantity}{" "}
            {props.selectedQuantity === 1 ? `item` : `items`} to your cart.
          </p>
          <Link onClick={handleModal} to="/cart">
            <button id="modal-to-cart-btn">View Cart</button>
          </Link>
          <div id="back-to-item-container">
            <Link
              onClick={handleModal}
              id="back-to-shop"
              to={props.currentPath}
            >
              <p> &#8592; continue shopping</p>
            </Link>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default ConfirmAddToCart;
