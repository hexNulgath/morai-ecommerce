import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  street: "",
};

const CartForm = () => {
  const { cache, finalPrice } = useContext(CartContext);
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "orden"), {
      values,
      cache,
      finalPrice,
    });
    console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div className="justify-center	flex ">
      <form
        className="w-full max-w-lg p-10  m-14 mt-40 bg-[#ffff] rounded-md		"
        onSubmit={handleOnSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nombre
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              name="name"
              required="required"
              placeholder="Jane"
              value={values.name}
              onChange={handleOnChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Apellido
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              required="required"
              value={values.lastName}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              name="email"
              type="email"
              placeholder="test@test.com"
              value={values.email}
              required="required"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Direccion
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="street"
              name="street"
              type="text"
              placeholder="av. Italia 3656"
              value={values.street}
              required="required"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <button
          type="submit"
          value="Submit"
          className="max-w-xs bg-[#f7f3ed] rounded-md  mt-4 text-center p-2"
        >
          Finalizar compra
        </button>
        {purchaseID ? (
          <div
            className="my-4 rounded-lg bg-success-100 py-5 px-6 text-base text-success-700 bg-[#059669] "
            role="alert"
          >
            <h4 className="mb-2 text-2xl font-medium leading-tight">
              Tu compra fue finalizada!
            </h4>
            <p className="mb-4">
              Tu id de compra es: <strong>{purchaseID} </strong>
            </p>
            <hr className="border-success-600 opacity-30" />
            <p className="mt-4 mb-0">
              por favor recuerdelo ante cualquier inconveniente
            </p>
          </div>
        ) : null}
      </form>
    </div>
  );
};
export default CartForm;
