
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [wishlistItems, setwishlistItems] = useState(0);
  const [cartItems, setcartItems] = useState(0);

  const addToCart = () => setcartItems(cartItems + 1);
  const addToWishList = () => {
    setwishlistItems(wishlistItems + 1);
  };

  const subtractFromWishList = () => {
    setwishlistItems(wishlistItems - 1);
  };

  const navigate = useNavigate();
  const handleSubCategoryNavigation = (text, id, type) => {
    const itemName = text.replace(/ /g, "-").toLowerCase();
    navigate(`/sub-category/${itemName}`, { state: { text, id, type } });
    window.scroll(0, 0);
  };
  const onCartClick = () => navigate("/cart");
  const handleAccountClick = () => navigate("/login");
  const onLogoClick = () => navigate("/");
  const handleProductPageNavigation = (text, id) => {
    const itemName = text.replace(/ /g, "-").toLowerCase();
    navigate(`/product-page/${itemName}`, { state: { text, id } });
    window.scroll(0, 0);
  };

  return (
    <UserContext.Provider
      value={{
        handleSubCategoryNavigation,
        onLogoClick,
        onCartClick,
        handleAccountClick,
        addToWishList,
        wishlistItems,
        handleProductPageNavigation,
        addToCart,
        cartItems,
        subtractFromWishList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
