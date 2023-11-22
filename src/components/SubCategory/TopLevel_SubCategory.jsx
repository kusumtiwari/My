import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useRef, useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/Context";

const CategoriesArray = [
  {
    id: 11,
    image: "/categories-image/Categories_image1.png",
    description: "Clothing",
  },
  {
    id: 12,
    image: "/categories-image/Categories_image2.png",
    description: "Mens Bag",
  },
  {
    id: 13,
    image: "/categories-image/Categories_image3.png",
    description: "Accessories",
  },
  {
    id: 14,
    image: "/categories-image/Categories_image4.png",
    description: "Shoes",
  },
  {
    id: 15,
    image: "/categories-image/Categories_image5.png",
    description: "Boys Fashion",
  },
  {
    id: 16,
    image: "/categories-image/Categories_image6.png",
    description: "Mens Underwear",
  },
  {
    id: 17,
    image: "/categories-image/Categories_image7.png",
    description: "Sports Wear",
  },
  {
    id: 18,
    image: "/categories-image/Categories_image7.png",
    description: "Socks and shoe",
  },
];

const responsive = {
  0: { items: 1 },
  400: { items: 2 },
  600: { items: 3 },
  700: { items: 4 },
  900: { items: 5 },
  1100: { items: 6 },
  1500: { items: 7 },
};

const modifiedCategoriesArray = [...CategoriesArray];
export default function TopLevelSubCategories({ title, id, type }) {
  const [showPrevbtn, setshowPrevbtn] = useState(false);
  const [showNextbtn, setshowNextbtn] = useState(true);
  const itemToMove = modifiedCategoriesArray.find((item) => {
    return id === item.id;
  });
  const indexOfItem = modifiedCategoriesArray.indexOf(itemToMove);
  const { handleSubCategoryNavigation} = useContext(UserContext);

  if (type === "firstSubDropdown") {
    modifiedCategoriesArray.splice(indexOfItem, 1);
    modifiedCategoriesArray.unshift(itemToMove);
  }
  return (
    <div className=" mb-8 relative">
      <AliceCarousel
      mouseTracking
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls={true}
        mouseDragEnabled = {true}
        renderPrevButton={() => {
          return (
            <button className={`absolute top-[12%] left-[1%] mt-7 border rounded shadow-lg bg-white h-9 w-9 ${showPrevbtn? '' : 'hidden'}`}>
              {<MdOutlineKeyboardArrowLeft className="w-8 h-8 text-center text-black font-thin" />}
            </button>
          );
        }}
        renderNextButton={() => {
          return (
            <button className={`absolute top-[10%] right-[30%] mt-7 border rounded shadow-lg bg-white h-9 w-9 ${showNextbtn? '' : 'hidden'}`}>
              {<MdOutlineKeyboardArrowRight className="w-8 h-8 text-center text-black font-thin" />}
            </button>
          );
        }}
        onSlideChanged={(e) => {
          if(e.item !== 0){
            setshowPrevbtn(true);
          }
          if(e.item == 0){
            setshowPrevbtn(false);
          }
          if(e.isNextSlideDisabled){
          setshowNextbtn(false);
          }
          if(!e.isNextSlideDisabled){
            setshowNextbtn(true);
          }
        }}
      >
        {modifiedCategoriesArray.map((item, index) => (
          <div
            key={item.id}
            className="cursor-pointer"
            onClick={() =>
              handleSubCategoryNavigation(item.description, item.id, "topLevelCategory")
            }
          >
          
            {title == item.description ? (
              <div className="flex flex-col items-center transition-transform transform scale-100 duration-300">
                <div className="w-3/4 h-3/4 rounded-full border-2 border-black">
                  <img
                    src={item.image}
                    alt="Categories Image"
                    onDragStart={()=>e.preventDefault()}
                    className="h-full w-full"
                  />
                </div>
                <h1 className="text-base font-bold mt-2">{item.description}</h1>
                <div className="h-[0.2vh] bg-primary-blue mt-7 w-3/4"></div>
              </div>
            ) : (
              <div className="cursor-pointer flex flex-col justify-center items-center transition-transform transform scale-90">
                <div className="w-3/4 h-3/4">
                  <img
                    src={item.image}
                    alt="Categories Image"
                    className="rounded-full h-full w-full"
                  />
                </div>
                <h1 className="text-base font-normal mt-2">{item.description}</h1>
              </div>
            )}
          </div>
        ))}
      </AliceCarousel>
      <div className="h-[0.2vh] w-full bg-gray-200 relative bottom-7"></div>
    </div>
  );
}
