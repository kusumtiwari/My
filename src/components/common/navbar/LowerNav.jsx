import { useState } from "react";
import { useRef } from "react";
import Dropdown from "./Dropdown.jsx";
import DropdownIcon from "/Dropdown.png";
export default function LowerNav() {
  const allCategory = useRef();
  const [dropdown, setdropdown] = useState(false);
  const displayFirstDropdown = () => {
    setdropdown(!dropdown);
    console.log("displayed");
  };
  return (
    <div className=" hidden md:flex bg-primary-blue h-[50px] text-secondary-navText text-sm pl-12 items-center font-poppins md:sticky z-50 top-20">
      <ul className="flex w-[42%] md:w-[65%] lg:w-[42%] justify-around">
        <li className="cursor-pointer relative">
          <div className="flex" onClick={displayFirstDropdown} ref={allCategory}>
            <img src="/Dropdown.png" className="w-5 h-5" alt="dropdown" />
            <p className="pl-2">All Category</p>
          </div>
          {dropdown && <Dropdown displayFirstDropdown={displayFirstDropdown} allCategory={allCategory}/>}
        </li>
        <li className="cursor-pointer">Deals</li>
        <li className="cursor-pointer">Help</li>
        <li className="cursor-pointer"> Better Seller</li>
      </ul>
    </div>
  );
}
