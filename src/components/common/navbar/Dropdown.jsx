import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import FirstSubdropdowns from "./FirstSubdropdowns";
import { useNavigate } from "react-router-dom";

const dropdownArray = [
  { label: "Men's Fashion" },
  { label: "Women's Fashion" },
  { label: "Health and Beauty" },
  { label: "Watches, Bags, Jewellery" },
  { label: "Electronic Devices" },
  { label: "TV & Home Appliances" },
  { label: "Electronic Accessories" },
  { label: "Groceries & Pets" },
  { label: "Babies & Toys" },
  { label: "Home & Lifestyle" },
  { label: "Sports & Outdoor" },
  { label: "Motors, Tool & DIY" },
];

export default function Dropdown({
  displayFirstDropdown,
  displaySmallScreenDropdown,
  allCategory,
  smallScreenCategory,
}) {
  const navigate = useNavigate();

  const [activeLi, setactiveLi] = useState(null);
  const displayDropdown = (index) => {
    setactiveLi(index === activeLi ? null : index);
  };
  const resetDropdown = () => {
    setactiveLi(null);
  };

  const handleOnClick = (index) => {
    if (index === 0) {
      navigate("/category-page");
    }

    if (window.innerWidth > 768) {
      displayFirstDropdown();
    } else {
      displaySmallScreenDropdown();
    }
  };
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth > 768) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target) &&
          !allCategory.current.contains(event.target)
        ) {
          resetDropdown();
          displayFirstDropdown();
        }
      } else {
        if (
          !smallScreenCategory.current.contains(event.target) &&
          !dropdownRef.current.contains(event.target)
        ) {
          resetDropdown();
          displaySmallScreenDropdown();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ul
      className=" bg-white font-poppins z-50 absolute px-4 md:px-0 top-[175%] md:left-0 text-primary-blue sm:w-[90%] md:w-[200%] lg:w-[250%] flex flex-col  py-12 md:py-4 text-sm"
      ref={dropdownRef}
    >
      {dropdownArray.map((item, index) => (
        <div
          key={index}
          className={`py-1 mb-1 pl-2 flex justify-between cursor-pointer hover:bg-yellow-100 ${
            activeLi === index ? "bg-secondary-dropdownbg" : "bg-transparent"
          }`}
          onMouseEnter={() => {
            if (window.innerWidth > 768) {
              displayDropdown(index);
            }
          }}
        >
          <li onClick={() => handleOnClick(index)}>{item.label}</li>
          <p onClick={() => displayDropdown(index)}>
            <MdOutlineKeyboardArrowRight className="font-bold my-1" />
          </p>
        </div>
      ))}
      {dropdownArray.map(
        (item, index) =>
          activeLi === index && (
            <FirstSubdropdowns
              resetDropdown={resetDropdown}
              activeLi={activeLi}
              displayFirstDropdown={displayFirstDropdown}
              displaySmallScreenDropdown={displaySmallScreenDropdown}
              key={index}
            />
          )
      )}
    </ul>
  );
}
