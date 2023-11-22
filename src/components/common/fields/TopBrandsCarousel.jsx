import AliceCarousel from "react-alice-carousel";
import { PrevSlider } from "../navigation/Slider";
import { NextSlider } from "../navigation/Slider";
import "react-alice-carousel/lib/alice-carousel.css";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

const prevstyle = "left-[-15px] top-[55%]";
const nextstyle = "right-3 top-[55%]";

const responsive = {
  0: { items: 1 },
  340: { items: 2 },
  470: { items: 3 },
  650: { items: 4 },
  950: { items: 5 },
  1250: { items: 8 },
};

export default function TopbrandsCarousel({ brands }) {
  const [showPrevbtn, setshowPrevbtn] = useState(false);
  const [showNextbtn, setshowNextbtn] = useState(true);
  return (
    <div className="font-poppins relative mb-8 ">
      <h1 className="text-xl text-primary-blue font-semibold py-4">
        Top Brands
      </h1>
      <AliceCarousel
        mouseTracking
        disableDotsControls = {false}
        mouseDragEnabled = {true}
        responsive={responsive}
        renderPrevButton={() => {
            return (
              <button className={`absolute top-[10%] left-[-15px] mt-7 border rounded shadow-lg bg-white ${showPrevbtn ? '' : 'hidden'}`}>
                {<MdOutlineKeyboardArrowLeft className="w-8 h-8 text-center text-black font-thin" />}
              </button>
            );
          }}
          renderNextButton={() => {
            return (
              <button className={`absolute bottom-[-40px] right-[10%] mt-7 border rounded shadow-lg bg-white ${showNextbtn ? '' : 'hidden'}`}>
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
        {brands.map((item, i) => (
          <div
            data-value={i + 1}
            className="item flex flex-col bg-white rounded mr-2 border border-grey-500 cursor-pointer hover:shadow-5xl h-[15vh] w-[75%]"
            key={i}
          >
            <img src={item.image} alt="brandlogo" className="h-full w-full" />
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
}
