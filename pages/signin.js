import React, { useState } from "react";
import logo from "../img/temp/darkLogo.png";
import Image from "next/image";
import { ArrowRight } from "@mui/icons-material";
import Link from "next/link";
import { databaseRef } from "../database/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { setUserInfo } from "@/redux/amazonSlide";

const signin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = getAuth(databaseRef);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const [userEmailErr, setUserEmailErr] = useState(false);
  const [userPassErr, setUserPassErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    }
    if (email && password) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(setUserInfo({
            _id: user.uid,
            userName: user.displayName,
            email: user.email,
            Image: user.photoURL
          }))
          // ...
          setLoading(false);
          setSuccessMsg("Logged in Successfully! Welcome you back!");
          setTimeout(() => {
            // navigate("/signin");
            router.push("/");
          }, 2000);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-email")) {
            setUserEmailErr("Invalid Email");
          }
          if (errorCode.includes("auth/wrong-password")) {
            setUserPassErr("Wrong password! Try again");
          }
          if (errorCode.includes("auth/invalid-credential")) {
            setUserPassErr("Invalid Email or Password");
          }
          console.log("error.code = ", error.code);
          console.log("error.message = ", error.message);
          const errorMessage = error.message;
        });
    }
  };
  return (
    <div className="w-full">
      <div class="w-full bg-gray-100 pb-10">
        {successMsg ? (
          <div className="w-full flex justify-center items-center py-32">
            <p className="border-[1px] border-green-600 text-green-500 font-titleFont text-lg font-semibold px-6 py-2">
              {successMsg}
            </p>
          </div>
        ) : (
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
                  <p class="text-sm font-medium">
                    Email or mobile phone number
                  </p>
                  <input
                    onChange={handleEmail}
                    class="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                    type="email"
                    value={email}
                  />
                  {errEmail && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>{" "}
                      {errEmail}
                    </p>
                  )}
                  {userEmailErr && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>{" "}
                      {userEmailErr}
                    </p>
                  )}
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">Password</p>
                  <input
                    onChange={handlePassword}
                    class="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                    type="password"
                    value={password}
                  />
                  {errPassword && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>{" "}
                      {errPassword}
                    </p>
                  )}
                  {userPassErr && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic font-titleFont font-extrabold text-base">
                        !
                      </span>{" "}
                      {userPassErr}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleLogin}
                  class="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                >
                  Continue
                </button>
                {loading && (
                  <div className="flex justify-center">
                    <RotatingLines
                      visible={true}
                      height="50"
                      width="50"
                      color="#febd69"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                )}
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
            <Link class="w-full" href="/registration">
              <button class="w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">
                Create your Amazon account
              </button>
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default signin;
