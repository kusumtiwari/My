import CartItemsDetail from "../components/cart-page/CartItemsDetail";
import OrderSummary from "../components/cart-page/OrderSummary";
import CartDeals from "../components/cart-page/CartDeals";
import { useState } from "react";
export default function CartPage(){
    const [selectedItems, setSelectedItems] = useState([]);
    const [cartQuantity, setcartQuantity] = useState(0);
    const [itemPrice, setitemPrice] = useState(0);
   
    const onCheckBoxClick = (quantity,price,id) => {
        const isSelected = selectedItems.includes(id);
        let updatedItems = [...selectedItems];
        if(!isSelected){
            updatedItems.push(id);
            setcartQuantity(cartQuantity + quantity);
            setitemPrice(itemPrice + (quantity * price));
        }
       else{
        updatedItems = selectedItems.filter((Itemid) => Itemid !== id);
        setitemPrice(itemPrice - (quantity * price));
        setcartQuantity(cartQuantity - (quantity))
       }
       setSelectedItems(updatedItems);
    }
    const onAllSelectionClick = (quantity,price,idArray) => {
        setSelectedItems(idArray);
        setitemPrice(price);
        setcartQuantity(quantity);
    }
    return(
        <div className="mx-20 my-14">
            <div className="flex">
                <div className="w-[75%] mr-10">
                <CartItemsDetail onCheckBoxClick = {onCheckBoxClick} onAllSelectionClick={onAllSelectionClick}/>
                </div>
                <div className="w-[25%]">
                <OrderSummary cartQuantity={cartQuantity} itemPrice={itemPrice}/>
                </div>
            </div>
           <CartDeals />
        </div>
    )
}