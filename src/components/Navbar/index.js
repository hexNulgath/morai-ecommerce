import React, { useState } from "react";
import "./styles.css";

const Navbar = ({ children }) => {
  let [openMenu, setOpenMenu] = useState(false);

  let Categories = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <img src="./img/logo.png" alt="logo" />
          </span>
        </div>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <img
            src={openMenu ? "./img/close.png" : "./img/menu.png"}
            alt="close menu"
          ></img>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            openMenu ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Categories.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="md:ml-8 text-xl md:my-0 my-7">{children}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
