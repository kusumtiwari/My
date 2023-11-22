import { IoMdStar } from "react-icons/io";
import { MdOutlineKeyboardArrowRight,MdOutlineKeyboardArrowLeft } from "react-icons/md";
import SortBy from "./SortBy";
import { useState } from "react";
import FilterDropDown from "./FilterDropDown";
const paginationContents = [
    {
        image: "/deals-images/deals1.png",
        description: "Factory Sell Compatible OEM Imaje",
        discountedAmount: "Rs.300",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals2.png",
        description: "Rechargeable Electric Mosquito Killer",
        discountedAmount: "Rs.300",
        originalAmount: "Rs.350",
        ratingStar: "3",
        ratedNumber: "(10)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "/deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "20% OFF",
      },
      {
        image: "/deals-images/deals3.png",
        description: "Men Leather Suit",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.350",
        ratingStar: "4",
        ratedNumber: "(2)",
        discount: "10% OFF",
      },
      {
        image: "deals-images/deals4.png",
        description: "Motor Bikes Helmet",
        discountedAmount: "Rs.399",
        originalAmount: "Rs.399",
        ratingStar: "3",
        ratedNumber: "(20)",
        discount: "400% OFF",
      },

]


export default function CategoriesPagination({title, indexofcategories, displaySelection1}){
    const [currentPage, setcurrentPage] = useState(1);
    const pages = 2;
    const contentPerPage = 16;
    const startIndex = (currentPage - 1) * contentPerPage;
    const endIndex = currentPage * contentPerPage;
    const filteredContent = paginationContents.slice(startIndex, endIndex);

    const displayPage = (pagenum) => setcurrentPage(pagenum);
    const displayNext = () => {
       if(currentPage === pages){
        setcurrentPage(1);
       }
       else{
        setcurrentPage(currentPage + 1)
       }   
    };
    const displayPrev = () => {
        if(currentPage === 1)
        {
            setcurrentPage(1);
        }
        else{
            setcurrentPage(currentPage-1)
        }
    }
    return(
        <div className="text-primary-blue w-[85vw] lg:w-[70vw] z-10 ">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">{title} <span className="text-base font-thin">({paginationContents.length + " Products"})</span></h1>
                <div className="flex justify-end items-center">
                <FilterDropDown displaySelection1={displaySelection1}/>
             <SortBy/>
                </div>
          
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4 h-full">
          {
 filteredContent.map((item, i) => (
    <div
      className="item flex flex-col bg-white rounded mr-2 border border-grey-500 cursor-pointer hover:shadow-lg py-8 px-2"
      key={i}
    >
      <img
        src={item.image}
        alt="First deal image"
        className="w-[90%] h-[60%] mx-auto relative"
      />
      <h1 className="text-white bg-red-800 text-xs px-1 rounded absolute py-1">{item.discount}</h1>
      <h1 className="text-sm text-primary-blue pt-3 h-[20%]">
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
        {Array.from({ length: Number(item.ratingStar) }).map((items, index) => (
          <IoMdStar key={index} className="text-yellow-500" />
        ))}
        <p className="text-sm font-thin">{item.ratedNumber}</p>
      </div>
    </div>
  ))
          } 
            </div>

            <div className="flex justify-end items-center">
                <MdOutlineKeyboardArrowLeft className={`w-6 h-7 cursor-pointer ${currentPage === 1 ? 'text-gray-300' : '' }`} onClick={displayPrev}/>
                {
                    Array.from({length : pages}).map((item,index) => (
                        <button key={index} onClick={() => displayPage(index+1)} className={`text-primary-blue text-sm px-2 py-1 rounded mx-2 ${currentPage === (index+1) ? 'bg-primary-blue text-white' : ''}`}>{index + 1}</button>
                    ))
                }
                <MdOutlineKeyboardArrowRight className="w-6 h-6 cursor-pointer" onClick={displayNext}/>
            </div>
        </div>
    )
}