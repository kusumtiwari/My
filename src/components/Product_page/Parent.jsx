import ProductElement from "./ProductElement";
import StickyComponent from "./StickyComponent";
import ProductDetails from "./ProductDetails";
import ProductSpecification from "./ProductSpecification";
import RatingAndReviews from "./RatingAndReviews";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const productData = {
  description: "I am description",
  originalPrice: 5000,
  discountedPrice: 2500,
  discountPercent: "50%",
  quantity: 5,
  material: "Cotton",
  size: "23*35*54",
  standardDelieveryDays: "2-3 Days",
  cod: "Available",
  warranty: "Not available",
  productReturnDays: "14 days return",
  return: "Available",
  ratings : 10,
  reviews : 0,
};

export default function Parent() {
  const [productImgIndex, setproductImgIndex] = useState(0);
  const [productColorIndex, setproductColorIndex] = useState(0);
  const displayProductImg = (index) => setproductImgIndex(index);
  const onProductColorImgClick = (index) => setproductColorIndex(index);

  return (
    <>
      <div className="flex justify-between flex-col md:flex-row ">
        <div className="">
          <div className="flex text-secondary-greydefault flex-wrap md:sticky top-[11rem] my-4">
            <p className="text-sm">Men's Fasion</p>
            <MdOutlineKeyboardArrowRight className="text-xl" />
            <p className="text-sm">Clothing</p>
            <MdOutlineKeyboardArrowRight className="text-xl" />
            <p className="text-sm pr-1">Pants</p>
            <h1 className="text-secondary-greytext text-sm">
              {productData.description}
            </h1>
          </div>
          <StickyComponent
            productImgIndex={productImgIndex}
            productColorIndex={productColorIndex}
            displayProductImg={displayProductImg}
          />
        </div>
        <div>
          <ProductElement
            productColorIndex={productColorIndex}
            onProductColorImgClick={onProductColorImgClick}
            productData={productData}
          />
          <ProductDetails />
          <ProductSpecification />
          <RatingAndReviews />
        </div>
      </div>
    </>
  );
}
