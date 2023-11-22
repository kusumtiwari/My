import { useLocation } from "react-router-dom";
import TopLevelSubCategories from "../components/SubCategory/TopLevel_SubCategory";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CategoriesContent from "../components/SubCategory/Categories_content";
import { useParams } from "react-router-dom";

const SubCategory = () => {
  const { itemName } = useParams();
  const { state } = useLocation();
  const data = state.text;
  const id = state.id;
  const type = state.type;
  return (
    <div className=" px-10 md:px-12 lg:px-20 py-8 overflow-hidden">
         <div className="flex  flex-wrap mb-8">
          <p className="text-sm text-secondary-greydefault">Home</p>
          <MdOutlineKeyboardArrowRight className="text-xl text-secondary-greydefault" />
          <p className="text-sm text-secondary-greydefault">Men's Clothing</p>
          <MdOutlineKeyboardArrowRight className="text-xl text-secondary-greydefault" />
          <p className="text-sm text-primary-blue">{data}</p>
        </div>
     <TopLevelSubCategories title={data} id={id} type={type}/>
     <CategoriesContent title={data} id={id} type={type}/>
    </div>
  );
};

export default SubCategory;
