import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useRef } from "react";

const images = [
  {
    image: "/bannercarousel-images/bannercarouselimg1.jpg",
    heading: "Up to 60% off",
    subheading: "For all travel baggage",
  },
  {
    image: "/bannercarousel-images/bannercarouselimg2.jpg",
    heading: "Up to 60% off",
    subheading: "For all travel baggage",
  },
  {
    image: "/bannercarousel-images/bannercarouselimg3.jpg",
    heading: "Up to 60% off",
    subheading: "For all travel baggage",
  },
];
const responsive = {
  0: { items: 1 },
  700: { items: 2 },
  1024: { items: 3 },
};

const mappeditems = images.map((item, index) => (
  <div className="text-white relative ">
    <img
      src={item.image}
      alt="Banner Carousel"
      className="h-[30vh] img-opacity w-[70vw] md:w-[40vw] lg:w-[28vw]"
    />
    <div className="absolute top-10 left-5">
      <h1 className="text-3xl font-bold">{item.heading}</h1>
      <h1 className="text-base">{item.subheading}</h1>
      <button className="px-2 py-1 text-base border border-white mt-3">
        Shop now
      </button>
    </div>
  </div>
));

export default function BannerCarousel() {
  const carouselRef = useRef(null);
  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };
  return (
    <div className="relative my-20">
      <AliceCarousel
        mouseTracking
        items={mappeditems}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls={true}
        disableButtonsControls={true}
        ref={carouselRef}
        autoPlay={true}
        autoPlayInterval={1500}
        infinite={true}
      />
    </div>
  );
}
