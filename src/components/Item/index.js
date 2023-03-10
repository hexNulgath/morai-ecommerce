import React from "react";

const Item = ({ data }) => {
  return (
    <>
      <div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={data.thumbnail}
            alt="product"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {data.title}
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">${data.price}</p>
        </div>
        <div className="text-left	">
          <p className="mt-1 text-sm text-gray-500">
            stock disponible: {data.stock}
          </p>
        </div>
      </div>
    </>
  );
};
export default Item;
