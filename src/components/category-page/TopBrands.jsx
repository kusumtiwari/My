import TopbrandsCarousel from "../common/fields/TopBrandsCarousel"
const brands = [
    {
        image : "/brand-images/categories-brand1.png",
    },
    {
        image : "/brand-images/categories-brand2.png",
    },
    {
        image : "/brand-images/categories-brand3.png",
    },
    {
        image : "/brand-images/categories-brand4.png",
    },
    {
        image : "/brand-images/categories-brand6.png",
    },
    {
        image : "/brand-images/categories-brand7.png",
    },
    {
        image : "/brand-images/categories-brand8.png",
    },
    {
        image : "/brand-images/categories-brand1.png",
    },
    {
        image : "/brand-images/categories-brand2.png",
    },
    {
        image : "/brand-images/categories-brand3.png",
    },
]

export default function TopBrands(){
      return(
          <div className="font-poppins relative mb-8 lg:ml-4 ">
          <TopbrandsCarousel brands={brands}/>
        </div>
      )
}