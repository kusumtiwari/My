import { MdOutlineStarPurple500 } from "react-icons/md";
import { LiaStarHalfSolid } from "react-icons/lia";
import { useState } from "react";
import ProductReviews from "./ProductReviews";

const averageRatings = [
  {
    number: 83,
    stars: 4,
  },
  {
    number: 10,
    stars: 4,
  },
  {
    number: 2,
    stars: 3,
  },
  {
    number: 1,
    stars: 2,
  },
  {
    number: 2,
    stars: 1,
  },
];

export default function RatingAndReviews() {
  const [showless, setshowless] = useState(true);

  const displayShowmore = () => {
    setshowless(!showless);
  };

  let rating = 4.5;
  let fullNumber = Math.floor(4.5);
  const hasHalfStar = rating % 1 !== 0;
  const ratingsArray = [];

  for (let i = 0; i < fullNumber; i++) {
    ratingsArray.push(
      <MdOutlineStarPurple500 key={i} className="text-yellow-500 h-8 w-8" />
    );
  }

  if (hasHalfStar) {
    ratingsArray.push(
      <LiaStarHalfSolid
        key={ratingsArray.length}
        className="text-yellow-500 h-8 w-8"
      />
    );
  }

  return (
    <div className="md:ml-auto md:w-[60vw] text-primary-blue mt-6 border border-gray-300">
      <div className="flex justify-between items-center bg-secondary-productdetailsbg">
        <h1 className="text-lg font-semibold py-4 px-4">Rating & Review</h1>
        <h1
          className="text-2xl w-6 h-6 font-bold cursor-pointer"
          onClick={displayShowmore}
        >
          {showless ? <span>-</span> : <span>+</span>}
        </h1>
      </div>

      {!showless ? null : (
        <div className="flex flex-col md:flex-row px-4 py-4">
          <div className="mb:6 md:mb-0 md:pr-2 lg:pr-16">
            <h1 className="flex text-3xl text-black items-center pb-2">
              {rating} <p className="text-xl text-primary-blue">/5</p>
            </h1>
            <div className="flex pb-2">
              {ratingsArray.map((items, index) => (
                <span key={index}>{items}</span>
              ))}
            </div>
            <h1 className="text-sm">91 Ratings & 10 reviews</h1>
          </div>
          <div>
            {averageRatings.map((items, index) => (
              <div className="flex" key={index}>
                {Array.from({ length: items.stars }).map((_, starIndex) => (
                  <MdOutlineStarPurple500
                    className="text-yellow-400 h-5 w-5"
                    key={starIndex}
                  />
                ))}
                {Array.from({ length: 5 - items.stars }).map((_, starIndex) => (
                  <MdOutlineStarPurple500
                    className="text-gray-300 h-5 w-5"
                    key={starIndex}
                  />
                ))}
                <div className="w-40 h-4 bg-gray-200 ml-3">
                  <p
                    className="h-full bg-yellow-400"
                    style={{ width: `${items.number}%` }}
                  ></p>
                </div>
                <h1 className="pl-3 text-sm">{items.number}</h1>
              </div>
            ))}
          </div>
        </div>
      )}

      <ProductReviews />
    </div>
  );
}
