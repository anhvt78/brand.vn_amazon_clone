import React from "react";
import logo from "../img/temp/darkLogo.png";
import Image from "next/image";
import { ArrowRight } from "@mui/icons-material";

const registration = () => {
  return (
    <div class="font-bodyFont bg-gray-100">
      <div class="w-full">
        <div class="w-full bg-gray-100 pb-10">
          <form class="w-[370px] mx-auto flex flex-col items-center">
            <a href="/">
              <Image class="w-32" src={logo} alt="darkLogo" />
            </a>
            <div class="w-full border border-zinc-200 p-6">
              <h2 class="font-titleFont text-3xl font-medium mb-4">
                Create Account
              </h2>
              <div class="flex flex-col gap-3">
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">Your name</p>
                  <input
                    type="text"
                    class="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                    value=""
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">
                    Email or mobile phone number
                  </p>
                  <input
                    type="email"
                    class="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                    value=""
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">Password</p>
                  <input
                    type="password"
                    class="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                    value=""
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">Re-enter Password</p>
                  <input
                    type="password"
                    class="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                    value=""
                  />
                  <p class="text-xs text-gray-600">
                    Passwords must be at least 6 characters.
                  </p>
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
              <div>
                <p class="text-xs text-black">
                  Already have an account?
                  <a href="/signin">
                    <span class="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                      Sign in{" "}
                      <span>
                        <ArrowRight />
                      </span>
                    </span>
                  </a>
                </p>
                <p class="text-xs text-black -mt-2">
                  Buying for work?{" "}
                  <span class="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                    Create a free business account
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default registration;
