import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartItem = ({ data }) => {
  let item = data;
  const { removeById } = useContext(CartContext);
  function deleteItem() {
    removeById(item.id);
  }
  return (
    <div className=" grid grid-cols-4 ">
      <h2 className="text-sm font-medium border-r-2">{item.title}</h2>
      <h2 className="text-sm font-medium border-r-2"> {item.quantity}</h2>
      <h2 className="text-sm font-medium ">$ {item.quantity * item.price}</h2>

      <img
        onClick={deleteItem}
        src="https://firebasestorage.googleapis.com/v0/b/morai-ecommerce.appspot.com/o/close.png?alt=media&token=858a06d3-7866-444b-b5b7-0c127253e09d"
        alt="eliminar"
        className="w-5 h-5 text-center cursor-pointer mb-3"
      ></img>
    </div>
  );
};
export default CartItem;
