
let brands = [
  {
    image :  '/brand-images/brand1.png',
  },
  {
    image :   '/brand-images/brand2.png',
  },
   {
    image :  '/brand-images/brand3.png',
   },
   {
     image :  '/brand-images/brand4.png',
   },
   {
    image :  '/brand-images/brand5.png',
   },
   {
    image : '/brand-images/brand6.png',
   },
   {
    image :  '/brand-images/brand7.png',
   },
   {
    image :  '/brand-images/brand8.png',
   },
   {
    image :  '/brand-images/brand1.png',
   },
   {
    image :   '/brand-images/brand2.png'
   }
]
import TopbrandsCarousel from "../common/fields/TopBrandsCarousel"
export default function Topbrands(){
    return(
        <div className="font-poppins relative mb-8 lg:ml-4 ">
       <TopbrandsCarousel brands={brands}/>
      </div>
    )
}