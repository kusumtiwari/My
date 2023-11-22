import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const body_images = [
  {
    bodyimage: "/bodyimages/bodyimage1.png",
    heading: "Upto 20% off",
    subheading: "on electronics and gadgets at wholesale price",
  },
  {
    bodyimage: "/bodyimages/laptop.jpg",
    heading: "Upto 30% off",
    subheading: "on electronics and gadgets \nat wholesale price",
  },
  {
    bodyimage: "/bodyimages/tablet.jpg",
    heading: "Upto 40% off",
    subheading: "on electronics and gadgets \nat wholesale price",
  },
  {
    bodyimage: "/bodyimages/volleyball.jpg",
    heading: "Upto 50% off",
    subheading: "on electronics and gadgets \nat wholesale price",
  },
];

export default function ImagePart() {
  return (
    <div className="overflow-hidden grid grid-cols-1 lg:grid-cols-3 font-poppins lg:h-[72vh] mt-6 mb-6">
      <div className="col-span-1 lg:col-span-2 h-[60vh] bg-orange-200 lg:mr-4">
        <AliceCarousel
          disableButtonsControls={true}
          autoPlay={true}
          autoPlayInterval={2000}
          infinite={true}
        >
          {body_images.map((item, index) => (
            <div
              key={index}
              className="relative h-[60vh] w-full text-white bg-cover bg-center pt-12 pl-2 md:pl-10 rounded img-opacity {
                opacity: 0.5; /* Adjust the value as needed */
              }"
              style={{
                backgroundImage: `url(${item.bodyimage})`,
              }}
            >
              <h1 className="text-3xl font-bold py-4">{item.heading}</h1>
              <p className="text-base">{item.subheading}</p>
              <button className="bg-primary-orange1 px-5 py-2 rounded my-3 text-base">
                Buy now
              </button>
            </div>
          ))}
        </AliceCarousel>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col col-span-1 h-[120vh] md:h-[50vh] lg:h-[60vh] mt-6 lg:mt-0">
        <div className="text-white bg-[url('/bodyimages/bodyimage5.png')] bg-cover bg-center bg-no-repeat w-full md:w-1/2 lg:w-full pt-16 lg:pt-12 pl-2 md:px-6 lg:pl-10  md:mr-4 lg:mr-0 h-3/4 md:h-full rounded">
          <h1 className="text-3xl md:text-2xl font-bold">Upto 20% off</h1>
          <p className="text-base md:text-sm">
            on electronics and gadgets at <br /> wholesale price
          </p>
          <button className="bg-primary-orange1 px-4 py-2 rounded text-sm my-2">
            Buy now
          </button>
        </div>
        <div className="text-white bg-[url('/bodyimages/bodyimage6.png')] bg-cover bg-center bg-no-repeat w-full md:w-1/2 lg:w-full pt-16 lg:pt-12 pl-2 md:pl-8 mt-6 md:mt-0 lg:mt-6 h-3/4 md:h-full">
          <h1 className="text-3xl md:text-2xl font-bold">Upto 20% off</h1>
          <p className="text-base md:text-sm">
            on electronics and gadgets at <br /> wholesale price
          </p>
          <button className="bg-primary-orange1 px-4 py-2 rounded text-sm my-2">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
