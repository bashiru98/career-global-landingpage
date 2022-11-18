import Image from "next/image";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-full fixed h-[5rem] bg-[#0F072C] text-white z-50">
      <div className="relative flex items-center justify-between w-full xl:w-[1150px] mx-auto h-full">
      <Image alt="" src={"	https://surge.global/wp-content/uploads/2022/07/surge-global-logo-in-white.svg"} width={100} height={50} />

    <div className="flex items-center space-x-10">
        <p className="cursor-pointer hover:text-gray-400 duration-700">Product</p>
        <p className="cursor-pointer hover:text-gray-400 duration-700">Growth</p>
        <p className="cursor-pointer hover:text-gray-400 duration-700">Clients</p>
        <div className="flex items-center space-x-2 hover:text-gray-400">   
        <p className="cursor-pointer duration-700">Resources</p>
        <BiChevronDown />
        </div>
        <p className="cursor-pointer hover:text-gray-400 duration-700">Pricing</p>
    </div>

    <button className="h-[3rem] px-7 bg-[#ff3841] font-bold">
        Schedule a call
    </button>
      </div>
    </div>
  );
};

export default Header;
