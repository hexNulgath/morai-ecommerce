import axios from "axios";
import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail/index";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [item, setItem] = useState({});
  let { id } = useParams();
  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`).then((res) =>
      setItem(res.data)
    );
  }, [id]);
  return (
    <div className="bg-[#f7f3ed] w-full h-full pt-16 pb-80 z-0">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <ItemDetail data={item} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
