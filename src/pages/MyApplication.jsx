import UpperNav from "../components/common/navbar/UpperNav";
import LowerNav from "../components/common/navbar/LowerNav";
import SmallScreenNavbar from "../components/common/navbar/Smallscreen_navbar/Navbar";
import FooterFeatures from "../components/common/footer/FooterFeatures.jsx";
import FooterInfo from "../components/common/footer/FooterInfo.jsx";
import Footer from "../components/common/footer/Footer.jsx";
import ProductPage from "./ProductPage";
import Landingpage from "./LandingPage";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import SubCategory from "./SubCategoryPage";
import CartPage from "./CartPage.jsx";


export default function MyApplication() {
  return (
   
      <div className="font-poppins">
        <UpperNav />
        <LowerNav />
        <SmallScreenNavbar />
        <Routes>
          <Route
            path="/"
            element={<Landingpage />}></Route>
          <Route
            path="/product-page/:itemName"
            element={<ProductPage />}></Route>
          <Route
            path="/category-page"
            element={<CategoryPage />}></Route>
          <Route
            path="/sub-category/:itemName"
            element={<SubCategory />}></Route>
          <Route
            path="/cart"
            element={<CartPage />}></Route>
        </Routes>
        <FooterFeatures />
        <Footer />
        <FooterInfo />
      </div>
   
  );
}
