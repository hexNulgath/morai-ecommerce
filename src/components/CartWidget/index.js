import React from "react";
import { useContext, useEffect } from "react";
import "./styles.css";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { cache, quantity, quantityRefresh } = useContext(CartContext);

  useEffect(() => {
    quantityRefresh();
  }, [cache]);

  return (
    <div className="relative ">
      {cache.length > 0 && (
        <div className=" left-9 -top-2 md:-top-5 md:-right-12 md:left-auto z-[1] number-of-items">
          {quantity}
        </div>
      )}

      <img
        src="https://firebasestorage.googleapis.com/v0/b/morai-ecommerce.appspot.com/o/cart-icon.svg?alt=media&token=ce33ac23-2fe3-43cd-b644-e40ce7f14770"
        alt="cart"
        className=" object-cover cart-navbar h-10 w-auto"
      />
    </div>
  );
};

export default CartWidget;
