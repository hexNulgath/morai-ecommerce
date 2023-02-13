import React from "react";
import ItemCount from "../ItemCount";

const ItemDetail = (data) => {
  let item = data.data;
  return (
    <>
      <div class="relative z-10" role="dialog" aria-modal="true">
        <div class="fixed inset-0 hidden bg-[#f7f3ed] bg-opacity-75 transition-opacity md:block"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <div class="flex w-full  transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
              <div class="relative flex w-full h-full items-center  bg-white px-4 pt-14 pb-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <div class="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                  <div class="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg  sm:col-span-4 lg:col-span-5">
                    <img
                      src={item.thumbnail}
                      alt="loading..."
                      class="object-cover object-center"
                    />
                    <div class="mt-10">
                      <div class="flex items-center justify-between">
                        <h4 class="text-sm font-medium ">
                          Stock: {item.stock}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div class="sm:col-span-8 lg:col-span-7">
                    <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">
                      {item.title}
                    </h2>

                    <section aria-labelledby="information-heading" class="mt-2">
                      <h3 id="information-heading" class="sr-only">
                        Product information
                      </h3>

                      <p class="text-2xl text-gray-900">${item.price}</p>
                    </section>

                    <section aria-labelledby="options-heading" class="mt-10">
                      <h3 id="options-heading" class="sr-only">
                        Product options
                      </h3>

                      <form>
                        <div>
                          <h4 class="text-sm font-medium text-gray-900">
                            {item.description}
                          </h4>
                        </div>

                        <div class="pb-10">
                          <ItemCount itemStock={item.stock} />
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
