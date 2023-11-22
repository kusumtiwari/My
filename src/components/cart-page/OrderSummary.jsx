import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function OrderSummary({cartQuantity, itemPrice}){
    return(
        <div className="text-primary-blue h-45vh">
        <div className="shadow-lg px-4 py-4">
            <h1 className="text-lg font-semibold ">Order Summary</h1>
            <hr className="border border-gray-300 mt-4 w-full" />
            <div className="flex justify-between py-4 text-sm">
                <p className="text-sm">{`Subtotal (${cartQuantity} items)`}</p>
                <p className="font-semibold">{`Rs. ${itemPrice}`}</p>
            </div>
            <form className="text-sm w-full">
            <input type="text" placeholder="Coupon code here" className="border-2 border-gray-300 rounded px-4 py-2 mr-5"/>
            <button type="submit" className="bg-secondary-cartBtnBg text-white rounded px-3 py-2">Apply</button>
            </form>
            <hr className="border border-gray-300 mt-4 w-full" />
            <div className="flex justify-between text-sm py-4">
                <p >Total cost</p>
                <p className="font-semibold">{`Rs. ${itemPrice}`}</p>
            </div>
            <button className="bg-primary-orange1 text-white rounded w-full px-3 py-3 my-2 text-sm">Proceed to check out</button>
            <button className="border border-primary-orange1 text-sm bg-white w-full py-3 my-2 rounded flex justify-center">
                <HiOutlineArrowNarrowLeft className="h-5 w-4 mr-1 font-semibold"/>
                <p className="font-semibold">Continue Shopping</p>
            </button>
        </div>
        <p className="w-full text-sm mt-4 px-4 py-5 bg-gray-100">*Note: <span className="font-semibold">Shipment charge , Tax & Vat are calculated during checkout process.</span></p>
        </div>
    )
}