"use client";

import { FaHeart } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Navbar() {


  return (
    <nav className="flex flex-wrap justify-between items-center bg-white border-b border-secondary shadow-md max-w-[1440px] h-auto md:h-[124px] px-[32px] py-[32px] md:px-[60px] md:py-0">
      {/* Left Section */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center w-full md:w-auto">
        {/* Logo */}
        <Link href="/">
        <h1 className="font-bold text-[#3563E9] tracking-[-3%] leading-[48px] drop-shadow-md text-[24px] md:text-[32px]">
          MORENT
        </h1>
        </Link>
        
        <div className="md:hidden">
          <SignedOut>
            {/* Replace SignInButton with Link */}
            <Link href="/signin">
              <div className="relative border-[1px] border-secondary-light rounded-full cursor-pointer p-2 hover:bg-[#54A6FF] text-white shadow-md hover:shadow-lg active:bg-slate-400 active:scale-95 transition-all">
                <IoMdSettings className="text-xl md:text-lg text-secondary hover:text-white" />
              </div>
            </Link>
          </SignedOut>

          <SignedIn>
            {/* Show User Button when signed in */}
            <Link href="/dashboard">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatar: "rounded-full w-[100px] h-[100px]",
                  },
                }}
              />
            </Link>
          </SignedIn>
        </div>

        {/* Search Bar */}
        <SearchBar />
      </div>

      {/* Right Section */}
      <div className="hidden md:flex justify-center md:justify-end items-center gap-4 mt-4 md:mt-0 md:w-auto ">
        <Link href="/wishlist">
        <div className="relative border-[1px] border-secondary-light rounded-full cursor-pointer p-2 hover:bg-[#54A6FF] text-white hover:shadow-lg shadow-md active:bg-slate-400 active:scale-95 transition-all">
          <FaHeart className="text-xl md:text-lg text-secondary hover:text-white" />
          </div>
        </Link>
      

        {/* Clerk Authentication: Show Link to /signin instead of SignInButton */}
        <SignedOut>
          <Link href="/signin">
            <div className="relative border-[1px] border-secondary-light rounded-full cursor-pointer p-2 hover:bg-[#54A6FF] text-white shadow-md hover:shadow-lg active:bg-slate-400 active:scale-95 transition-all">
              <IoMdSettings className="text-xl md:text-lg text-secondary hover:text-white" />
            </div>
          </Link>
        </SignedOut>

        <SignedIn>
          {/* Show User Button when signed in */}
          <Link href="/dashboard">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatar: "rounded-full w-[100px] h-[100px] shadow-xl",
                },
              }}
            />
          </Link>
        </SignedIn>
      </div>
    </nav>
  );
}
