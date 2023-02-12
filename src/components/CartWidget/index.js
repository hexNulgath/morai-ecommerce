import React from "react";
import "./styles.css";

const CartWidget = ({ numberOfItems }) => {
  return (
    <div className="relative ">
      <div className="absolute left-9 -top-2 md:-top-5 md:-right-12 md:left-auto z-[1] number-of-items">
        {numberOfItems}
      </div>
      <img
        src="./img/cart-icon.svg"
        alt="cart"
        className="absolute object-cover cart-navbar"
      />
    </div>
  );
};

export default CartWidget;
