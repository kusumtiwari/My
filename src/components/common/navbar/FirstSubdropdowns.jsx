import { MdOutlineKeyboardArrowRight, MdArrowBackIosNew } from "react-icons/md";
import { useState, useContext } from "react";
import SecondSubdropdowns from "./SecondSubdropdowns";
import { UserContext } from "../../../context/Context";

const Subdropdown_items = [
  [
    {
      name: "Clothing",
      id: 11,
    },
    {
      name: "Mens Bag",
      id: 12,
    },
    {
      name: "Accessories",
      id: 13,
    },
    {
      name: "Shoes",
      id: 14,
    },
    {
      name: "Boys Fashion",
      id: 15,
    },
    {
      name: "Mens Underwear",
      id: 16,
    },
    {
      name: "Sports Wear",
      id: 17,
    },
    {
      name: "Socks and shoe",
      id: 18,
    },
  ],

  [
    {
      name : "Womens Clothing",
      id: 21,
    },
    {
      name : "Womens Bag",
      id: 22,
    },
    {
      name : "Accessories",
      id: 23,
    },
    {
      name : "Sandles",
      id: 25,
    },
    {
      name : "Heels",
      id: 25,
    }
  ],

  [
    {
      name : "Suppliments",
      id: 31,
    },
    {
      name : "Skincare",
      id: 32,
    },
    {
      name : "Makeup",
      id: 33,
    },
    {
      name : "Haircare",
      id: 34,
    },
    {
      name : "Nailcare",
      id: 35,
    },
    {
      name : "Bodycare",
      id: 36,
    },
  ],
  [
    {
      name : "Watches",
      id: 41,
    },
    {
      name : "Jewellery",
      id: 42,
    },
    {
      name : "Bags",
      id: 43,
    },
    {
      name : "Accessories",
      id: 44,
    },
    {
      name : "Sandles",
      id: 45,
    },
    {
      name : "Heels",
      id: 46,
    },
  ],

  [
    {
      name : "Watches",
      id: 51,
    },
    {
      name : "Jewellery",
      id: 52,
    },
    {
      name : "Bags",
      id: 53,
    },
    {
      name : "Accessories",
      id: 54,
    },
    {
      name : "Sandles",
      id: 55,
    },
    {
      name : "Heels",
      id: 56,
    },
  ],

  [
    {
      name : "Watches",
      id: 61,
    },
    {
      name : "Jewellery",
      id: 62,
    },
    {
      name : "Bags",
      id: 63,
    },
    {
      name : "Accessories",
      id: 64,
    },
    {
      name : "Sandles",
      id: 65,
    },
    {
      name : "Heels",
      id: 66,
    },
  ],

  [
    {
      name : "Watches",
      id: 71,
    },
    {
      name : "Jewellery",
      id: 72,
    },
    {
      name : "Bags",
      id: 73,
    },
    {
      name : "Accessories",
      id: 74,
    },
    {
      name : "Sandles",
      id: 75,
    },
    {
      name : "Heels",
      id: 76,
    },
  ],

  [
    {
      name :  "Vegeratables",
      id: 81,
    },
    {
      name : "Jewellery",
      id: 82,
    },
    {
      name :  "Doll House",
      id: 83,
    },
    {
      name :  "Superman Toys",
      id: 84,
    },
    {
      name :  "Stickers",
      id: 85,
    },
    {
      name : "Heels",
      id:86,
    },
  ],

  [
    {
      name : "Watches",
      id: 91,
    },
    {
      name : "Jewellery",
      id: 92,
    },
    {
      name : "Bags",
      id: 93,
    },
    {
      name : "Accessories",
      id: 94,
    },
    {
      name : "Sandles",
      id: 95,
    },
    {
      name : "Heels",
      id: 96,
    },
  ],

  [
    {
      name :  "Vegeratables",
      id: 101,
    },
    {
      name : "Jewellery",
      id: 102,
    },
    {
      name :  "Doll House",
      id: 103,
    },
    {
      name :  "Superman Toys",
      id: 104,
    },
    {
      name :  "Stickers",
      id: 105,
    },
    {
      name : "Heels",
      id: 106,
    },
  ],
 
  [
    {
      name : "Watches",
      id: 111,
    },
    {
      name : "Jewellery",
      id: 112,
    },
    {
      name : "Bags",
      id: 113,
    },
    {
      name : "Accessories",
      id: 114,
    },
    {
      name : "Sandles",
      id: 115,
    },
    {
      name : "Heels",
      id: 116,
    },
  ],

  [
    {
      name :  "Vegeratables",
      id: 121,
    },
    {
      name : "Jewellery",
      id: 122,
    },
    {
      name :  "Doll House",
      id: 123,
    },
    {
      name :  "Superman Toys",
      id: 124,
    },
    {
      name :  "Stickers",
      id: 125,
    },
    {
      name : "Heels",
      id: 126,
    },
  ],

];

export default function FirstSubdropdowns({
  resetDropdown,
  activeLi,
  displayFirstDropdown,
  displaySmallScreenDropdown,
}) {
  const { handleSubCategoryNavigation } = useContext(UserContext);

  const [active, setactive] = useState(null);
  const resetsubdropdown = () => {
    setactive(null);
  };
  const displayDropdown = (index) => setactive(index === active ? null : index);
  const display = () => {
    resetDropdown();
  };

  const displaySubCategory = (item, id) => {
    
    handleSubCategoryNavigation(item, id,'firstSubDropdown');
    if (window.innerWidth > 768) {
      displayFirstDropdown();
    } else {
      displaySmallScreenDropdown();
    }
  };
  return (
    <ul className="font-poppins absolute top-0 md:left-[100%] text-primary-blue w-[100%] h-[100%] bg-white flex flex-col py-4 px-4 text-sm">
      <div
        className="my-3 cursor-pointer md:hidden font-bold h-6 w-6 border border-primary-blue rounded-full flex items-center justify-center"
        onClick={display}
      >
        <MdArrowBackIosNew className="text-primary-blue" />
      </div>

      {Subdropdown_items[activeLi].map((item, index) => (
        <div
          key={index}
          className={`py-1 mb-1 pl-2 flex justify-between cursor-pointer hover:bg-yellow-100 ${
            active === index ? "bg-secondary-dropdownbg" : "bg-transparent"
          }`}
          onMouseEnter={() => {
            if (window.innerWidth > 768) {
              displayDropdown(index);
            }
          }}
        >
          <li onClick={() => displaySubCategory(item.name, item.id)}>{item.name}</li>

          <p onClick={() => displayDropdown(index)}>
            <MdOutlineKeyboardArrowRight className="font-bold my-1" />
          </p>
        </div>
      ))}
      {Subdropdown_items.map(
        (item, index) =>
          active === index && (
            <SecondSubdropdowns
              resetsubdropdown={resetsubdropdown}
              activeLi={activeLi}
              active={active}
              key={index}
            />
          )
      )}
    </ul>
  );
}
