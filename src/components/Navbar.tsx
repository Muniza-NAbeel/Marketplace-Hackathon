import { CiSearch } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { GoBellFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import Image from 'next/image';



export default function Navbar () {
  return (
    <nav className="flex justify-between items-center bg-white border-b border-secondary shadow-md max-w-[1440px] h-[124px] px-[60px]">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <h1 className="font-bold text-[#3563E9] tracking-[-3%] leading-[48px] drop-shadow-md text-[32px] ">MORENT</h1>

        <div className="relative flex items-center left-[56px]">
      {/* Search Icon */}
      <CiSearch className="absolute left-4 text-[#C3D4E9] text-2xl " />
      
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search something here"
        className="border-[1px] border-secondary rounded-[70px] w-[492px] h-[44px] px-12 py-2 text-sm focus:outline-none"
      />
        <button className="absolute right-3 text-[#C3D4E9]">
            <CiSliderHorizontal size={28} />
          </button>

    </div>
    </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 pr-20 w-[236px] h-[44px]">
  <div className="relative border-[1px] border-secondary-light rounded-full cursor-pointer p-2">
    <FaHeart className="text-[#C3D4E9]" size={24} />
  </div>
  <div className="relative border-[1px] border-secondary-light rounded-full cursor-pointer p-2">
    <GoBellFill className="text-[#C3D4E9]" size={24} />
    </div>
    <div className="relative border-[1px] border-secondary-light rounded-full cursor-pointer p-2">

    <IoMdSettings className="text-[#C3D4E9]" size={24} />
  </div>
        
        <Image 
        src="/profile.png"
        alt="profile"
        width={44}
        height={44}
        className="rounded-full"
        />
       
      </div>
    </nav>
  );
};

