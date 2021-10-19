import React from "react";
import Portal from "./Portal";
import "../styles/Modals.css";

const CheckoutModal = (props) => {
  const handleModal = (e) => {
    props.setIsCheckoutClicked(false);
  };

  return (
    <Portal>
      <div id="checkout-modal-container">
        <div id="checkout-modal-content" style={{ opacity: "95%" }}>
          <h3 id="checkout-modal-header">Thanks for visiting!</h3>
          <p className="checkout-modal-msg">
            Visit my{" "}
            <a
              className="linkToMet"
              href="https://github.com/jernestmyers"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            or{" "}
            <a
              className="linkToMet"
              href="https://www.linkedin.com/in/jernestmyers/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            if you'd like to connect, collaborate and/or provide constructive
            feedback.
          </p>
          <p className="checkout-modal-msg">
            Interested in real replicas?{" "}
            <a
              className="linkToMet"
              href="https://store.metmuseum.org/"
              target="_blank"
              rel="noreferrer"
            >
              Visit The Met's official shop here
            </a>
            .
          </p>
          <div onClick={handleModal}>
            <p className="modal-back-arrow"> &#8592; continue exploring</p>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default CheckoutModal;
