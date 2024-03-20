import React from "react";

const seller = () => {
  return (
    <div class="w-full bg-gray-100">
      <div class="container mx-auto h-auto grid grid-cols-5 gap-4">
        <div class="col-span-1 md:visible xl:col-span-1 bg-white py-4">ABC</div>
        <div class="w-full bg-white p-4 col-span-4 xl:col-span-4 gap-4">
          <div class="font-titleFont hidden xl:flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
            <h1 class="text-3xl font-semibold">Shopping Cart</h1>
            <h3 class="text-xl font-semibold">Subtotal</h3>
          </div>
          <div>
            {/* {products.map((item) => (
              <div class="w-full border-b-[1px] border-b-gray-300 p-4 md:p-0 md:py-4 flex items-center gap-6">
                <div class="w-full flex flex-col md:flex-row items-center gap-6">
                  <div class="w-full md:w-2/5 xl:w-1/5">
                    <img
                      class="w-full h-44 object-contain"
                      src={item.image}
                      alt="productImg"
                    />
                  </div>
                  <div class="w-full flex flex-col gap-2 xl:gap-1">
                    <h2 class="font-semibold text-lg">{item.title}</h2>
                    <p class="xl:pr-10 text-sm">{item.description}</p>
                    <p class="text-base">
                      Unit Price:{" "}
                      <span class="font-semibold">${item.price}</span>
                    </p>
                    <div class="bg-[#F0F2F2] flex justify-center items-center gap-2 w-36 py-1 text-center drop-shadow-lg rounded-md">
                      <p class="text-base font-normal">Qty:</p>
                      <p
                        onClick={() => dispatch(decrementQty(item.id))}
                        class="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                      >
                        -
                      </p>
                      <p class="font-titleFont text-base font-semibold text-amazon_blue">
                        {item.quantity}
                      </p>
                      <p
                        onClick={() => dispatch(incrementQty(item.id))}
                        class="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                      >
                        +
                      </p>
                    </div>
                    <button
                      onClick={() => dispatch(deleteItem(item.id))}
                      class="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300"
                    >
                      Delete Item
                    </button>
                  </div>
                  <div class="w-full md:w-24">
                    <p class="text-lg xl:w-24 font-titleFont font-semibold">
                      ${Math.round(item.price * item.quantity * 100) / 100}
                    </p>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
          <div class="w-full py-4">
            <button
              //   onClick={() => dispatch(resetCart())}
              class="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default seller;
