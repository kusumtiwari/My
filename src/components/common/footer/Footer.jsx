import React from 'react';
import { IoIosCall } from 'react-icons/io';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

export default function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-primary-blue text-white py-14 px-12">
        <div className="flex flex-col mr-40 ">
          <img src="/logo.png" alt="logo"/>
          <div className="pt-4">
            <h1 className='text-sm my-2'>Payment Partners:</h1>
            <div className="grid grid-cols-3 gap-1">
              <img src="/footer-images/footerimg1.png" alt="company's logo" className='bg-white rounded'/>
              <img src="/footer-images/footerimg2.png" alt="company's logo" className='bg-white rounded'/>
              <img src="/footer-images/footerimg3.png" alt="company's logo" className='bg-white rounded'/>
              <img src="/footer-images/footerimg4.png" alt="company's logo" className='bg-white rounded'/>
              <img src="/footer-images/footerimg5.png" alt="company's logo" className='bg-white rounded'/>
              <img src="/footer-images/footerimg6.png" alt="company's logo" className='bg-white rounded'/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-1 gap-20 lg:gap-0 mt-10 md:mt-0">
          <div className="flex flex-col justify-around">
            <h1 className="text-base font-semibold pb-2">Social Links</h1>
            <h1 className="text-sm">Facebook</h1>
            <h1 className="text-sm">Instagram</h1>
            <h1 className="text-sm">Tiktok</h1>
            <h1 className="text-sm">Youtube</h1>
          </div>
          <div className="flex flex-col justify-around">
            <h1 className="text-base font-semibold pb-2">Explore</h1>
            <h1 className="text-sm">About us</h1>
            <h1 className="text-sm">Career</h1>
            <h1 className="text-sm">Privacy Policy</h1>
            <h1 className="text-sm">Sitemap</h1>
            <h1 className="text-sm">Terms and conditions</h1>
          </div>
          <div className="flex flex-col justify-around">
            <h1 className="text-base font-semibold pb-2">Customer Service</h1>
            <h1 className="text-sm">Sign Up</h1>
            <h1 className="text-sm">Return and Refund</h1>
            <h1 className="text-sm">Become a Seller</h1>
            <h1 className="text-sm">Shipping methods</h1>
            <h1 className="text-sm">Locations we ship to</h1>
          </div>
          <div className="flex flex-col justify-around">
            <h1 className="text-base font-semibold">Call us</h1>
            <div className="flex items-center mb-3">
              <IoIosCall className='text-sm'/>
              <p className="ml-2 text-sm">+977-9814017327</p>
            </div>
            <h1 className="text-base font-semibold">Email</h1>
            <div className="flex items-center mb-3">
              <FiMail className='text-sm'/>
              <p className="ml-2 text-sm">hello199@gmail.com</p>
            </div>
            <h1 className="text-base font-semibold">Location</h1>
            <div className="flex items-center">
              <GoLocation className='text-sm'/>
              <p className="ml-2 text-sm">Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary-copyrightbg w-full h-[7vh]">
        <h1 className="text-sm text-secondary-grey text-center py-3">
          © 2019 Ecommerce. All Rights Reserved.
        </h1>
      </div>
    </>
  );
}
