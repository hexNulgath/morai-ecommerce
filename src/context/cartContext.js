import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cache, setCache] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  function clear() {
    setCache([]);
  }

  function removeById(id) {
    function removeItem(element, index) {
      return index !== cache.findIndex((x) => x.id === id);
    }
    const newCache = cache.filter(removeItem);

    setCache(newCache);
  }

  function quantityRefresh() {
    let quantityAmount = 0;
    cache.map((item) => {
      quantityAmount = quantityAmount + item.quantity;

      return <h2>{quantityAmount}</h2>;
    });
    setQuantity(quantityAmount);
  }

  return (
    <CartContext.Provider
      value={{
        cache,
        setCache,
        clear,
        removeById,
        quantity,
        quantityRefresh,
        finalPrice,
        setFinalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
