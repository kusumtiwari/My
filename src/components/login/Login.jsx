import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [eyeicon, seteyeicon] = useState(false);

  function changeEyeicon() {
    seteyeicon(!eyeicon);
  }

  const handleCLick = () => {
    navigate("/signup"); //parameter error
  };

  return (
    <div className="h-screen relative overflow-hidden font-poppins bg-primary-blue flex flex-col justify-center items-center">
      <img src="login_bg.png" className="absolute inset-0" alt="Background" />
      <div className="relative z-10 mb-4">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="bg-white rounded h-[590px] md:h-[458px] pt-4 p-2 md:p-6 w-3/4 md:w-1/2 mx-6 relative z-10 font-poppins">
        <h1 className="font-semibold text-base text-center pb-3 md:pb-8 text-primary-blue">
          Log in into your account
        </h1>
        <div className="flex justify-center flex-col md:flex-row items-center">
          <div className="w-[70%] md:w-[45%] md:mr-4">
            <p className="text-sm pb-2">Email*</p>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="text-sm border border-secondary-border w-full py-2 required rounded px-2 text-primary-blue focus:border-red-500 focus:outline-primary-blue"
            />
          </div>
          <div className="w-[70%] md:w-[45%] md:ml-4 relative mt-3 md:mt-0">
            <p className="text-sm pb-2 text-primary-blue">Password*</p>
            <input
              type={eyeicon ? "password" : "text"}
              id="password"
              className="border border-secondary-border w-full py-2 px-2 required rounded focus:outline-primary-blue text-sm"
            />
            <span
              className="absolute right-3 bottom-3 cursor-pointer"
              onClick={changeEyeicon}
            >
              {eyeicon ? (
                <FaEyeSlash className="text-base color-primary-blue" />
              ) : (
                <FaEye className="text-base color-primary-blue" />
              )}
            </span>
          </div>
        </div>
        <div className="flex justify-center my-3 md:my-4 flex-col md:flex-row items-center">
          <div className="w-[70%] md:w-[45%] mr-0 md:mr-4 flex">
            <input type="radio" />
            <p className="text-sm pl-1 text-primary-blue">Remember me</p>
          </div>
          <div className="w-[70%] md:w-[45%] mr-0 md:mr-4 flex md:justify-end">
            <p className="text-primary-orange1 text-sm">Forgot password?</p>
          </div>
        </div>
        <div className=" flex justify-center items-center flex-col">
          <button className="bg-primary-orange1 w-[70%] md:w-[95%] text-white text-sm py-3 my:1 md:my-2 rounded hover:bg-yellow-500">
            Confirm
          </button>
          <p className="text-sm text-primary-blue my-1 md:my-4 mt-4">-Or-</p>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row w-[100%]">
          <button className="flex items-center mr-2 border border-primary-blue rounded-2xl mb-6 md:mb-0 px-6 py-2">
            <img src="googleLogo.png" alt="google logo" />
            <p className="text-sm text-primary-blue md:pl-1">
              Sign up with Google
            </p>
          </button>
          <button className="flex items-center ml-0 md:ml-2 border border-primary-blue rounded-2xl px-6 py-2">
            <FaFacebook className="text-blue-600 w-5 h-5" />
            <p className="text-sm text-primary-blue md:pl-1">
              Log in with facebook
            </p>
          </button>
        </div>
        <div onClick={handleCLick}>
          <h1 className="text-center py-4 md:py-8 text-sm text-primary-blue underline cursor-pointer">
            Dont have an account? Sign up now
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
