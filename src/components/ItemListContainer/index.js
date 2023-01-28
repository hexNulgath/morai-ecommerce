import React from "react";
import "./styles.css";

const ItemListContainer = ({ greetings }) => {
  return (
    <div className="bg-[#f7f3ed] w-full h-full fixed z-[-3]">
      <div
        id="greetings"
        className="fixed mt-80 left-20 z-[-3] font-VVDSRashfield"
        style={{ textAlign: "center", fontSize: "70px" }}
      >
        {greetings}
      </div>
    </div>
  );
};

export default ItemListContainer;
