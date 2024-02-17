import { Menu } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
// import { StateProps } from "../../../type";
// import { signOut } from "next-auth/react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeUser } from "@/store/nextSlice";

const HeaderBottom = () => {
//   const dispatch = useDispatch();
//   const { userInfo } = useSelector((state: StateProps) => state.next);
//   const handleSignOut = () => {
//     signOut();
//     dispatch(removeUser());
//   };
const [sidebar, setSidebar] = useState(false);
  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li onClick={() => setSidebar(!sidebar)} className="headerHover flex items-center gap-1"><Menu/>All</li>
        <li className="headerHover">Todays Deals</li>
        <li className="headerHover">Customer Service</li>
        <li className="headerHover">Gift Cards</li>
        <li className="headerHover">Registry</li>
        <li className="headerHover">Sell</li>
      </ul>
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <div className="w-[350px] h-full bg-white border border-black">
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                <AccountCircle/>
                <h3 className="font-titleFont font-bold text-lg tracking-wide">Hello, Sign In</h3>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <p className="flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        <LuMenu className="text-xl" /> All
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Todays Deals
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Customer Service
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Registry
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Gift Cards
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Sell
      </p> */}
      {/* {userInfo && (
        <button
          onClick={handleSignOut}
          className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300"
        >
          Sign Out
        </button>
      )} */}
    </div>
  );
};

export default HeaderBottom;
