const featureimages = [
  {
    image: "/featured-images/featuredimage2.png",
    description: "Chin mount with ...",
    originalPrice: "Rs999",
    discountedPrice: "Rs.799",
  },
  {
    image: "/featured-images/featuredimage3.png",
    description: "Kids swing upto..",
    originalPrice: "Rs.799",
    discountedPrice: "Rs.799",
  },
  {
    image: "/featured-images/featuredimage4.png",
    description: "Biker leather shoe..",
    originalPrice: "Rs.799",
    discountedPrice: "Rs.10099",
  },
  {
    image: "/featured-images/featuredimage5.png",
    description: "Mens Leather Jacket..",
    originalPrice: "Rs.10099",
    discountedPrice: "Rs.10099",
  },
];

export default function Featuredproduct() {
  return (
    <div className="">
      <h1 className="text-xl text-primary-blue font-semibold  py-4">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 cursor-pointer lg:h-[80vh]">
        <div className="h-full bg-secondary-grey flex justify-center items-center relative">
          <img
            src="featured-images/featuredimage1.png"
            alt="featuredimage1"
            className="h-[80%]"
          />
          <h1 className="bg-red-800 text-white text-xs py-1 px-1 w-[16%] md:w-[10%] absolute top-4 left-4">
            10% OFF
          </h1>
          <div className="flex absolute bottom-5 justify-between w-[100%] px-6 text-primary-blue">
            <h1 className="text-lg">Original Nike bag</h1>
            <h1 className="text-xl text-black font-bold">Rs 500</h1>
          </div>
        </div>
        <div className= "md:h-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {featureimages.map((items, index) => (
            <div
              className="bg-secondary-grey flex justify-center flex-col relative"
              key={index}
            >
                <div className="flex justify-center items-center ">
                <img src={items.image} alt="featuredimage" />
                </div>
            
              <h1 className="text-xs bg-red-800 text-white py-1 px-1 w-[] md:w-[20%] absolute top-4 left-4">
                10% OFF
              </h1>
              <div className="flex justify-between px-4 mt-6">
                <h1 className="text-primary-blue">{items.description}</h1>
                <div className="pb-2">
                  {items.discountedPrice === items.originalPrice ? (
                    <h1>{items.originalPrice}</h1>
                  ) : (
                    <div>
                      <h1 className="line-through text-gray-800 ">{items.originalPrice}</h1>
                      <h1>{items.discountedPrice}</h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
