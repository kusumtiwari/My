import { useState, useContext } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
import { UserContext } from "../../context/Context";
const cartItems = 4;
const cartData = [
  {
    id: 1,
    image: "/deals-images/deals1.png",
    heading: "Navy blue Pant with Multi Pocket jeans for men",
    originalPrice: 3000,
    discountPercent: "20%",
    discountedPrice: 1699,
    brand: "No brand",
    color: "Navy",
    quantity: "5",
  },
  {
    id: 2,
    image: "/deals-images/deals2.png",
    heading: "Mosquito Killer",
    originalPrice: 2500,
    discountPercent: "5%",
    discountedPrice: 2200,
    brand: "Gucci",
    color: "Navy",
    quantity: "7",
  },
  {
    id: 3,
    image: "/deals-images/deals3.png",
    heading: "Bag",
    originalPrice: 1500,
    discountPercent: "20%",
    discountedPrice: 3000,
    brand: "Prada",
    color: "Baby Pink",
    quantity: "2",
  },
  {
    id: 4,
    image: "/deals-images/deals1.png",
    heading: "Navy blue Pant with Multi Pocket jeans for men",
    originalPrice: 1600,
    discountPercent: "20%",
    discountedPrice: 1000,
    brand: "No brand",
    color: "Navy",
    quantity: "6",
  },
];

export default function CartItemsDetail({onCheckBoxClick, onAllSelectionClick}) {
  const [quantityCounts, setquantityCounts] = useState(cartData.map((item) => 1));
  const [removebtns, setremovebtns] = useState(cartData.map((item) => false));
  const [selectAllClicked, setselectAllClicked] = useState(false);
  const [individualChecked, setIndividualChecked] = useState(cartData.map(() => false));

  const onSelectAllClick = () => {
    const quantitySum = quantityCounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const priceSummedUpArray = cartData.map((item,index) => {
      return item.discountedPrice * quantityCounts[index];
    })
   const priceSum = priceSummedUpArray.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
   console.log(priceSummedUpArray);
   const idArray = cartData.map((item) => item.id);
   const allclickedArray = individualChecked.map((item) => {
    if(!selectAllClicked){
    return true;
    }
    else{
      return false;
    }
   });
   setIndividualChecked(allclickedArray);
   if(!selectAllClicked){
    onAllSelectionClick(quantitySum,priceSum,idArray);
   }
   else{
    onAllSelectionClick(0,0,idArray);
   }
   setselectAllClicked(!selectAllClicked);
  };
 
  const { addToWishList } = useContext(UserContext);
  const {subtractFromWishList} = useContext(UserContext)
  const [wishlistDivClick, setwishListDivClick] = useState(cartData.map((item) => false));
 const onWishListClick = (index) => {
   const updatedData = [...wishlistDivClick];
   if(!updatedData[index]){
    updatedData[index] = true;
    setwishListDivClick(updatedData);
    addToWishList();
   } 
   else{
    updatedData[index] = false;
    setwishListDivClick(updatedData);
    subtractFromWishList();
   }
 }
  const onRemoveBtnClick = (index) => {
    const updatedData = [...removebtns];
    updatedData[index] = true;
    setremovebtns(updatedData);
  };
  const increment = (index) => {
    if (quantityCounts[index] < cartData[index].quantity) {
      const updatedCounts = [...quantityCounts];
      updatedCounts[index] = quantityCounts[index] + 1;
      setquantityCounts(updatedCounts);
    }
  };

  const decrement = (index) => {
    if (quantityCounts[index] > 1) {
      const updatedCounts = [...quantityCounts];
      updatedCounts[index] = quantityCounts[index] - 1;
      setquantityCounts(updatedCounts);
    }
  };
  
  return (
    <div className="overflow-hidden text-primary-blue">
      <h1 className="text-2xl font-semibold my-4">Shopping Cart</h1>
      <hr className="border border-gray-300 mt-8" />
      <div className="my-4 flex items-center">
        <input
          type="checkbox"
          id={`selectall-cartitems`}
          className="mr-2 cursor-pointer h-5 w-5 border-8 border-primary-blue"
          onClick={onSelectAllClick}
        />
        <label htmlFor={`selectall-cartitems`} className="text-base">
          {`Select All (${cartItems} items)`}
        </label>
      </div>
      <div className="h-[45vh] overflow-scroll">
        {cartData.map(
          (item, index) =>
            !removebtns[index] && (
              <div className="flex  h-[35vh] lg:h-[25vh] my-4" key={item.id}>
                <input
                  type="checkbox"
                  id={`cartitem-${item.id}`}
                  className="mr-2 cursor-pointer h-5 w-5 border-8 border-primary-blue my-auto"
                  onClick={() => {
                    onCheckBoxClick(quantityCounts[index], item.discountedPrice, item.id);
                    const updatedChecked = [...individualChecked];
                    updatedChecked[index] = !updatedChecked[index];
                    setIndividualChecked(updatedChecked);
                  }}
                  checked={individualChecked[index]}
                />
                <div
                  key={`cartdiv-${item.id}`}
                  className="flex flex-1 items-center justify-center border border-gray-300 py-2 px-4 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt="product-image"
                    className="lg:h-[100%] rounded-md"
                  />
                  <div className="flex-1 ml-2">
                    <div className="flex justify-between flex-col lg:flex-row">
                      <h1 className="max-w-xs whitespace-pre-line">
                        {item.heading}
                      </h1>
                      <div>
                        <h1 className="text-lg font-semibold">
                          {`Rs. ${item.discountedPrice}`}
                        </h1>
                        <div className="flex">
                          <h1 className="text-base line-through text-gray-500">
                            {`Rs. ${item.originalPrice}`}
                          </h1>
                          <h1 className="text-base">
                            {`-${item.discountPercent}`}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex my-2">
                      <h1 className="text-gray-500 text-sm">Brand: </h1>
                      <h1 className="text-sm px-1">{item.brand}</h1>
                      <h1 className="text-sm text-gray-500">,Color:</h1>
                      <h1 className="text-sm px-1">{item.color}</h1>
                    </div>
                    <div className="flex justify-between flex-col lg:flex-row">
                      <div className="flex">
                        <div className="border border-gray-400 rounded">
                          <button
                            className="px-1.5 bg-gray-300"
                            onClick={() => decrement(index)}
                          >
                            -
                          </button>
                          <span className="px-4">{quantityCounts[index]}</span>
                          <button
                            className="px-1.5 bg-gray-300"
                            onClick={() => increment(index)}
                          >
                            +
                          </button>
                        </div>
                        <h1 className="mx-2 text-sm text-grey-500">{`Only ${item.quantity} left`}</h1>
                      </div>
                      <div className="flex text-sm mt-2 lg:mt-0">
                        <div
                          className="flex items-center mr-2 cursor-pointer justify-center"
                          onClick={() => onRemoveBtnClick(index)}
                        >
                          <HiOutlineTrash className="w-5 h-5 text-gray-500" />
                          <h1 className="text-sm">Remove</h1>
                        </div>
                        <div className="h-3 w-1 border border-grey-300"></div>
                        <div
                          className="flex items-center justify-center cursor-pointer"
                          onClick={() => onWishListClick(index)}
                        >
                          {wishlistDivClick[index] ? (
                            <AiTwotoneHeart className="text-xl text-primary-orange1" />
                          ) : (
                            <AiOutlineHeart className="text-xl" />
                          )}
                          <h1 className="text-sm">Add to wishlist</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
