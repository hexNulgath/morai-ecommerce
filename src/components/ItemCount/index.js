import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const ItemCount = ({ item }) => {
  let [itemCount, setItemCount] = useState(0);
  const { cache, setCache } = useContext(CartContext);
  function duplicated() {
    return cache.find(({ id }) => id === item.id);
  }
  const onAdd = (e) => {
    e.preventDefault();

    if (itemCount > 0) {
      item.quantity = itemCount;

      if (duplicated() === undefined) {
        setCache([...cache, item]);

        setItemCount(0);
      } else {
        alert("ya esta en el carrito");
      }
    } else {
      alert("Seleccione una cantidad de items para agregar");
    }
  };
  const increase = () => {
    if (itemCount < item.stock) {
      setItemCount(itemCount + 1);
    } else {
      alert("No puedes agregar mas items que el stock disponible");
      return false;
    }
  };
  const decrease = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <div>
      {duplicated() === undefined ? (
        <div className="absolute grid grid-rows-1 grid-flow-col my-10">
          <div className="grid grid-rows-1 grid-flow-col bg-white rounded-lg border-stone-500 border-2">
            <button type="button" onClick={decrease}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/morai-ecommerce.appspot.com/o/minus.png?alt=media&token=1bdb50ab-9765-491b-b7dd-b8454b7eff2e"
                alt="remove item"
              />
            </button>

            <p className="pr-5 pl-5 pt-5 ">{itemCount}</p>
            <button type="button" onClick={increase}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/morai-ecommerce.appspot.com/o/plus.png?alt=media&token=a2ea6153-f744-4be1-ad72-6a5e9dffb7e3"
                alt="add item"
              />
            </button>
          </div>
          <div>
            <button
              className=" ml-20  p-5 font-VVDSRashfield bg-white rounded-lg border-stone-500 border-2"
              onClick={onAdd}
            >
              agregar al carrito
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute grid grid-rows-1 grid-flow-col my-10">
          <Link
            className=" mt-10  p-5 font-VVDSRashfield bg-white rounded-lg border-stone-500 border-2"
            to="/cart"
          >
            finalizar compra
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
