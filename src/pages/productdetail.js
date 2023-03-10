import { db } from "../Firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail/index";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner/index";

const ProductDetail = () => {
  const [item, setItem] = useState({});
  const [found, setFound] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        if (doc.id === id) {
          setItem({ ...doc.data(), id: doc.id });
          setFound(true);
        } else {
          return;
        }
      });
    };
    getProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [id]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bg-[#f7f3ed] w-full h-full pt-16 pb-80 z-0">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            {found === true ? (
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <ItemDetail data={item} />
              </div>
            ) : (
              <div className="mt-6  gap-y-10 gap-x-6  xl:gap-x-8">
                <p className="mb-2 text-2xl font-medium leading-tight font-VVDSRashfield">
                  el item que se busca no existe en la base de datos
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
