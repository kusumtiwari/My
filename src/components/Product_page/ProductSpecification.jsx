import { useState } from 'react';

export default function ProductSpecification() {
  const [showmore, setshowmore] = useState(true);

  const displayshowless = () => {
    setshowmore(!showmore);
    console.log("hello");
  };

  return (
    <div className="md:ml-auto  md:w-[60vw] text-primary-blue mt-6 border border-gray-300">
      <div className="flex justify-between items-center bg-secondary-productdetailsbg">
        <h1 className="text-lg font-semibold py-4 px-4">Product Specification</h1>
        <h1 className="text-2xl w-6 h-6 font-bold cursor-pointer" onClick={displayshowless}>
          {showmore ? (
            <span>+</span>
          ) : (
            <span>-</span>
          )}
        </h1>
      </div>
      <div className="flex justify-between">
        {showmore ? null : (
          <>
            <ul className="list-inside list-disc py-4 px-4 text-sm w-1/2">
              <li className="mb-2 flex flex-row list-inside list-disc">
                <p className="w-1/2">Product Name:</p>
                <p className="w-[100%]">KILOMETER Casual Green Multi Pockets Cotton Cargo Pant For Men-KMSAP905</p>
              </li>
              <li className="flex flex-row mb-2">
                <p className="w-1/2">Material: </p>
                <p className="w-[100%]"> Mixed cotton </p>
              </li>
              <li className="flex flex-row mb-2">
                <p className="w-1/2">Size: </p>
                <p className="w-[100%]">225 cm * 235 Cm</p>
              </li>
            </ul>
            <ul className="list-inside list-disc py-4 px-4 text-sm w-[40%]">
              <li>No lint</li>
              <li>No color fade</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
