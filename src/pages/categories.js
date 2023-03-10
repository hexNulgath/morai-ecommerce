import { db } from "../Firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Item from "../components/Item/index";
import { Link, useParams } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState([]);
  let { category } = useParams();
  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "products"),
        where("category", "==", category)
      );
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setItems(docs);
      });
    };
    getProducts();
  }, [category]);
  return (
    <div className="bg-[#f7f3ed] w-full h-full pt-16 pb-80 z-0">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/detail/${item.id}`}>
                  <Item data={item} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
