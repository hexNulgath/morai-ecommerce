import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../Item";
import { Link } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios("https://dummyjson.com/products").then((res) =>
      setItems(res.data.products)
    );
  }, []);
  return (
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {items.map((item) => {
          return (
            <Link to={`/detail/${item.id}`}>
              <Item data={item} key={item.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
