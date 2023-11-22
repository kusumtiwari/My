import { useState, useContext } from "react";

import {AiTwotoneHeart,AiOutlineHeart} from "react-icons/ai";
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

  
export default function StickyComponent({productColorIndex, productImgIndex, displayProductImg}) {
  const {addToWishList} = useContext(UserContext);
  const [wishlistDivClick, setwishListDivClick] = useState(false);
  const onWishlistClick = () => {
    setwishListDivClick(true);
    if (!wishlistDivClick) {
      addToWishList();
    }
  };
  return (
    <div className="flex md:sticky top-[14rem]">
      <div>
        <img
          src={productimages[productColorIndex][productImgIndex].name}
          alt="Product image"
          className="h-[55vh] w-[90vw] md:w-[35vw] lg:w-[24vw]"
        />
        <div className="flex items-center justify-center border border-yellow-400 py-3 mt-4  w-full cursor-pointer" onClick={onWishlistClick}
        >
        {
          (wishlistDivClick) ? <AiTwotoneHeart className="text-xl text-primary-orange1"/> : <AiOutlineHeart className="text-xl"/>
        }
          <h1 className="pl-2 text-sm">Add to Wishlist</h1>
        </div>
      </div>
      <div className="ml-2">
        {productimages[productColorIndex].map((item, index) => (
          <div className="h-[50px] w-[50px] mb-2" key={index}>
            <img
              src={item.name}
              alt="product"
              className={`cursor-pointer h-full w-full transition-transform ease-in-out duration-300 ${
                index === productImgIndex ? "border-2 border-yellow-500" : ""
              } `}
              onClick={() => displayProductImg(index)}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
