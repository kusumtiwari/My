import { PiArrowsDownUp } from "react-icons/pi";
import { TbFilter } from "react-icons/tb";
import { MdOutlineStarPurple500 } from "react-icons/md";
import {BiSolidLike, BiDotsVerticalRounded} from "react-icons/bi";
import { useState } from "react";

const reviewsArray = [
  {
    rating: "5",
    reviewer: "by Raju Lama",
    time: "1 week ago",
    like: "0",
    review:
      "Perfect packing . Best phone galaxy f22. Very fast Receive in only 2 days from order . Nice discount. I am very happy with daraz and that product. Thanks so much Daraz Nepal . I used 15 days the phone it works fine no any issue found . I suggest to all my friends go for online shoping eith daraz . There is available nice product with discounted price.",
    product1 : "/productpage-images/Productpageimg2.png",
    product2 : "/productpage-images/Productpageimg3.png"
  },
  {
    rating: "4",
    reviewer: "by Rajesh Hamal",
    time: "2 week ago",
    like: "1",
    review:
      "Perfect packing . Best phone galaxy f22. Very fast Receive in only 2 days from order . Nice discount. I am very happy with daraz and that product. Thanks so much Daraz Nepal . I used 15 days the phone it works fine no any issue found . I suggest to all my friends go for online shoping eith daraz . There is available nice product with discounted price.",
    product1 : "/productpage-images/Productpageimg3.png",
    product2 : "/productpage-images/Productpageimg4.png"
  },
  {
    rating: "3",
    reviewer: "by Piyush Lama",
    time: "1 week ago",
    like: "0",
    review:
      "Perfect packing . Best phone galaxy f22. Very fast Receive in only 2 days from order . Nice discount. I am very happy with daraz and that product. Thanks so much Daraz Nepal . I used 15 days the phone it works fine no any issue found . I suggest to all my friends go for online shoping eith daraz . There is available nice product with discounted price.",
    product1 : "/productpage-images/Productpageimg2.png",
    product2 : "/productpage-images/Productpageimg3.png"
  },
  {
    rating: "5",
    reviewer: "by Raju Lama",
    time: "1 week ago",
    like: "0",
    review:
      "Perfect packing . Best phone galaxy f22. Very fast Receive in only 2 days from order . Nice discount. I am very happy with daraz and that product. Thanks so much Daraz Nepal . I used 15 days the phone it works fine no any issue found . I suggest to all my friends go for online shoping eith daraz . There is available nice product with discounted price.",
    product1 : "/productpage-images/Productpageimg2.png",
    product2 : "/productpage-images/Productpageimg3.png"
  },
];
export default function ProductReviews() {
    const [likes, setlikes] = useState(0);
    const [activedots, setactivedots] = useState(false);
    const [clickedicon, setclickedicon] = useState(null);
    const [clickeddots, setclickeddots] = useState(null);
    const likesClicked = (index) => {
        setlikes(likes+1);
        setclickedicon(index);
    }

    const displaybox = (index) => {
        setclickeddots(index);
        setactivedots(!activedots);
    }
    

  return (
    <div>
      <div className="flex justify-between px-4 border border-gray-300">
        <h1 className="text-base py-2">Product Reviews</h1>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex items-center border border-gray-300 px-4 rounded-none">
            <PiArrowsDownUp className="h-7 w-6" />
            <p className="px-2">Sort:</p>
            <p>Latest</p>
          </div>

          <div className="flex items-center px-4">
            <TbFilter className="h-9 w-6" />
            <p className="px-2">Filter:</p>
            <p>All Star</p>
          </div>
        </div>
      </div>

     
     {reviewsArray.map((item,index) => (
     <div className="px-2 py-2 border border-gray-200" key={index}>
        <div className="flex justify-between py-4 flex-col md:flex-row">
            <div className="flex items-center ">
            <h1 className="flex justify-center items-center bg-primary-blue text-white px-2 rounded mr-1">{item.rating}<MdOutlineStarPurple500 className="ml-1"/></h1>
            <h1 className="text-sm mx-1">{item.reviewer},</h1>
            <h1 className="text-sm">{item.time}</h1>
            </div>
            
        <div className="flex items-center mt-2 md:mt-0 relative">
            <span onClick={() => likesClicked(index)}>
            <BiSolidLike className="w-5 h-5 mr-1 cursor-pointer text-primary-blue"/>
            </span>
           {
            (index == clickedicon) ? <h1>{Number(item.like) + likes}</h1> : <h1>{Number(item.like)}</h1>
           }
           
           <span onClick={() => displaybox(index)}>
           <BiDotsVerticalRounded className="h-6 w-5 ml-1 cursor-pointer"/>
           </span>
           
           {(index == clickeddots && activedots) ?  <h1 className="text-black bg-whites shadow-lg absolute right-2 top-2 md:w-[8vw] py-2 px-2 text-sm">Report Abuse</h1> : null }
          
        </div>
        </div>
        <h1 className="text-sm">{item.review}</h1>
        <div className="flex px-2 py-4">
            <img src={item.product1} alt="product1" className="mr-4"></img>
            <img src={item.product2} alt="product2"></img>
        </div>
     </div>
     ) )}
     
    </div>
  );
}
