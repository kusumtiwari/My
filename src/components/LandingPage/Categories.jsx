import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useRef } from 'react';
import { PrevSlider } from '../common/navigation/Slider';
import { NextSlider } from '../common/navigation/Slider';

const CategoriesArray = [
    {
        image : "/categories-image/Categories_image1.png",
        description : "Mens Fashion",
    },
    {
        image : "/categories-image/Categories_image2.png",
        description : "Home Appliances",
    },
    {
        image : "/categories-image/Categories_image3.png",
        description : "Groceries and pets",
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
        image : "categories-image/Categories_image8.png",
        description : "Electronic Devices",
    },
    {
        image : "categories-image/Categories_image1.png",
        description : "Mens Fashion",
    },
    {
        image : "categories-image/Categories_image9.png",
        description : "Mens Fashion",
    },
    {
        image : "categories-image/Categories_image6.png",
        description : "Mens Fashion",
    },
    {
        image : "categories-image/Categories_image5.png",
        description : "Groceries",
    },
]

const prevstyle = "left-[-15px] top-[50%]";
const nextstyle = "right-3 top-[50%]";
const responsive = {
    0: { items: 1 },
    300: {items: 2},
    450: { items: 3 },
    600 : {items: 4},
    700 : {items: 5},
    950: {items: 6},
    1124: { items: 7 },
    1240 : {items: 8}
};

const mappeditems = CategoriesArray.map((item, index) => (
    <div key={index} className=''>
        <img src={item.image} alt="Categories Image" />
        <h1 className='text-sm text-primary-blue font-400 ml-1.5'>{item.description}</h1>
    </div>
));

export default function Categories() {
    const carouselRef = useRef(null);
    const slidePrev = () =>  {if (carouselRef.current) {
        carouselRef.current.slidePrev();}
    }

    const slideNext = () => {if (carouselRef.current) {
        carouselRef.current.slideNext();
    }}
    return (
        <div className='relative'>
            <h1 className='text-xl text-primary-blue font-semibold pb-8'>Categories</h1>
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