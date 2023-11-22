import { FaSearch, FaRegUser } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri"
import { useState, useContext} from "react";
import { UserContext } from "../../../context/Context";

export default function UpperNav () {
  const {onLogoClick} = useContext(UserContext);
  const {wishlistItems} = useContext(UserContext);
  const {handleAccountClick} = useContext(UserContext);
  const {onCartClick} = useContext(UserContext);
  const {cartItems} = useContext(UserContext);

  return (
    <>
      <div className="hidden md:flex h-[80px] py-3 px-1 md:px-6 justify-around font-poppins md:sticky top-0 z-50 bg-white">
        <img src="/logo/navlogo.png" alt="logo" className="cursor-pointer" onClick={onLogoClick}/>
        <div className="relative w-[40%] ">
          <input
            type="text"
            name="search_navbar"
            placeholder="What are you looking for....."
            className="rounded-[7px] w-[100%] px-1 md:px-4 h-[90%] bg-secondary-grey outline-none shadow-lg text-sm"
          />
          <span className="cursor-pointer absolute bg-primary-orange1 right-0 h-[90%] py-3 px-6 rounded-r-[7px]">
            <RiSearchLine size={27} className=" text-white " />
          </span>
        </div>
        <div className="flex justify-center items-center cursor-pointer">
          <div className="flex flex-col justify-center items-center mr-3 md:mr-4 lg:mr-6 w-full relative text-secondary-iconText">
            <div onClick={onCartClick}>
            <BsCart className="text-xl" />
            <p className="text-xs pt-2">YourCart</p>
            </div>
            <div className="bg-red-900 text-white rounded-full text-center absolute bottom-7 left-6 text-sm w-5 h-5">
              {cartItems}
            </div>
          </div>
          <div className="block h-6 w-1 bg-secondary-line"></div>
          <div className="flex flex-col justify-center items-center md:mx-6  relative text-secondary-iconText">
            <MdOutlineFavoriteBorder className="text-xl" />
            <div className="bg-red-900 text-white rounded-full text-center absolute bottom-7 left-8 text-sm w-5 h-5">
              {wishlistItems}
            </div>
            <p className="text-xs pt-2">Wishlist</p>
          </div>
          <div className="block h-6 w-[0.2%] bg-secondary-line"></div>
          <div className="flex flex-col justify-center items-center ml-6 text-secondary-iconText" onClick={handleAccountClick}>
            <FaRegUser className="text-xl" />
            <p className="text-xs pt-2">Account</p>
          </div>
        </div>
      </div>
    </>
  );
}
