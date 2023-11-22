import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import { PrevSlider } from '../common/navigation/Slider';
// import { NextSlider } from '../common/navigation/Slider';

// const prevstyle = "left-[-15px] top-[35%]";
// const nextstyle = "right-0 top-[35%]";

const responsive = {
    0: { items: 1 },
    950: { items: 2 },
};

const banner = [
    {
        image: '/categories-image/Categories-bannercarousel1.png',
    },
    {
        image: '/categories-image/Categories-bannercarousel2.png',
    },
]

const items = banner.map((item,index) => (
    <div key={index}>
        <img src={item.image} alt='banner' className='h-[35vh] w-[75vw] md:w-[43vw]'></img>
    </div>
))
export default function BannerCarousel(){
    return(
        <div className='my-16'>
  <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls={true}
        disableDotsControls={true}
        autoPlay={true}
        infinite={true}
        autoPlayInterval={1500}
    />
      {/* <div className="b-refs-buttons flex px-6">
    <PrevSlider slidePrev = {slidePrev} prevstyle={prevstyle}/>
        <NextSlider slideNext = {slideNext} nextstyle={nextstyle}/> */}
     </div>
    
    )
}