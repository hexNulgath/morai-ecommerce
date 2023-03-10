import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem";
import { Link } from "react-router-dom";

const CartContent = () => {
  const { cache, setFinalPrice } = useContext(CartContext);
  let totalPrice = 0;
  return (
    <>
      {cache.length > 0 && (
        <div className="p-10  m-14 mt-40 bg-[#ffff] rounded-md	">
          <div>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 text-center">
              <div className=" grid grid-cols-4 border-b-2">
                <h2 className=" font-medium border-r-2">Producto</h2>
                <h2 className="font-medium border-r-2">Cantidad</h2>
                <h2 className=" font-medium ">precio</h2>
                <h2>{""}</h2>
              </div>
              {cache.map((item) => {
                totalPrice = totalPrice + item.price * item.quantity;
                setFinalPrice(totalPrice);

                return (
                  <div key={item.id} className="border-b-2">
                    <CartItem data={item} />
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2">
              <h2 className="  text-center mt-10">
                Total a pagar: $ {totalPrice}
              </h2>{" "}
              <Link
                className="max-w-xs bg-[#f7f3ed] rounded-md font-VVDSRashfield mt-10 text-center p-2"
                to="/formContainer"
              >
                proceder al pago
              </Link>
            </div>
          </div>
        </div>
      )}
      {cache.length === 0 && (
        <div className="p-10  m-14 mt-40 bg-[#ffff] rounded-md	text-center">
          <div>
            <Link className=" mr-20 mt-10 font-VVDSRashfield text-xl" to="/">
              el carrito esta vacio
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default CartContent;
