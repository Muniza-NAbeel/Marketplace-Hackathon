'use client';
import { CiSearch } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { GoBellFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import Link from "next/link";


export default function Navbar() {

  const cartItems = useSelector((state: RootState) => state.cart);
  const cartCount = cartItems.length;

  return (
    <nav className="flex flex-wrap justify-between items-center bg-white border-b border-secondary shadow-md max-w-[1440px] h-auto md:h-[124px] px-[32px] py-[32px] md:px-[60px] md:py-0">
      {/* Left Section */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center w-full md:w-auto">
        {/* Logo */}
        <h1 className="font-bold text-[#3563E9] tracking-[-3%] leading-[48px] drop-shadow-md text-[24px] md:text-[32px]">
          MORENT
        </h1>
        <Image
          src="/profile.png"
          alt="profile"
          width={36}
          height={36}
          className="rounded-full md:w-[44px] md:h-[44px] flex md:hidden "
        />

        {/* Search Bar */}
        <div className="relative md:ml-[202px] flex items-center mt-4 md:mt-0 w-full md:w-auto">
          <CiSearch className="absolute left-4 text-[#C3D4E9] text-xl md:text-3xl" />
          <input
            type="text"
            placeholder="Search something here"
            className="border-[1px] border-secondary rounded-[70px] w-full md:w-[492px] h-[40px] md:h-[44px] px-12 py-2 text-sm focus:outline-none"
          />
          <button className="absolute right-3 text-[#C3D4E9]">
            <CiSliderHorizontal className="text-xl md:text-3xl" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex justify-center md:justify-end items-center gap-4 mt-4 md:mt-0 w-full md:w-auto ">
        <div className="relative border-[1px] border-secondary-light rounded-full cursor-pointer p-2 hover:bg-[#54A6FF] shadow-md active:bg-slate-400 active:scale-95 transition-all">
          <FaHeart className="text-xl md:text-2xl text-secondary hover:text-white" />
        </div>

        {/* Link With Notification Route */}
        <Link href="/notification">

        <div className="relative border-[1px] border-secondary-light rounded-full cursor-pointer p-2 hover:bg-[#54A6FF] shadow-md active:bg-slate-400 active:scale-95 transition-all">
          <GoBellFill className="text-xl md:text-2xl text-secondary hover:text-white" />
          {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
        </div>
        </Link>
        <div className="relative border-[1px] border-secondary-light rounded-full cursor-pointer p-2 hover:bg-[#54A6FF] shadow-md active:bg-slate-400 active:scale-95 transition-all">
          <IoMdSettings className="text-xl md:text-2xl text-secondary hover:text-white" />
        </div>
        <Link href="/dashboard">
        <Image
          src="/profile.png"
          alt="profile"
          width={36}
          height={36}
          className="rounded-full md:w-[44px] md:h-[44px] "
        />
        </Link>
      </div>
    </nav>
  );
}
