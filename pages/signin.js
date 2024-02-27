import React from "react";
import logo from "../img/temp/darkLogo.png";
import Image from "next/image";
import { ArrowRight } from "@mui/icons-material";

const signin = () => {
  return (
    <div>
      <div class="w-full bg-gray-100 pb-10">
        <form class="w-[350px] mx-auto flex flex-col items-center">
          <a href="/">
            <Image
              className="w-28 object-cover mt-1 text-black"
              src={logo}
              alt="logoImg"
            />
          </a>
          <div class="w-full border border-zinc-200 p-6">
            <h2 class="font-titleFont text-3xl font-medium mb-4">Sign in</h2>
            <div class="flex flex-col gap-3">
              <div class="flex flex-col gap-2">
                <p class="text-sm font-medium">Email or mobile phone number</p>
                <input
                  class="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="email"
                  value=""
                />
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-sm font-medium">Password</p>
                <input
                  class="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                  value=""
                />
              </div>
              <button class="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
                Continue
              </button>
            </div>
            <p class="text-xs text-black leading-4 mt-4">
              By Continuing, you agree to Amazon's{" "}
              <span class="text-blue-600">Conditions of Use </span>and{" "}
              <span class="text-blue-600">Privace Notice.</span>
            </p>
            <p class="text-xs text-gray-600 mt-4 cursor-pointer group">
              <ArrowRight />
              <span class="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                Need help?
              </span>
            </p>
          </div>
          <p class="w-full text-xs text-gray-600 mt-4 flex items-center">
            <span class="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            <span class="w-1/3 text-center">New to Amazon?</span>
            <span class="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
          </p>
          <a class="w-full" href="/registration">
            <button class="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
              Create your Amazon account
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default signin;
