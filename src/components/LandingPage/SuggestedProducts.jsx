import { IoMdStar } from "react-icons/io";

const griditems = [
  {
    image: "/deals-images/deals1.png",
    description: "Factory Sell Compatible \nOEM Imaje",
    discountedAmount: "Rs.300",
    originalAmount: "Rs.350",
    ratingStar: "4",
    ratedNumber: "(2)",
    discount: "10% OFF",
    category: "flash sale",
  },
  {
    image: "/deals-images/deals2.png",
    description: "Rechargeable Electic \nMosquito Killer",
    discountedAmount: "Rs.300",
    originalAmount: "Rs.350",
    ratingStar: "3",
    ratedNumber: "(10)",
    discount: "20% OFF",
    category: "flash sale",
  },
  {
    image: "/deals-images/deals3.png",
    description: "Men Leather Suit",
    discountedAmount: "Rs.399",
    originalAmount: "Rs.350",
    ratingStar: "4",
    ratedNumber: "(2)",
    discount: "10% OFF",
    category: "flash sale",
  },
  {
    image: "/deals-images/deals4.png",
    description: "Motor Bikes Helmet",
    discountedAmount: "Rs.399",
    originalAmount: "Rs.399",
    ratingStar: "3",
    ratedNumber: "(20)",
    discount: "20% OFF",
    category: "",
  },
  {
    image: "/deals-images/deals1.png",
    description: "Chin mount with mobile holder mount",
    discountedAmount: "Rs.399",
    originalAmount: "Rs.450",
    ratingStar: "5",
    ratedNumber: "(3)",
    discount: "20% OFF",
    category: "Exress",
  },
  {
    image: "/deals-images/deals2.png",
    description: "Factory Sell Compatible \nOEM Imaje",
    discountedAmount: "Rs.300",
    originalAmount: "Rs.350",
    ratingStar: "2",
    ratedNumber: "(2)",
    discount: "20% OFF",
    category: "Exress",
  },
];

export default function SuggestedProducts() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-xl text-primary-blue font-semibold">
          You may like
        </h1>
        <button className="text-sm font-semibold text-primary-blue bg-white border border-primary-orange1 rounded py-1.5 px-3 mr-1 hover:bg-primary-orange1 hover:text-white hover:shadow-lg transition duration-300 ease-in-out">
          View more
        </button>
      </div>
      <div className="flex flex-col lg:flex-row pt-5">
        <div className="relative mr-4">
          <img
            src="/suggestionimg1.png"
            alt="suggestionimage"
            className="h-[80vh] lg:h-[90vh] w-[100%] md:w-[80%] lg:w-[100%] mb-6 lg:mb-0 mx-auto lg:mx-0"
          />
          <div className="absolute top-[60%] left-[20%] md:left-[35%] lg:left-[30%] text-white flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Upto 20% off</h1>
            <p className="text-base md:py-1">on new and trending fashion at</p>
            <p className="text-base">Wholesale price</p>
            <button className="px-4 py-2 text-base border border-white mt-3">
              Buy now
            </button>
          </div>
        </div>
        <div className="lg:flex-1 lg:h-[90vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 gap-6 lg:gap-2 lg:h-full">
            {griditems.map((item, index) => (
              <div className="item flex flex-col bg-white rounded mr-2 border border-grey-500 cursor-pointer hover:shadow-3xl relative h-[53vh] md:h-full px-2 py-1" key={index}>
                <img
                  src={item.image}
                  alt="First deal image"
                  className="w-[55%] md:w-[68%] h-[52%] mx-auto my-auto"
                />
                <h1 className="text-white bg-red-800 text-xs w-[20%] md:w-[25%] px-1 rounded absolute left-0 py-1">
                  {item.discount}
                </h1>
                <h1
                  className={`text-white bg-primary-blue text-xs w-[20%] md:w-[25%] px-1 rounded absolute bottom-[34%] left-0 py-1 ${
                    item.category === "" ? "hidden" : ""
                  }`}
                >
                  {item.category}
                </h1>

                <h1 className="text-sm text-primary-blue h-[12%]">
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
                <div className="flex mb-2">
                  {Array.from({ length: Number(item.ratingStar) }).map(
                    (items, index) => (
                      <IoMdStar key={index} className="text-yellow-500" />
                    )
                  )}
                  <p className="text-sm font-thin">{item.ratedNumber}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
