import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


const carouselArray = [
    {
        image: "/productpage-images/ProductCarousel_img1.png",
    },
    {
        image: "/productpage-images/ProductCarousel_img2.png",
    },
    {
        image: "/productpage-images/ProductCarousel_img3.png",
    },
]

const items = carouselArray.map((items,index) => (
    <div key={index}>
        <img src={items.image} alt="banner image" className="sm:w-[80vw] md:w-[43vw] lg:w-[29vw] h-[45vh]"/>
    </div>
))

export default function ProductCarousel(){
    return(
        <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay = {true}
        autoPlayInterval = {1500}
        infinite = {true}
        disableDotsControls={true}
        disableButtonsControls = {true}
    />
    )
}