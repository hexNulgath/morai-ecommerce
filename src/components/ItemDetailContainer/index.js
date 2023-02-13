import { useEffect, useState, useParams } from "react";
import ItemDetail from "../ItemDetail";

const ItemDetailContainer = () => {
  let [prop, setProp] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setProp(json.products.id));
    return () => {};
  }, []);

  return <ItemDetail data={prop} />;
};

export default ItemDetailContainer;
