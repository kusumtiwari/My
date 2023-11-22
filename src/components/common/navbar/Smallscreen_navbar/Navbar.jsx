import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useRef, useContext} from "react";
import Dropdown from "../Dropdown";
import { UserContext } from "../../../../context/Context";
export default function SmallScreenNavbar() {
  const smallScreenCategory = useRef();
  const [dropdown, setdropdown] = useState(false);
  const displaySmallScreenDropdown = () => {
    setdropdown(!dropdown);
  };
 
  const {onLogoClick} = useContext(UserContext);
  return (
    <div className="sticky top-0 z-50">
      <div className="flex md:hidden h-[50px] w-full py-3 px-3 justify-around font-poppins bg-primary-blue relative">
        <img
          src="/Dropdown.png"
          className="w-5 h-5 mt-2 cursor-pointer relative"
          alt="dropdown"
          onClick={displaySmallScreenDropdown}
          ref={smallScreenCategory}
        />
        <img src="/logo/croppedLogo.png" alt="logo" className="mr-1 cursor-pointer" onClick={onLogoClick}/>
        <RxHamburgerMenu
          color="white"
          className="w-6 h-6 mt-2 cursor-pointer"
        />
        {dropdown && <Dropdown displaySmallScreenDropdown = {displaySmallScreenDropdown} smallScreenCategory={smallScreenCategory}/>}
      </div>
      
    </div>
  );
}
