import React from "react";
import "./styles.css";
import ItemList from "../ItemList";

const ItemListContainer = ({ greetings }) => {
  return (
    <div className="bg-[#f7f3ed] w-full h-full  z-0">
      <div
        id="greetings"
        className=" pt-80 left-20  font-VVDSRashfield"
        style={{ textAlign: "center", fontSize: "70px" }}
      >
        {greetings}
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;
