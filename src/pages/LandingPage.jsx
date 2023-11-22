import Herosection from '../components/LandingPage/Herosection.jsx';
import Dealspart from '../components/LandingPage/Dealspart.jsx';
import Specialoffer from '../components/LandingPage/Specialoffer.jsx';
import Topbrands from '../components/LandingPage/Topbrands.jsx';
import Featuredproduct from '../components/LandingPage/Featuredproduct.jsx';
import Banner from '../components/LandingPage/Banner.jsx';
import Categories from '../components/LandingPage/Categories.jsx';
import BannerCarousel from '../components/LandingPage/BannerCarousel.jsx';
import SuggestedProducts from '../components/LandingPage/SuggestedProducts.jsx';
import GadgetBanner from '../components/LandingPage/GadgetBanner.jsx';


export default function Landingpage(){
    return(
     <>
     <div className='px-5 py-5 pt-8 mx-3'>
     <Herosection />
     <Dealspart />
     <Specialoffer/>
     <Topbrands />
     <Featuredproduct />
     <Banner />
     <Categories />
     </div>
     <BannerCarousel />
     <div className='px-5 py-5 pt-8'>
     <SuggestedProducts />
     <GadgetBanner />
     </div>
     </>
    )
}