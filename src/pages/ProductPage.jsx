
import OtherProducts from "../components/Product_page/OtherProducts";
import SimilarProducts from "../components/Product_page/SimilarProducts";
import ProductPageBanner from "../components/Product_page/ProductPageBanner";
import YouMayLike from "../components/Product_page/YouMayLike";
import ProductCarousel from "../components/Product_page/ProductCarousel";
import Parent from "../components/Product_page/Parent";

export default function ProductPage(){
  return(
    <>
    <div className=" px-10 md:px-12 lg:px-20 py-6 relative">
     <Parent />
     <OtherProducts />
     <ProductCarousel />
    <SimilarProducts />
    <ProductPageBanner />
    <YouMayLike />
    </div>
    </>
  )
}