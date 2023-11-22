import React from 'react';
const linkarray1 = [
  "Samsung M32",
  "Electronic store",
  "T-shirt",
  "levis Pant",
  "Hp PC",
  "Grinder",
  "Casual shoes",
  "Sport shoes",
  "Bathroom Exhaust Fan",
  "iPhone 13",
  "ASUS TUF Gaming",
  "Mobile Nokia",
  "Vivo Y33TOPPO",
  "SpellCommerce Track Orders",
  "SpellCommerce Return Orders",
  "SpellCommerce Axis Bank Credit",
  "Hp PC",
  "Grinder",
  "Sport shopes",
];

const linkarray2 = [
  'Mens Fashion',
  'Electronic Appliances',
  'Kids and Toys',
  'Groceries and Pets',
  'Watches, Bags and Jewellery',
  'Home and Garden',
  'Womens Fashion',
  'Sports and outdoor',
  'Motor, tools and dyes',
   'Tv and home appliances',
   'Health & Lifestyle',
   'Kids'
]

export default function FooterInfo() {
  return (
    <div className="text-primary-blue py-6 px-12">
      <div className='pb-4'>
        <h1 className="text-base font-bold pb-2">
          SpellCommerce : Find everything & anything in one place
        </h1>
        <p className="text-sm">
          E-commerce is revolutionizing the way we all shop in Nepal. Why do you
          want to hop from one store to another in search of the latest phone
          when you can find it on the Internet in a single click? Not only
          mobiles. Flipkart houses everything you can possibly imagine, from
          trending electronics like laptops, tablets, smartphones, and mobile
          accessories to in-vogue fashion staples like shoes, clothing and
          lifestyle accessories; from modern furniture like sofa sets, dining
          tables, and wardrobes to appliances that make your life easy like
          washing machines, TVs, ACs, mixer grinder juicers and other
          time-saving kitchen and small appliances; from home furnishings like
          cushion covers, mattresses and bedsheets to toys and musical
          instruments, we got them all covered. You name it, and you can stay
          assured about finding them all here.
        </p>
      </div>
      <div>
        <h1 className="text-base font-bold pb-2">
          Most searched item in SpellCommerce:
        </h1>
      <div className="flex flex-wrap text-sm pb-4">
      {linkarray1.map((items, index) => (
        <React.Fragment key={index}>
          <a href="#" className='ml-1'>{items}</a>
          {index < linkarray1.length - 1 && <p className='ml-1'>|</p>}
        </React.Fragment>
      ))}
    </div>
    <h1 className="text-base font-bold pb-2">
    What items can you buy from SpellCommerce?
    </h1 >
    <div className="flex flex-wrap text-sm pb-4">
      {linkarray2.map((items, index) => (
        <React.Fragment key={index}>
          <a href="#" className='ml-1'>{items}</a>
          {index < linkarray1.length - 1 && <p className='ml-1'>|</p>}
        </React.Fragment>
      ))}
    </div>
      </div>
    </div>
  );
}
