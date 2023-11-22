import {
    MdOutlineStarPurple500,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdPlayArrow,
  } from "react-icons/md";
  import { Fragment, useState } from "react";
  const selectionItems1 = [
    {
      id: 11,
      productItems: ["Pants", "Tie", "Bow Tie", "Shirts", "Jackets", "T-shirts"],
      brandItems: [
        "American eage",
        "Hill Life",
        "H & M",
        "Levis",
        "Gucci",
        "Lui Vuitton",
        "Latildo",
      ],
      warrantyType: ["Seller Warranty", "Brand Warranty", "No Warranty"],
      sizeList: ["S", "M", "L", "XL", "XXl", "XXXl"],
    },
  
    {
      id: 12,
      productItems: ["Clips", "Rats", "Cats", "Bats", "Socks"],
      brandItems: [
        "Lui Vuitton",
        "Latildo",
        "American eage",
        "Hill Life",
        "H & M",
        "Levis",
        "Gucci",
      ],
      warrantyType: ["Seller Warranty", "Brand Warranty", "No Warranty"],
      sizeList: ["M", "L", "XL", "XXl", "XXXl"],
    },
  
    {
      id: 13,
      productItems: ["Clips", "Rats", "Cats", "Bats", "Socks"],
      brandItems: [
        "Lui Vuitton",
        "Latildo",
        "American eage",
        "Hill Life",
        "H & M",
        "Levis",
        "Gucci",
      ],
      warrantyType: ["Seller Warranty", "Brand Warranty", "No Warranty"],
      sizeList: ["M", "L", "XL", "XXl", "XXXl"],
    },
  
    {
      id: 14,
      productItems: ["Clips", "Rats", "Cats", "Bats", "Socks"],
      brandItems: [
        "Lui Vuitton",
        "Latildo",
        "American eage",
        "Hill Life",
        "H & M",
        "Levis",
        "Gucci",
      ],
      warrantyType: ["Seller Warranty", "Brand Warranty", "No Warranty"],
      sizeList: ["M", "L", "XL", "XXl", "XXXl"],
    },
    {
      id: 15,
      productItems: ["Clips", "Rats", "Cats", "Bats", "Socks"],
      brandItems: [
        "Lui Vuitton",
        "Latildo",
        "American eage",
        "Hill Life",
        "H & M",
        "Levis",
        "Gucci",
      ],
      warrantyType: ["Seller Warranty", "Brand Warranty", "No Warranty"],
      sizeList: ["M", "L", "XL", "XXl", "XXXl"],
    },
    {
      id: 16,
      productItems: ["Clips", "Rats", "Cats", "Bats", "Socks"],
      brandItems: [
        "Lui Vuitton",
        "Latildo",
        "American eage",
        "Hill Life",
        "H & M",
        "Levis",
        "Gucci",
      ],
      warrantyType: ["Seller Warranty", "Brand Warranty", "No Warranty"],
      sizeList: ["M", "L", "XL", "XXl", "XXXl"],
    },
    {
      id: 17,
      productItems: ["Clips", "Rats", "Cats", "Bats", "Socks"],
      brandItems: [
        "Lui Vuitton",
        "Latildo",
        "American eage",
        "Hill Life",
        "H & M",
        "Levis",
        "Gucci",
      ],
      warrantyType: ["Seller Warranty", "Brand Warranty", "No Warranty"],
      sizeList: ["M", "L", "XL", "XXl", "XXXl"],
    },
    {
      id: 18,
      productItems: ["Clips", "Rats", "Cats", "Bats", "Socks"],
      brandItems: [
        "Lui Vuitton",
        "Latildo",
        "American eage",
        "Hill Life",
        "H & M",
        "Levis",
        "Gucci",
      ],
      warrantyType: ["Seller Warranty", "Brand Warranty", "No Warranty"],
      sizeList: ["M", "L", "XL", "XXl", "XXXl"],
    },
  ];
  
  const ratings = [5, 4, 3, 2, 1];
  
  const categoriesHeading = [
    "Products",
    "Brands",
    "Ratings",
    "Warranty Type",
    "Sizes",
  ];
  
  export default function SmallScreenCategorySelection({ id }) {
    const [productArrowClick, setproductArrowClick] = useState(false);
    const [brandArrowClick, setbrandArrowClick] = useState(false);
    const [sizeArrowClick, setsizeArrowClick] = useState(false);
    const [warrantyArrowClick, setwarrantyArrowClick] = useState(false);
    const [pricecontent, setpricecontent] = useState(true);
    const [ratingsContent, setratingsContent] = useState(true);
  
    const displayPriceContent = () => {
      setpricecontent(!pricecontent);
    };
    const displayRatingsContent = () => {
      setratingsContent(!ratingsContent);
    };
  
    const onProductArrowClick = () => {
      setproductArrowClick(!productArrowClick);
    }
  
    const onBrandArrowClick = () => {
      setbrandArrowClick(!brandArrowClick);
    }
  
    const onSizeArrowClick = () => {
      setsizeArrowClick(!sizeArrowClick);
    }
  
    const onWarrantyArrowClick = () => {
      setwarrantyArrowClick(!warrantyArrowClick);
    }
    return (
      <div className={`block lg:hidden absolute right-[20%] md:right-[10%] top-[3%] md:top-[2] z-40 bg-primary-blue/80 text-white`}>
        {selectionItems1.map((item, index) => {
          if (item.id === id) {
            return (
              <div key={index}>
                  <div className="px-8 py-4 rounded-md custom-box-shadow mb-4">
                  <div className="flex justify-between my-2">
                    <p className="text-base font-semibold">Product</p>
                    <MdKeyboardArrowDown
                      className={`text-xl cursor-pointer ${
                        productArrowClick ? "" : "hidden"
                      }`}
                      onClick={onProductArrowClick}
                    />
                    <MdKeyboardArrowUp
                      className={`text-xl cursor-pointer ${
                        productArrowClick ? "hidden" : ""
                      }`}
                      onClick={onProductArrowClick}
                    />
                  </div>
                  {!productArrowClick && (
                    <div>
                      {item.productItems.map((childitem, childindex) => (
                        <div key={`childitem-${childindex}`} className="my-1">
                          <input 
                            type="checkbox"
                            id={`${childindex}-checkbox`}
                            className="mr-2 cursor-pointer"
                          />
                          <label
                            htmlFor={`${childindex}-checkbox`}
                            className="text-sm"
                          >
                            {childitem}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  </div>
  
                  <div className="px-8 py-4 rounded-md custom-box-shadow mb-4">
                  <div className="flex justify-between my-2">
                    <p className="text-base font-semibold">Brands</p>
                    <MdKeyboardArrowDown
                      className={`text-xl cursor-pointer ${
                        brandArrowClick ? "" : "hidden"
                      }`}
                      onClick={onBrandArrowClick}
                    />
                    <MdKeyboardArrowUp
                      className={`text-xl cursor-pointer ${
                        brandArrowClick ? "hidden" : ""
                      }`}
                      onClick={onBrandArrowClick}
                    />
                  </div>
                  {!brandArrowClick && (
                    <div>
                      {item.brandItems.map((childitem, childindex) => (
                        <div key={`childitem2-${childindex}` } className="my-1">
                          <input
                            type="checkbox"
                            id={`${childindex}-checkbox2`}
                            className="mr-2 cursor-pointer"
                          />
                          <label
                            htmlFor={`${childindex}-checkbox2`}
                            className="text-sm"
                          >
                            {childitem}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  </div>
  
                  <div className="px-8 py-4 rounded-md custom-box-shadow mb-4">
                  <div className="flex justify-between my-2">
                    <p className="text-base font-semibold">Sizes</p>
                    <MdKeyboardArrowDown
                      className={`text-xl cursor-pointer ${
                        sizeArrowClick ? "" : "hidden"
                      }`}
                      onClick={onSizeArrowClick}
                    />
                    <MdKeyboardArrowUp
                      className={`text-xl cursor-pointer ${
                        sizeArrowClick ? "hidden" : ""
                      }`}
                      onClick={onSizeArrowClick}
                    />
                  </div>
                  {!sizeArrowClick && (
                    <div>
                      {item.sizeList.map((childitem, childindex) => (
                        <div key={`${childindex}-childitem3`} className="my-1">
                          <input
                            type="checkbox"
                            id={`${childindex}-checkbox3`}
                            className="mr-2 cursor-pointer"
                          />
                          <label
                            htmlFor={`${childindex}-checkbox3`}
                            className="text-sm"
                          >
                            {childitem}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  </div>
  
                  <div className="px-8 py-4 rounded-md custom-box-shadow mb-4">
                  <div className="flex justify-between my-2">
                    <p className="text-base font-semibold">Warranty Type</p>
                    <MdKeyboardArrowDown
                      className={`text-xl cursor-pointer ${
                        warrantyArrowClick ? "" : "hidden"
                      }`}
                      onClick={onWarrantyArrowClick}
                    />
                    <MdKeyboardArrowUp
                      className={`text-xl cursor-pointer ${
                        warrantyArrowClick ? "hidden" : ""
                      }`}
                      onClick={onWarrantyArrowClick}
                    />
                  </div>
                  {!warrantyArrowClick && (
                    <div>
                      {item.productItems.map((childitem, childindex) => (
                        <div key={`${childindex}-childitem4`} className="my-1">
                          <input
                            type="checkbox"
                            id={`${childindex}-checkbox4`}
                            className="mr-2 cursor-pointer"
                          />
                          <label
                            htmlFor={`${childindex}-checkbox4`}
                            className="text-sm"
                          >
                            {childitem}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                  </div>
  
                  <div className="px-8 py-4 custom-box-shadow rounded-md mb-4">
                  <div className="my-2 flex justify-between">
                    <p className="text-base font-semibold">Price</p>
                    <MdKeyboardArrowUp
                      className={`cursor-pointer text-xl ${
                        pricecontent ? "" : "hidden"
                      }`}
                      onClick={displayPriceContent}
                    />
                    <MdKeyboardArrowDown
                      className={`cursor-pointer text-xl ${
                        pricecontent ? "hidden" : ""
                      }`}
                      onClick={displayPriceContent}
                    />
                  </div>
                  {pricecontent && (
                    <div className="w-[48vw] md:w-[25vw] lg:w-[15vw] flex">
                      <input
                        type="number"
                        placeholder="Min"
                        className="w-full border-2 border-gray-300 md:px-2 py-2 mr-2 rounded"
                        id="min-small"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        className="w-full border-2 border-gray-300 md:px-2 py-2 mr-2 rounded"
                        id="max-small"
                      />
                      <p className="flex justify-center items-center bg-primary-orange1 px-3 rounded">
                        <MdPlayArrow className="text-white" />
                      </p>
                    </div>
                  )}
                </div>
                <div className="px-10 py-6 custom-box-shadow  rounded-md mb--4">
                  <div className="my-2 flex justify-between">
                    <p className="text-base font-semibold">Ratings</p>
                    <MdKeyboardArrowDown
                      className={`cursor-pointer text-xl ${
                        ratingsContent ? "hidden" : ""
                      }`}
                      onClick={displayRatingsContent}
                    />
                    <MdKeyboardArrowUp
                      className={`cursor-pointer text-xl ${
                        ratingsContent ? "" : "hidden"
                      }`}
                      onClick={displayRatingsContent}
                    />
                  </div>
  
                  {ratingsContent && (
                    <div>
                      {ratings.map((rating, m) => (
                        <div className="my-2 flex" key={m}>
                          <input
                            type="checkbox"
                            id={`rating-${m}-small`}
                            className="mr-2 cursor-pointer "
                          />
                          <div className="flex flex-row" key={m + 1}>
                            {Array.from({ length: rating }).map((item, k) => (
                              <Fragment key={k+3}>
                                <MdOutlineStarPurple500 className="text-yellow-400 text-xl" />
                              </Fragment>
                            ))}
  
                            {Array.from({ length: 5 - rating }).map((item, l) => (
                              <Fragment key={l+2}>
                                <MdOutlineStarPurple500
                                  className="text-gray-300 text-xl"
                                  key={l}
                                />
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
  