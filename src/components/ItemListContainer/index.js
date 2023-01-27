import React from "react";
import "./styles.css";

const ItemListContainer = ({ greetings }) => {
  return (
    <div id="greetings" className="fixed top-50 left-20 z-[-3]">
      {greetings}
    </div>
  );
};

export default ItemListContainer;
