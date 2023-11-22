import {MdOutlineKeyboardArrowRight, MdArrowBackIosNew} from 'react-icons/md';
import {useState} from 'react';
import secondary from '../../../../tailwind.config';    

const SeconddropdownArray = [
  [
    ['tshirt','pant','joggers','caps'],
    ['louis Vuitton','Steels and Borough','tusting','Mismo'],
    ['Necklace','Bracelets','Rings','Earings'],
    ['Sports Shoes','Football Shoes','heels'],
    ['tshirt','pant','joggers','caps'],
    ['louis Vuitton','Steels and Borough','tusting','Mismo'],
    ['Necklace','Bracelets','Rings','Earings'],
    ['louis Vuitton','Steels and Borough','tusting','Mismo'],
  ],
  [
    ['skirts','pants','joggers','crop top','vintage tee'],
    ['Prada','tory burch','Hermes','Gucci','Saint Laurant'],
    ['Necklace','Bracelets','Rings','Earings'],
    ['Sports Shoes','Football Shoes','heels'],
    ['louis Vuitton','Steels and Borough','tusting','Mismo'],
  ],
  [
    ['Vitamin','Magnesium','Calcium','Aluminium','Bismuth','Germanium'],
    ['Fashwash','Toner','Moisturizer','Sunscreen','Night Cream','Serum'],
    ['Primer','Concealer','Foundation','Blush','Highlighter','Bronzer','Lipgloss'],
    ['Prada','tory burch','Hermes','Gucci','Saint Laurant'],
    ['Necklace','Bracelets','Rings','Earings'],
    ['Sports Shoes','Football Shoes','heels'],
  ],
  [
    ['Omega','Seiko','Cartier','Rolex','Breitling'],
    ['louis Vuitton','Steels and Borough','tusting','Mismo'],
    ['Necklace','Bracelets','Rings','Earings'],
    ['Sports Shoes','Football Shoes','heels'],
    ['tshirt','pant','joggers','caps'],
    ['louis Vuitton','Steels and Borough','tusting','Mismo'],
  ],
  [
    ['Nike','Supreme','Adidas','Elements','Gucci'],
    ['Vitamin','Magnesium','Calcium','Aluminium','Bismuth','Germanium'],
    ['Fashwash','Toner','Moisturizer','Sunscreen','Night Cream','Serum'],
    ['Primer','Concealer','Foundation','Blush','Highlighter','Bronzer','Lipgloss'],
    ['Prada','tory burch','Hermes','Gucci','Saint Laurant'],
    ['Omega','Seiko','Cartier','Rolex','Breitling'],
    ['louis Vuitton','Steels and Borough','tusting','Mismo'],
  ],
  [
    ['Prada','tory burch','Hermes','Gucci','Saint Laurant'],
    ['louis Vuitton','Steels and Borough','tusting','Mismo'],
    ['Necklace','Bracelets','Rings','Earings'],
    ['Prada','tory burch','Hermes','Gucci','Saint Laurant'],
    ['Omega','Seiko','Cartier','Rolex','Breitling'],
  ],
  [
    ['Vitamin','Magnesium','Calcium','Aluminium','Bismuth','Germanium'],
    ['Fashwash','Toner','Moisturizer','Sunscreen','Night Cream','Serum'],
    ['Primer','Concealer','Foundation','Blush','Highlighter','Bronzer','Lipgloss'],
    ['Prada','tory burch','Hermes','Gucci','Saint Laurant'],
    ['Omega','Seiko','Cartier','Rolex','Breitling'],
    ['louis Vuitton','Steels and Borough','tusting','Mismo'],
  ],
  [
    ['Vitamin','Magnesium','Calcium','Aluminium','Bismuth','Germanium'],
    ['Fashwash','Toner','Moisturizer','Sunscreen','Night Cream','Serum'],
    ['Primer','Concealer','Foundation','Blush','Highlighter','Bronzer','Lipgloss'],
    ['Prada','tory burch','Hermes','Gucci','Saint Laurant'],
    ['Omega','Seiko','Cartier','Rolex','Breitling'],
    ['louis Vuitton','Steels and Borough','tusting','Mismo'],
  ],
  [
    ['Nike','Supreme','Adidas','Elements','Gucci'],
    ['Vitamin','Magnesium','Calcium','Aluminium','Bismuth','Germanium'],
    ['Fashwash','Toner','Moisturizer','Sunscreen','Night Cream','Serum'],
    ['Primer','Concealer','Foundation','Blush','Highlighter','Bronzer','Lipgloss'],
    ['Prada','tory burch','Hermes','Gucci','Saint Laurant'],
    ['Dell','Apple','Lenovo','Acer','Hp']
  ],
  [
    ['Vitamin','Magnesium','Calcium','Aluminium','Bismuth','Germanium'],
    ['Fashwash','Toner','Moisturizer','Sunscreen','Night Cream','Serum'],
    ['Primer','Concealer','Foundation','Blush','Highlighter','Bronzer','Lipgloss'],
    ['Prada','tory burch','Hermes','Gucci','Saint Laurant'],
    ['Omega','Seiko','Cartier','Rolex','Breitling'],
    ['louis Vuitton','Steels and Borough','tusting','Mismo'],
  ],
  [
    ['Omega','Seiko','Cartier','Rolex','Breitling'],
    ['louis Vuitton','Steels and Borough','tusting','Mismo'],
    ['Necklace','Bracelets','Rings','Earings'],
    ['Sports Shoes','Football Shoes','heels'],
    ['tshirt','pant','joggers','caps'],
    ['louis Vuitton','Steels and Borough','tusting','Mismo'],
  ],
  [
    ['Vitamin','Magnesium','Calcium','Aluminium','Bismuth','Germanium'],
    ['Fashwash','Toner','Moisturizer','Sunscreen','Night Cream','Serum'],
    ['Primer','Concealer','Foundation','Blush','Highlighter','Bronzer','Lipgloss'],
    ['Prada','tory burch','Hermes','Gucci','Saint Laurant'],
    ['Necklace','Bracelets','Rings','Earings'],
    ['Sports Shoes','Football Shoes','heels'],
  ],
]

export default function SecondSubdropdowns({resetsubdropdown, activeLi, active}){
  const [activeSubLi, setactiveSubLi] = useState(null);
  const displayColor = (index) => setactiveSubLi(index);
  return (
    <ul className="font-poppins absolute top-0 md:left-[100%] text-primary-blue w-[100%] h-[100%] bg-white flex flex-col py-4 px-4 text-sm">
        <div
        className="my-4 cursor-pointer md:hidden font-bold h-6 w-6 border border-primary-blue rounded-full flex items-center justify-center"
        onClick={resetsubdropdown}
      >
        <MdArrowBackIosNew className="text-primary-blue" />
      </div>
      {SeconddropdownArray[activeLi][active].map((item, index) => (
        <li
          key={index}
          className="pb-2 mb-1 pl-2 flex justify-between cursor-pointer"
          onClick={() => displayColor(index)}
          style={{color : activeSubLi === index ? secondary.theme.extend.colors.primary.orange1: secondary.theme.extend.colors.primary.blue}}
        >
          {item}
        </li>
      ))}
    </ul>
  );
      }