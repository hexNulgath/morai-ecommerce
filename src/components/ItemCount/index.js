import React, { useState } from "react";
import "./styles.css";
import minus from "../../resources/minus.png";
import plus from "../../resources/plus.png";

const ItemCount = ({ itemStock }) => {
  let [itemCount, setItemCount] = useState(0);

  function onAdd(itemCount) {
    //do something
  }

  return (
    <div className="absolute grid grid-rows-1 grid-flow-col my-10">
      <div class="grid grid-rows-1 grid-flow-col bg-white rounded-lg border-stone-500 border-2">
        <button
          type="button"
          onClick={itemCount === 0 ? null : () => setItemCount(itemCount - 1)}
        >
          <img src={minus} alt="remove item" />
        </button>

        <p className="pr-5 pl-5 pt-5 ">{itemCount}</p>
        <button
          type="button"
          onClick={
            itemCount === itemStock ? null : () => setItemCount(itemCount++)
          }
        >
          <img src={plus} alt="add item" />
        </button>
      </div>

      <div>
        <button
          className=" ml-20  p-5 font-VVDSRashfield bg-white rounded-lg border-stone-500 border-2"
          onClick={itemStock === 0 ? null : onAdd(itemCount)}
        >
          agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
