import React, { useState } from "react";
import logo from "../img/temp/darkLogo.png";
import Image from "next/image";
import { ArrowRight } from "@mui/icons-material";
import Link from "next/link";

const registration = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };

  //Email validation start
  const emailValidation = (email) => {
    return String(email)
    .toLowerCase()
    .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your name");
    }
    if (!email) {
      setErrEmail("Enter your email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    } else {
      if (password.length < 6) {
        setErrPassword("Passwords must be at least 6 characters");
      }
    }
    if (!cPassword) {
      setErrCPassword("Confirm your password");
    } else {
      if (cPassword !== password) {
        setErrCPassword("Password not matched");
      }
    }

    if (
        clientName && 
        email &&
        emailValidation(email) &&
        password &&
        password.length >= 6 &&
        cPassword &&
        cPassword === password
      ) {
        setClientName();
        setEmail();
        setPassword()
      }
  };
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
                    onChange={handleName}
                    type="text"
                    class="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  />
                  {errClientName && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>{" "}
                      {errClientName}
                    </p>
                  )}
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">
                    Email or mobile phone number
                  </p>
                  <input
                    onChange={handleEmail}
                    type="email"
                    class="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  />
                  {errEmail && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>{" "}
                      {errEmail}
                    </p>
                  )}
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">Password</p>
                  <input
                    onChange={handlePassword}
                    type="password"
                    class="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  />
                  {errPassword && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>{" "}
                      {errPassword}
                    </p>
                  )}
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">Re-enter Password</p>
                  <input
                    onChange={handleCPassword}
                    type="password"
                    class="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  />
                  {errCPassword && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>{" "}
                      {errCPassword}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleRegistration}
                  class="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                >
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
                  <Link href="/signin">
                    <span class="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                      Sign in{" "}
                      <span>
                        <ArrowRight />
                      </span>
                    </span>
                  </Link>
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
