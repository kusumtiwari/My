import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { PrevSlider } from '../common/navigation/Slider';
import { NextSlider } from '../common/navigation/Slider';
import { useRef } from 'react';

const prevstyle = "left-[-15px] top-[35%]";
const nextstyle = "right-0 top-[35%]";
const GadgetsArray = [
    {
        image : "/categories-image/Categories_image1.png",
        description : "Socks",
    },
    {
        image : "/categories-image/Categories_image2.png",
        description : "Tie & Bow Tie",
    },
    {
        image : "/categories-image/Categories_image3.png",
        description : "Scarfs",
    },
    {
        image : "/categories-image/Categories_image4.png",
        description : "Kids and Toys",
    },
    {
        image : "/categories-image/Categories_image5.png",
        description : "Sports and outdoors",
    },
    {
        image : "/categories-image/Categories_image6.png",
        description : "TV and home appliances",
    },
    {
        image : "/categories-image/Categories_image7.png",
        description : "Health and beauty ",
    },
    {
        image : "/categories-image/Categories_image8.png",
        description : "Electronic Devices",
    },
    {
        image : "/categories-image/Categories_image1.png",
        description : "Mens Fashion",
    },
    {
        image : "/categories-image/Categories_image9.png",
        description : "Mens Fashion",
    },
    {
        image : "/categories-image/Categories_image6.png",
        description : "Mens Fashion",
    },
    {
        image : "/categories-image/Categories_image5.png",
        description : "Groceries",
    },
]

const responsive = {
    0: { items: 1 },
    300: {items: 2},
    450: { items: 3 },
    600 : {items: 4},
    700 : {items: 5},
    950: {items: 6},
    1124: { items: 7 },
    1260 : {items: 8}
};

const mappeditems = GadgetsArray.map((item, index) => (
    <div key={index}>
        <img src={item.image} alt="Gadgets" />
        <h1 className='text-sm text-primary-blue font-400'>{item.description}</h1>
    </div>
));

export default function GadgetsCarousel(){
    const carouselRef = useRef(null);
    const slidePrev = () =>  {if (carouselRef.current) {
        carouselRef.current.slidePrev();}
    }

    const slideNext = () => {if (carouselRef.current) {
        carouselRef.current.slideNext();
    }}
    return (
        <div className='relative mt-16'>
            <AliceCarousel
                mouseTracking
                items={mappeditems}
                responsive={responsive}
                controlsStrategy="alternate"
               disableDotsControls={true}
               disableButtonsControls={true}
               ref={carouselRef}
            />
            <div className='flex justify-between'>
            <PrevSlider slidePrev = {slidePrev} prevstyle={prevstyle}/>
            <NextSlider slideNext = {slideNext} nextstyle={nextstyle}/>
            </div>
        </div>
    );
}