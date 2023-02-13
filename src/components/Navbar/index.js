import React, { useState } from "react";
import "./styles.css";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";

const Navbar = ({ props }) => {
  let [openMenu, setOpenMenu] = useState(false);

  let categories = [
    { name: "smartphones", link: "/categories/smartphones" },
    { name: "laptops", link: "/categories/laptops" },
    { name: "fragrances", link: "/categories/fragrances" },
    { name: "skincare", link: "/categories/skincare" },
    { name: "groceries", link: "/categories/furniture" },
    { name: "tops", link: "/categories/tops" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-40">
      <div className="md:flex items-center justify-between  bg-[#f7f3ed] py-4 md:px-10 px-7 z-40">
        <Link to={"/"} className=" flex items-center">
          <img
            src="./img/logo-nav.png"
            alt="logo"
            className="h-20	 max-w-140px"
          />
        </Link>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <img
            src={openMenu ? "./img/close.png" : "./img/menu.png"}
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
          <li className="md:ml-20 mb-10 md:mb-auto text-xl md:my-0 mr-20 cursor-pointer">
            <CartWidget numberOfItems={1}></CartWidget>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
