import React from "react";
import "./styles.css";

const CartWidget = ({ numberOfItems }) => {
  return (
    <div>
      <img
        src="./img/cart-icon.svg"
        alt="cart"
        id="cart-navbar"
        className="md:relative fixed"
      />
      <div
        id="number-of-items"
        className="md:top-5 md:right-5 absolute top-70 left-20 md:left-auto "
      >
        {numberOfItems}
      </div>
    </div>
  );
};

export default CartWidget;
