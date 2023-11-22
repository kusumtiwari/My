import TopBanner from "../components/category-page/TopBanner";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import GadgetsCarousel from "../components/category-page/GadgetsCarousel";
import BannerCarousel from "../components/category-page/BannerCarousel";
import TopBrands from "../components/category-page/TopBrands";
import TopDeals from "../components/category-page/TopDeals";
import DiscountBanner from "../components/category-page/Discountbanner";
import NewArrivals from "../components/category-page/NewArrivals";
import BestSelling from "../components/category-page/BestSelling";
import BannerCarousel2 from "../components/LandingPage/BannerCarousel";

export default function CategoryPage() {
  return (
    <>
      <div className="px-10 md:px-12 lg:px-20 py-6">
        <div className="flex  flex-wrap ">
          <p className="text-sm text-secondary-greydefault">Home</p>
          <MdOutlineKeyboardArrowRight className="text-xl text-secondary-greydefault" />
          <p className="text-sm text-primary-blue ">Men's Fashion</p>
        </div>
        <TopBanner />
        <GadgetsCarousel />
        <BannerCarousel />
        <TopBrands />
        <TopDeals />
        <DiscountBanner />
        <NewArrivals />
        <BestSelling />
        <BannerCarousel2 />
      </div>
    </>
  );
}
