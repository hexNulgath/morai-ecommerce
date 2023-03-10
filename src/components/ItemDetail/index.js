import React from "react";
import ItemCount from "../ItemCount";

const ItemDetail = (data) => {
  let item = data.data;
  return (
    <>
      <div className="relative z-10" role="dialog" aria-modal="true">
        <div className="fixed inset-0 hidden bg-[#f7f3ed] bg-opacity-75 transition-opacity md:block"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <div className="flex w-full  transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
              <div className="relative flex w-full h-full items-center  bg-white px-4 pt-14 pb-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg  sm:col-span-4 lg:col-span-5">
                    <img
                      src={item.thumbnail}
                      alt="loading..."
                      className="object-cover object-center"
                    />
                    <div className="mt-10">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium ">
                          Stock: {item.stock}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                      {item.title}
                    </h2>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-2"
                    >
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-2xl text-gray-900">${item.price}</p>
                    </section>

                    <section
                      aria-labelledby="options-heading"
                      className="mt-10"
                    >
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <form>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            {item.description}
                          </h4>
                        </div>

                        <div className="pb-10">
                          <ItemCount item={item} />
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
