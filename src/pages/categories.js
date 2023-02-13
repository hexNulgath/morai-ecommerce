import axios from "axios";
import { useEffect, useState } from "react";
import Item from "../components/Item/index";
import { Link, useParams } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState([]);
  let { category } = useParams();
  useEffect(() => {
    axios(`https://dummyjson.com/products/category/${category}`).then((res) =>
      setItems(res.data.products)
    );
  }, [category]);
  return (
    <div className="bg-[#f7f3ed] w-full h-full pt-16 pb-80 z-0">
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
    </div>
  );
};

export default ItemList;
