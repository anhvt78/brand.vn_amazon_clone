import {
  decrementQty,
  deleteItem,
  incrementQty,
  resetCart,
} from "@/redux/amazonSlide";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import images from "../img";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazonReducer.products);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    let amount = 0;
    products.map((item) => {
      amount += item.price * item.quantity;
    });
    amount = Math.round(amount * 100) / 100;
    setTotalValue(amount);
  }, products);

  return (
    <div class="w-full bg-gray-100 p-4">
      {products.length > 0 ? (
        <div class="container mx-auto h-auto grid grid-cols-5 gap-8">
          <div class="w-full bg-white px-4 col-span-5 xl:col-span-4">
            <div class="font-titleFont hidden xl:flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
              <h1 class="text-3xl font-semibold">Shopping Cart</h1>
              <h3 class="text-xl font-semibold">Subtotal</h3>
            </div>
            <div>
              {products.map((item) => (
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
              ))}
            </div>
            <div class="w-full py-4">
              <button
                onClick={() => dispatch(resetCart())}
                class="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div class="col-span-5 md:col-span-3 lg:col-span-2 xl:col-span-1 bg-white h-52 flex items-center p-4">
            <div>
              <p class="flex gap-2 items-start text-sm">
                <span>
                  <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium bg-white text-green-500 rounded-full css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="CheckCircleIcon"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                  </svg>
                </span>
                Your order qualifies for FREE Shipping Choose this option at
                checkout. See details....
              </p>
              <div>
                <p class="font-semibold px-6 py-1 flex items-center justify-between">
                  Total: <span class="text-lg font-bold">${totalValue}</span>
                </p>
              </div>
              <button class="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center items-center gap-4 py-10"
        >
          <div>
            <Image
              className="w-80 rounded-lg p-4 mx-auto"
              src={images.emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold">
              Your Cart fells lonely
            </h1>
            <p className="text-sm text-center">
              {" "}
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link href={"/"} className="headerHover">
              <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default cart;
