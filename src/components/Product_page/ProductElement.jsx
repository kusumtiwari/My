import {
  MdOutlineStarPurple500,
} from "react-icons/md";

import { LiaStarHalfSolid } from "react-icons/lia";
import { useState, useEffect, useContext} from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { BsTruck } from "react-icons/bs";
import { IoCashOutline } from "react-icons/io5";
import {FiShieldOff} from "react-icons/fi";
import {PiArrowCounterClockwiseDuotone} from 'react-icons/pi';
import { UserContext } from "../../context/Context";

const productimages = [
  [
    {
      name: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg",
      id: 1,
    },
    {
      name: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600",
      id: 2,
    },
    {
      name: "https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: 3,
    },
  ],

  [
    {
      name: "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: 4,
    },
    {
      name: "https://images.pexels.com/photos/3119215/pexels-photo-3119215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: 5,
    },
    {
      name: "https://images.pexels.com/photos/3965551/pexels-photo-3965551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: 6,
    },
  ],

  [
    {
      name: "https://images.pexels.com/photos/8580765/pexels-photo-8580765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: 7,
    },
    {
      name: "https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: 8,
    },
    {
      name: "https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: 9,
    },
  ],
];

const productColorImages = [
  {
    image:
      "https://images.pexels.com/photos/5864264/pexels-photo-5864264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: 1,
    colorName: "Green",
  },
  {
    image:
      "https://images.pexels.com/photos/5705478/pexels-photo-5705478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: 2,
    colorName: "Red",
  },
  {
    image:
      "https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: 3,
    colorName: "Pink",
  },
];

const Productsizes = [26, 27, 28, 29, 30, 31];

export default function ProductElement({productColorIndex, onProductColorImgClick, productData}) {
  const {addToCart} = useContext(UserContext);
  const [cartDivClick, setcartDivClick] = useState(false);

  const onCartDivClick = () => {
    setcartDivClick(true);
    if (!cartDivClick) {
      addToCart();
    }
  };
  const [timeRemaining, settimeRemaining] = useState(calculateTimeRemaining());
  const [sizeindex, setsizeindex] = useState(0);
  const [quantity, setquantity] = useState(1);
  function calculateTimeRemaining() {
    const now = new Date();
    const endingTime = new Date("2023-10-30T23:59:59");

    const timeDifference = endingTime - now;
    const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const remainingSeconds = Math.floor((timeDifference / 1000) % 60);

    return `${remainingHours}hrs : ${remainingMinutes}mins : ${remainingSeconds}secs`;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      settimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  });

  const addQuantity = () => {
    if (quantity !== productData.quantity) setquantity(quantity + 1);
  };

  const subtractQuantity = () => {
    if (quantity !== 1) {
      setquantity(quantity - 1);
    }
  };

  const displayborder = (num) => {
    setsizeindex(num);
  };
  const [producthover, setproducthover] = useState(null);
  const onProductColorImgHover = (index) => {
    setproducthover(index);
  };

  const onProductColorImgHoverOut = () => {
    setproducthover(null);
  };
  return (
    <div className="relative overflow-hidden my-4"> 
      <div className="flex text-primary-blue justify-between flex-col md:flex-row">

        <div className="flex lg:flex-1 justify-evenly flex-col lg:flex-row md:ml-6">
          <div className="md:w-[40vw] lg:w-[34vw]">
            <div className="bg-pink-200 rounded-md flex py-2 px-2 mb-4">
              <img src="/Dashainsale.png" alt="Sale icon" className="mr-2" />
              <p className="text-sm pr-2">Dasain Flash Sale End in: </p>
              <p className="font-bold text-sm">{timeRemaining}</p>
            </div>
            <h1 className="text-lg text-primary-blue font">
              {productData.description}
            </h1>
            <div className="flex items-center">
              <h1 className="bg-primary-blue text-white px-2 rounded text-xs py-1">
                Express
              </h1>
              <div className="flex">
                <MdOutlineStarPurple500 className="text-yellow-400 mr-1" />
                <MdOutlineStarPurple500 className="text-yellow-400 mr-1" />
                <MdOutlineStarPurple500 className="text-yellow-400 mr-1" />
                <MdOutlineStarPurple500 className="text-yellow-400 mr-1" />
                <LiaStarHalfSolid className="text-yellow-400 " />
              </div>
              <a href="#" className="text-sm underline">
               {`${productData.ratings} ratings and ${productData.reviews} reviews`}
              </a>
            </div>

            <div className="flex border-t border-b border-primary-blue items-center py-2 my-4 text-primary-blue ">
              <p className="pr-2 text-2xl font-semibold">{`Rs. ${productData.originalPrice}`}</p>
              <p className="pr-2 line-through text-base">{`Rs ${productData.discountedPrice}`}</p>
              <p>{productData.discountPercent}</p>
            </div>

            <div className="flex items-center my-8">
              <p className="text-sm mr-4">Colors:</p>
              {productColorImages.map((item, index) => (
                <div className="h-[45px] w-[55px] mr-4" key={index}>
                  <img
                    src={item.image}
                    alt="product"
                    className={`cursor-pointer mr-8 rounded h-full w-full ${
                      index == productColorIndex
                        ? "border-2 border-yellow-500"
                        : ""
                    }`}
                    onClick={() => onProductColorImgClick(index)}
                    onMouseEnter={() => onProductColorImgHover(index)}
                    onMouseLeave={onProductColorImgHoverOut}
                  ></img>
                  {index === producthover && (
                    <p className="text-center ml-6 mb-8 relative bottom-2 bg-gray-200 rounded w-[55px] text-sm py-1">
                      {item.colorName}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex">
              <p className="text-sm mr-6">Sizes:</p>
              <div className="flex flex-wrap">
                {Productsizes.map((sizeNum, index) => (
                  <p
                    key={index}
                    className={`px-5 rounded py-1 border border-primary-blue mr-3 cursor-pointer mb-2 ${
                      index === sizeindex ? "border-yellow-600" : ""
                    }`}
                    onClick={() => displayborder(index)}
                  >
                    {sizeNum}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:ml-10 mt-12 lg:mt-0">
            <div className="flex items-center mb-4 justify-end">
              <p className="text-sm font-semibold">Share:</p>
              <FaFacebook className="text-blue-500 w-6 h-6 mr-1 ml-2" />
              <AiFillTwitterCircle className="text-blue-400 w-6 h-6 mr-1" />
              <AiFillLinkedin className="text-blue-600 rounded-full w-6 h-6 mr-1" />
              <RiInstagramFill className="text-red-700 w-6 h-6" />
            </div>
            <div className="grid grid-cols-1 gap-3 lg:w-[22vw] ">
              <div className="border border-gray-300 rounded py-4 px-4 bg-secondary-productelement">
                <div className="flex justify-between">
                  <p className="text-sm ">Quantity:</p>
                  <div className="flex">
                    <button
                      className={`px-2 rounded-full  mx-4 py-1/2 w-8 h-8 ${
                        quantity === 1 ? "bg-gray-100" : "bg-gray-300"
                      }`}
                      onClick={subtractQuantity}
                    >
                      -
                    </button>
                    <p className="text-md text-black font-semibold text-center mt-1">
                      {quantity}
                    </p>
                    <button
                      className={`px-2 rounded-full  mx-4 py-1/2 w-8 h-8 ${
                        quantity === productData.quantity
                          ? "bg-gray-100"
                          : "bg-gray-300"
                      }`}
                      onClick={addQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="text-white bg-primary-orange1 text-sm w-full py-3 my-4 rounded" onClick={onCartDivClick}>
                  Add to cart
                </button>
                <button className="w-full text-sm text-primary-blue bg-white border-2 border-yellow-600 py-3 rounded">
                  Buy now
                </button>
              </div>

              <div className="border border-gray-300 rounded bg-secondary-productelement">
                <div className="flex justify-around items-center py-3 px-2">
                  <BsTruck className="text-gray-600 text-2xl" />
                  <p className="text-sm">Standard Delievery</p>
                  <p className="text-sm font-semibold">
                  {`(${productData.standardDelieveryDays})`}
                  </p>
                </div>
                <div className="border border-gray-300 w-[88%] mx-auto "></div>
                <div className="flex justify-around items-center py-3 px-2">
                  <IoCashOutline className="text-gray-600 text-2xl" />
                  <p className="text-sm">Cash on delievery</p>
                  <p className="text-sm font-semibold">{`(${productData.cod})`}</p>
                </div>
                <div className="border border-gray-300 w-[88%] mx-auto "></div>
                <div className="flex justify-around items-center py-3 px-2">
                  <FiShieldOff className="text-gray-600 text-2xl" />
                  <p className="text-sm">Warranty</p>
                  <p className="text-sm font-semibold">
                  {`(${productData.warranty})`}
                  </p>
                </div>
                <div className="border border-gray-300 w-[88%] mx-auto "></div>
                <div className="flex justify-around items-center py-3 px-2">
                  <PiArrowCounterClockwiseDuotone className="text-gray-600 text-2xl custom-rotate" />
                  <p className="text-sm">{productData.productReturnDays}</p>
                  <p className="text-sm font-semibold">{`(${productData.return})`}</p>
                </div>
              </div>

              <div className="border border-gray-300 rounded py-4 px-2 bg-secondary-productelement">
                <div className="flex justify-between mb-2">
                  <p className="text-sm"> Seller information</p>
                  <a
                    href="#"
                    className="text-primary-orange1 underline text-sm font-semibold"
                  >
                    Visit Store
                  </a>
                </div>
                <h1 className="text-black text-base font-semibold">
                  Spell Innovation Pvt.Ltd
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
