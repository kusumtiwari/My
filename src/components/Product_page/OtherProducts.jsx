import ProductCarousel from "../common/fields/ProductCarousel";
const dealsArray = [
  {
    image: "/deals-images/deals1.png",
    description: "Factory Sell Compatible Imaje",
    discountedAmount: "Rs.300",
    originalAmount: "Rs.350",
    ratingStar: "4",
    ratedNumber: "(2)",
    discount: "10% OFF",
    id: 1,
  },
  {
    image: "/deals-images/deals2.png",
    description: "Rechargeable Electic Mosquito Killer",
    discountedAmount: "Rs.300",
    originalAmount: "Rs.350",
    ratingStar: "3",
    ratedNumber: "(10)",
    discount: "20% OFF",
    id: 2,
  },
  {
    image: "/deals-images/deals3.png",
    description: "Men Leather Suit",
    discountedAmount: "Rs.399",
    originalAmount: "Rs.350",
    ratingStar: "4",
    ratedNumber: "(2)",
    discount: "10% OFF",
    id: 3,
  },
  {
    image: "/deals-images/deals4.png",
    description: "Motor Bikes Helmet",
    discountedAmount: "Rs.399",
    originalAmount: "Rs.399",
    ratingStar: "3",
    ratedNumber: "(20)",
    discount: "20% OFF",
    id: 4,
  },
  {
    image: "/deals-images/deals1.png",
    description: "Chin mount with mobile holder mount",
    discountedAmount: "Rs.399",
    originalAmount: "Rs.450",
    ratingStar: "5",
    ratedNumber: "(3)",
    discount: "20% OFF",
    id: 5,
  },
  {
    image: "/deals-images/deals2.png",
    description: "Factory Sell Compatible \nOEM Imaje",
    discountedAmount: "Rs.300",
    originalAmount: "Rs.350",
    ratingStar: "2",
    ratedNumber: "(2)",
    discount: "20% OFF",
    id: 6,
  },
  {
    image: "/deals-images/deals3.png",
    description: "Rechargeable Electic \nMosquito Killer",
    discountedAmount: "Rs.399",
    originalAmount: "Rs.350",
    ratingStar: "4",
    ratedNumber: "(2)",
    discount: "20% OFF",
    id: 7,
  },
];

export default function OtherProducts() {
  const headingText = "Products From Same Store";
  const buttonText = "Visit Store";
  return (
    <div>
      <ProductCarousel
        dealsArray={dealsArray}
        headingText={headingText}
        buttonText={buttonText}
      />
    </div>
  );
}
