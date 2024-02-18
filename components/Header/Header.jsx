import Image from "next/image";
import logo from "../../img/temp/logo.png";
import cartIcon from "../../img/temp/cartIcon.png";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
// import { useSelector, useDispatch } from "react-redux";
// import { StateProps, StoreProduct } from "../../../type";
// import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { ArrowDropDownOutlined, ShoppingCart } from "@mui/icons-material";
// import { addUser } from "@/store/nextSlice";
// import SearchProducts from "../SearchProducts";
import { allItems } from "@/constants";
const Header = () => {
  const [showAll, setShowAll] = useState(false);
  // const { data: session } = useSession();

//   const { productData, favoriteData, userInfo, allProducts } = useSelector(
//     (state: StateProps) => state.next
//   );
//   const dispatch = useDispatch();
  // useEffect(() => {
  //   setAllData(allProducts.allProducts);
  // }, [allProducts]);
  // useEffect(() => {
  //   if (session) {
  //     dispatch(
  //       addUser({
  //         name: session?.user?.name,
  //         email: session?.user?.email,
  //         image: session?.user?.image,
  //       })
  //     );
  //   }
  // }, [session]);

  // Search area
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   useEffect(() => {
//     const filtered = allData.filter((item: StoreProduct) =>
//       item.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery]);

  return (
    <div className="w-full ">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/* logo */}
        <Link
          href={"/"}
          className="headerHover"
        >
          <Image className="w-28 object-cover mt-1" src={logo} alt="logoImg" />
        </Link>
        {/* delivery */}
        <div className="headerHover">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">VietNam</p>
          </div>
        </div>
        {/* serchbar */}
        {/* <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative"> */}
        <div className="h-10 rounded-md flex flex-grow relative">
          <span onClick={() => setShowAll(!showAll)} className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center absolute left-0 rounded-tl-md rounded-bl-md">
            All <span></span>
            <ArrowDropDownOutlined/>
            </span>
            {showAll && (
              <div>
                <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll
                overflow-x-hidden bg-white border-[1px] border-x-amazon_blue text-black p-2
                flex-col gap-1 z-50">
                  {
                    allItems.map((item) => (
                      <li key={item._id} className="text-sm tracking-wide font-titleFont border-b-[1px]
                        border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                        {item.title}
                      </li>
                    ))
                  }
                </ul>
              </div>
            )}
          <input
            // onChange={handleSearch}
            // value={searchQuery}
            className="w-full h-full rounded-md px-2 pl-16 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search products"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
          {/* ========== Searchfield ========== */}
          {searchQuery && (
            <div className="absolute left-0 top-12 w-full mx-auto max-h-96 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black">
              {/* {filteredProducts.length > 0 ? (
                <>
                  {searchQuery &&
                    filteredProducts.map((item: StoreProduct) => (
                      <Link
                        key={item._id}
                        className="w-full border-b-[1px] border-b-gray-400 flex items-center gap-4"
                        href={{
                          pathname: `${item._id}`,
                          query: {
                            _id: item._id,
                            brand: item.brand,
                            category: item.category,
                            description: item.description,
                            image: item.image,
                            isNew: item.isNew,
                            oldPrice: item.oldPrice,
                            price: item.price,
                            title: item.title,
                          },
                        }}
                        onClick={() => setSearchQuery("")}
                      >
                        <SearchProducts item={item} />
                      </Link>
                    ))}
                </>
              ) : (
                <div className="bg-gray-50 flex items-center justify-center py-10 rounded-lg shadow-lg">
                  <p className="text-xl font-semibold animate-bounce">
                    Nothing is matches with your search keywords. Please try
                    again!
                  </p>
                </div>
              )} */}
            </div>
          )}
          {/* ========== Searchfield ========== */}
        </div>
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Hello, sign in</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">Accounts & Lists{" "} 
          <span>
            <ArrowDropDownOutlined/>
          </span>
          </p>
        </div>
        {/* signin */}
        {/* {userInfo ? (
          <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
            <img
              src={userInfo.image}
              alt="userImage"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-xs text-gray-100 flex flex-col justify-between">
              <p className="text-white font-bold">{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
          >
            <p>Hello, sign in</p>
            <p className="text-white font-bold flex items-center">
              Account & Lists{" "}
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
        )} */}
        {/* fovorite */}
        <Link
          href={"/orders"}
          className="text-xs text-gray-100 flex flex-col justify-center headerHover"
        >
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
          {/* {favoriteData.length > 0 && (
            <span className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
              {favoriteData.length}
            </span>
          )} */}
        </Link>
        {/* cart */}
        <Link
          href={"/cart"}
          className="flex items-start justify-center headerHover relative">
          <Image
            className="w-auto object-cover h-8 mt-3"
            src={cartIcon}
            alt="cartImg"
          />
          {/* <ShoppingCart/> */}
          <p className="text-xs text-whiteText font-semibold mt-4">Cart <span className="absolute bg-amazon_yellow text-amazon_blue rounded-full text-xs top-2 left-7 font-semibold p-1 h-4 flex justify-center items-center">
            {/* {productData ? productData.length : 0} */}0
          </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;