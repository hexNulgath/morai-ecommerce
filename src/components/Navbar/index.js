import React, { useState } from "react";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";

const Navbar = ({ props }) => {
  let [openMenu, setOpenMenu] = useState(false);

  let categories = [
    { name: "papeleria", link: "/categories/papeleria" },
    { name: "prints", link: "/categories/prints" },
    { name: "stickers", link: "/categories/stickers" },
    { name: "textil", link: "/categories/textil" },
    { name: "3D prints", link: "/categories/3Dprints" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-40">
      <div className="md:flex items-center justify-between  bg-[#f7f3ed] py-4 md:px-10 px-7 z-40">
        <Link to={"/"} className=" flex items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/morai-ecommerce.appspot.com/o/logo-nav.png?alt=media&token=770ae378-794b-4e4f-b4e7-f0bd2f035a49"
            alt="logo"
            className="h-20	 max-w-140px"
          />
        </Link>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <img
            src={
              openMenu
                ? "https://firebasestorage.googleapis.com/v0/b/morai-ecommerce.appspot.com/o/close.png?alt=media&token=858a06d3-7866-444b-b5b7-0c127253e09d"
                : "https://firebasestorage.googleapis.com/v0/b/morai-ecommerce.appspot.com/o/menu.png?alt=media&token=8aed5180-24f3-4985-9993-6ba284a163f2"
            }
            alt="close menu"
            className="h-20	"
          ></img>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:drop-shadow-none  bg-[#f7f3ed] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            openMenu ? "top-20 drop-shadow" : "top-[-490px]"
          }`}
        >
          {categories.map((link) => (
            <li key={link.name} className="md:ml-20 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-purple-600 duration-500 font-VVDSRashfield"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link
            className="md:ml-20 mb-10 md:mb-auto text-xl md:my-0 mr-20 cursor-pointer"
            to="/cart"
          >
            <CartWidget numberOfItems={1}></CartWidget>{" "}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
