import AliceCarousel from "react-alice-carousel";
import { PrevSlider } from "../navigation/Slider";
import { NextSlider } from "../navigation/Slider";
import "react-alice-carousel/lib/alice-carousel.css";
import { useState , useRef, useContext} from "react";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { UserContext } from "../../../context/Context";


const responsive = {
  0: { items: 1 },
  450: { items: 2 },
  650: { items: 3 },
  1024: { items: 5 },
};

// const prevstyle = "left-[-15px] top-[47%]";
// const nextstyle = "right-[-10px] top-[47%]";

export default function ProductCarousel({ dealsArray, headingText, buttonText}) {
  const {handleProductPageNavigation} = useContext(UserContext);
  const [showPrevbtn, setshowPrevbtn] = useState(false);
  const [showNextbtn, setshowNextbtn] = useState(true);
 const carouselRef = useRef(null);
  return (
    <div className="font-poppins my-8">
      <div className="flex justify-between">
        <h1 className="text-xl text-primary-blue font-semibold">
          {headingText}
        </h1>
        <button className="text-sm font-semibold text-primary-blue bg-white border border-primary-orange1 rounded py-1.5 px-3 mr-1 hover:bg-primary-orange1 hover:text-white hover:shadow-lg transition duration-300 ease-in-out">
          {buttonText}
        </button>
      </div>
      <div className="py-8 relative bg-blue">
        <AliceCarousel
          mouseTracking
          disableDotsControls
          responsive={responsive}
          ref={carouselRef}
          mouseDragEnabled = {true}
          renderPrevButton={() => {
              return (
                <button className={`absolute left-[-15px] top-[25%] mt-7 border rounded shadow-lg bg-white ${showPrevbtn ? '' : 'hidden'}`}>
                  {<MdOutlineKeyboardArrowLeft className="w-8 h-8 text-center text-black font-thin" />}
                </button>
              );
            }}
            renderNextButton={() => {
              return (
                <button className={`absolute right-[-10px] bottom-[-100px] mt-7 border rounded shadow-lg bg-white ${showNextbtn ? '' : 'hidden'}`}>
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
          {dealsArray.map((item, i) => (
            <div
              className="item flex flex-col bg-white rounded mr-2 border border-grey-500 cursor-pointer hover:shadow-3xl h-[55vh] lg:h-[50vh]"
              onClick={() => handleProductPageNavigation(item.description, item.id)}
              key={i}
            >
              <img
                src={item.image}
                alt="First deal image"
                className="w-[90%] h-[60%] mx-auto relative"
              />
              <h1 className="text-white bg-red-800 text-xs w-[30%] px-1 rounded absolute left-0 py-1">
                {item.discount}
              </h1>
              <h1 className="text-sm text-primary-blue pt-3 h-[20%] bg">
                {item.description}
              </h1>
              <div className="flex justify-between">
                <h1 className="text-lg text-primary-blue font-semibold">
                  {item.discountedAmount}
                </h1>
                <h1 className="text-primary-blue line-through text-sm font-thin">
                  {item.originalAmount}
                </h1>
              </div>
              <div className="flex">
                {Array.from({ length: Number(item.ratingStar) }).map(
                  (items, index) => (
                    <IoMdStar key={index} className="text-yellow-500" />
                  )
                )}
                <p className="text-sm font-thin">{item.ratedNumber}</p>
              </div>
            </div>
          ))}
        </AliceCarousel>
    
      </div>
    </div>
  );
}
