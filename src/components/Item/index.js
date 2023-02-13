import React from "react";

const Item = ({ data }) => {
  return (
    <>
      <div class="group relative">
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={data.images[0]}
            alt="product"
            class="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              {data.title}
            </h3>
            <p class="mt-1 text-sm text-gray-500">{data.brand}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">${data.price}</p>
        </div>
      </div>
    </>
  );
};
export default Item;
