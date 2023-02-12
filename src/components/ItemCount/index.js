import React, { useState } from "react";
import "./styles.css";

const ItemCount = ({ itemName = "item" }) => {
  let [itemCount, setItemCount] = useState(0);
  let itemStock = 10;

  function onAdd(itemCount) {
    //do something
  }

  return (
    <div className="absolute grid grid-rows-1 grid-flow-col">
      <div className=" m-10 bg-stone-200 p-10 rounded-lg">
        <p className="pb-5 font-VVDSRashfield">{itemName}</p>
        <div class="grid grid-rows-1 grid-flow-col bg-stone-100 rounded-lg border-stone-500 border-2">
          <button
            onClick={itemCount === 0 ? null : () => setItemCount(itemCount - 1)}
          >
            <img src="./img/minus.png" alt="remove item" />
          </button>

          <p className="pr-10 pl-10 pt-5 ">{itemCount}</p>
          <button
            onClick={
              itemCount === itemStock ? null : () => setItemCount(itemCount++)
            }
          >
            <img src="./img/plus.png" alt="add item" />
          </button>
        </div>
      </div>
      <div>
        <button
          className=" m-10 p-3 font-VVDSRashfield bg-stone-100 rounded-lg border-stone-500 border-2"
          onClick={itemStock === 0 ? null : onAdd(itemCount)}
        >
          agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
