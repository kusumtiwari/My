import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Signup() {
 const navigate = useNavigate();
 const handleClick = () => navigate('/login')
   const [eyeicon, seteyeicon] = useState(false);

   function changeEyeicon() {
     seteyeicon(!eyeicon);
   }
  return (
    <div className="overflow-hidden font-poppins relative bg-primary-blue flex flex-col justify-center items-center pb-4">
      <img src="login_bg.png" alt="bg-image inset-0" className="absolute" />

      <div className="relative z-10 ">
        <img src="logo.png" alt="Logo" className="my-6 mt-16"/>
      </div>
      <div className="bg-white rounded p-2 md:p-6 w-3/4 md:w-1/2 mx-6 relative z-10 font-poppins">
        <h1 className="font-semibold text-base text-center pb-3 md:pb-8 text-primary-blue">
          Welcome to Nepal's Favourite Marketplace
        </h1>
        <div className="flex justify-center flex-col md:flex-row items-center mb-4">
          <div className="w-[70%] md:w-[45%] md:mr-4">
            <p className="text-sm pb-1">First name*</p>
            <input
              type="name"
              id="firstname"
              placeholder="First name"
              className="border border-secondary-border w-full py-2 required rounded px-2 text-primary-blue focus:outline-primary-blue text-sm"
            />
          </div>
          <div className="w-[70%] md:w-[45%] md:ml-4 relative mt-3 md:mt-0">
            <p className="text-sm pb-1 text-primary-blue">last name*</p>
            <input
              type="name"
              id="lastname"
              placeholder="last name"
              className="border border-secondary-border w-full py-2 px-2 required rounded focus:outline-primary-blue text-sm"
            />
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row items-center mb-4">
          <div className="w-[70%] md:w-[45%] md:mr-4">
            <p className="text-sm pb-1">Email*</p>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="border border-secondary-border w-full py-2 required rounded px-2 text-primary-blue focus:outline-primary-blue text-sm"
            />
          </div>
          <div className="w-[70%] md:w-[45%] md:ml-4 relative mt-3 md:mt-0">
            <p className="text-sm pb-1 text-primary-blue">Mobile Number*</p>
            <input
              type="number"
              id="number"
              placeholder="Enter mobile number"
              className="border border-secondary-border w-full py-2 focus:outline-primary-blue px-2 required rounded text-sm"
            />
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row items-center mb-4">
          <div className="w-[70%] md:w-[45%] md:mr-4 relative">
            <p className="text-sm pb-1">Password*</p>
            <input
              type={eyeicon ? 'text' : 'password'}
              id="password"
              className="border border-secondary-border w-full py-2 focus:outline-primary-blue required rounded px-2 text-primary-blue text-sm"
            />
            <span className="absolute right-3 bottom-3 cursor-pointer" onClick={changeEyeicon}>
             {eyeicon ? < FaEye /> : < FaEyeSlash />}
            </span>
          </div>
          <div className="w-[70%] md:w-[45%] md:ml-4 relative mt-3 md:mt-0 ">
            <p className="text-sm pb-1 text-primary-blue">Re-password*</p>
            <input
              type={eyeicon ? 'text' : 'password'}
              id="re-password"
              className="border border-secondary-border w-full py-2 px-2 required rounded focus:outline-primary-blue text-sm"
            />
            <span className="absolute right-3 bottom-3 cursor-pointer" onClick={changeEyeicon}>
             {eyeicon ? < FaEye /> : < FaEyeSlash />}
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <button className="bg-primary-orange1 rounded w-[70%] md:w-[95%] text-white text-sm py-3 my:1 md:my-4 hover:bg-yellow-400">
            Confirm
          </button>
          <p className="text-sm text-primary-blue my-1 md:my-2">-Or-</p>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row my-6">
          <button className="flex items-center mr-2 border border-primary-blue w-[65%] md:w-[40%] pl-10 py-1 md:py-2 rounded-2xl md:pl-2 mb-6 md:mb-0">
            <img src="googleLogo.png" alt="google logo" />
            <p className="text-sm text-primary-blue pl-1 ">
              Sign up with Google
            </p>
          </button>
          <button className="flex items-center ml-0 md:ml-2 border border-primary-blue w-[65%] md:w-[40%] pl-10 py-1 md:py-2 rounded-2xl md:pl-2">
            <FaFacebook className="text-blue-600" />
            <p className="text-sm text-primary-blue pl-1">
              Log in with facebook
            </p>
          </button>
        </div>
        <div onClick={handleClick}>
        <h1 className="text-center py-4 text-sm text-primary-blue underline cursor-pointer">
          Already have an account? Log in now
        </h1>
        </div>
      </div>
      <h1 className="text-center py-2 text-white flex text-sm mt-4">
        Can we help?
        <IoCall className="mt-0.5 ml-2" />
        <p className="underline">+977-9814017327</p>
      </h1>
    </div>
  );
}
