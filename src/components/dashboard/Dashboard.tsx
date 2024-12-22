import * as React from "react";
import { TransactionItem } from "./components/TransactionItem";
import { CarStats } from "./components/CarStats";
import Image from "next/image";
import { RiHome5Fill } from "react-icons/ri";
import { IoCarSportOutline } from "react-icons/io5";
import { BiBarChartAlt } from "react-icons/bi";
import { LuMessageSquareMore } from "react-icons/lu";
import { BiCalendar } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import Link from "next/link";

const transactions = [
  {
    image: "/NissanGT-R.png",
    title: "Nissan GT - R",
    type: "Sport Car",
    date: "20 July",
    amount: "$80.00",
  },
  {
    image: "/koenigsegg.png",
    title: "Koegnigsegg",
    type: "Sport Car",
    date: "19 July",
    amount: "$99.00",
  },
  {
    image: "/Rolls-Royce.png",
    title: "Rolls - Royce",
    type: "Sport Car",
    date: "18 July",
    amount: "$96.00",
  },
  {
    image: "/r2.png",
    title: "CR - V",
    type: "SUV",
    date: "17 July",
    amount: "$80.00",
  },
];

const carStats = [
  { color: "bg-[#0D3559]", type: "Sport Car", count: "17,439" },
  { color: "bg-[#175D9C]", type: "SUV", count: "9,478" },
  { color: "bg-[#2185DE]", type: "Coupe", count: "18,197" },
  { color: "bg-[#63A9E8]", type: "Hatchback", count: "12,510" },
  { color: "bg-[#A6CEF2]", type: "MPV", count: "14,406" },
];

export default function DashboardPage() {
  return (
    <div className="overflow-hidden md:pr-8 bg-neutral-100 max-md:pr-5">
      <div className="flex gap-5 max-sm:gap-1 max-md:flex-col">
        {/* Left Sidebar */}

        <div className="hidden md:flex flex-col w-[21%] h-[830px] max-md:ml-0 max-md:w-full">
          <div className="overflow-hidden flex-col px-[32px] h-[900px] pt-[36px] pb-10 gap-[32px] mx-auto w-full text-justify bg-white border-r border-solid border-r-gray-100 ">
            {/* Main Menu */}
            <div>
              <h2 className="text-[#90A3BF] text-[16px] mt-2 leading-[24px] tracking-[-0.02em] font-medium text-justify w-[286px] h-[28px] uppercase mb-4">
                M A I N M E N U
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center mt-4 text-white bg-blue rounded-lg py-2 px-3"
                  >
                    <RiHome5Fill className="w-5 h-5 mr-3" />
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[#90A3BF] hover:bg-blue hover:text-white rounded-lg py-2 px-3"
                  >
                    <IoCarSportOutline className="w-6 h-6 mr-3" />
                    Car Rent
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[#90A3BF] hover:bg-blue hover:text-white rounded-lg py-2 px-3"
                  >
                    <BiBarChartAlt className="w-6 h-6 mr-3" />
                    Insight
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[#90A3BF] hover:bg-blue hover:text-white rounded-lg py-2 px-3"
                  >
                    <Image
                      src="/empty.png"
                      alt="Reimburse Icon"
                      width={100}
                      height={100}
                      className="w-6 h-6 mr-3 hover:text-blue"
                    />
                    Reimburse
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center text-[#90A3BF] hover:bg-blue hover:text-white rounded-lg py-2 px-3"
                  >
                    <LuMessageSquareMore className="w-6 h-6 mr-3" />
                    Inbox
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[#90A3BF] hover:bg-blue hover:text-white rounded-lg py-2 px-3"
                  >
                    <BiCalendar className="w-6 h-6 mr-3" />
                    Calendar
                  </a>
                </li>
              </ul>
            </div>

            {/* Preferences */}
            <div>
              <h2 className="text-[#90A3BF] text-[16px] mt-4 mb-6 leading-[24px] tracking-[-0.02em] font-medium text-justify w-[286px] h-[28px] uppercase">
                Preferences
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[#90A3BF] hover:bg-blue hover:text-white rounded-lg py-2 px-3"
                  >
                    <Image
                      src="/setting.png"
                      alt="setting Icon"
                      width={100}
                      height={100}
                      className="w-6 h-6 mr-3 hover:text-white"
                    />
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[#90A3BF] hover:bg-blue hover:text-white rounded-lg py-2 px-3"
                  >
                    <Image
                      src="/info-circle.png"
                      alt="cirle icon"
                      width={100}
                      height={100}
                      className="w-6 h-6 mr-3 hover:text-white"
                    />
                    Help & Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between text-[#90A3BF] hover:bg-blue hover:text-white rounded-lg py-2 px-2"
                  >
                    <Image
                      src="/briefcase.png"
                      alt="Reimburse Icon"
                      width={100}
                      height={100}
                      className="w-6 h-6 hover:text-white"
                    />
                    <div className="flex items-center ">Dark Mode</div>

                    <Image
                      src="/light.png"
                      alt="light mode"
                      width={100}
                      height={100}
                      className="w-6 h-6 hover:text-blue ml-4"
                    />
                    <Image
                      src="/dark.png"
                      alt="dark mode"
                      width={100}
                      height={100}
                      className="w-8 h-8 hover:text-blue "
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Log Out */}
            <div>
              <a
                href="#"
                className="flex items-center mt-[120px] text-[#90A3BF] hover:text-red rounded-lg py-2 px-3"
              >
                <TbLogout2 className="w-6 h-6 mr-3 " />
                Log Out
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col ml-5 md:mt-8 w-[534px] max-md:ml-0 max-w-[534px] max-md:w-full max-sm:px-4">
          <div className="flex flex-col self-stretch bg-white rounded-xl p-5 max-md:mt-6 max-md:py-5 max-md:px-3 max-sm:px-5">
            {/* Title */}
            <div className="self-start font-bold text-[20px] leading-[30px] tracking-[-0.03em] w-[192px] h-[24px]">
              Details Rental
            </div>

            {/* Image */}
            <Image
              loading="lazy"
              src="/Maps.png"
              alt="Rental car details"
              height={1000}
              width={1000}
              className="object-contain mt-4 h-[150%] rounded-xl aspect-[1.79] w-[150%]"
            />

            {/* Car Details */}
            <div className="flex flex-row items-center gap-4 mb-4 mt-4 md:mt-6 md:mb-6">
              <Image src="/Look.png" alt="Car" width={132} height={70} />
              <div className="text-center sm:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <h3 className="font-bold text-lg lg:text-2xl mb-1 sm:mb-0">
                    Nissan GT - R
                  </h3>
                  <p className="text-gray-500 text-sm lg:text-md lg:ml-10 lg:mt-0 mt-1">
                    #9761
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
                  <p className="text-gray-500 text-sm sm:text-left lg:text-md">
                    Sport Car
                  </p>
                </div>
              </div>
            </div>

            {/* Pick-up Details */}
            <div className="flex gap-2 items-center self-start mt-4">
              <div className="flex justify-center items-center self-stretch px-1 my-auto w-4 h-4 bg-blue-600 bg-opacity-30 rounded-[70px]">
                <div className="flex justify-center items-center px-1 w-4 h-4 bg-blue-400 bg-opacity-30 rounded-[70px] relative">
                  <div className="absolute top-1/2 w-4 h-4 bg-blue rounded-full border-4 border-secondary transform -translate-y-1/2"></div>
                </div>
              </div>
              <div className="self-stretch my-auto  text-base font-semibold tracking-tight text-gray-900 w-[68px]">
                Pick - Up
              </div>
            </div>
            {/* Inputs Section */}
            <div className="max-w-[486px] gap-4 mt-6 flex flex-col sm:flex-row ">
              {/* Locations */}
              <div className="w-full sm:w-auto">
                <label className="text-sm mt-2 p-1 font-medium">
                  Locations
                </label>
                <select className="w-full border rounded-md text-xs pt-1 pb-1 text-[#90A3BF]">
                  <option className="text-xs">Select your city</option>
                </select>
              </div>

              {/* Date */}
              <div className="w-full sm:w-auto">
                <label className="text-sm mt-2 p-1 font-medium">Date</label>
                <select className="w-full border rounded-md text-xs pt-1 pb-1 text-[#90A3BF]">
                  <option className="text-xs">Select your date</option>
                </select>
              </div>

              {/* Time */}
              <div className="w-full sm:w-auto">
                <label className="text-sm mt-2 p-1 font-medium">Time</label>
                <select className="w-full border rounded-md text-xs pt-1 pb-1 text-[#90A3BF]">
                  <option className="text-xs">Select your time</option>
                </select>
              </div>
            </div>

            {/* Drop-off Details */}
            <div className="flex gap-2 items-center self-start mt-6 mb-2">
              {/* Blue Dot Section */}
              <div className="flex justify-center items-center self-stretch px-1 my-auto w-4 h-4 bg-blue-400 bg-opacity-30 rounded-[70px]">
                <div className="flex justify-center items-center px-1 w-4 h-4 bg-blue-400 bg-opacity-30 rounded-[70px] relative">
                  <div className="absolute top-1/2 w-4 h-4 bg-blue rounded-full border-4 border-secondary transform -translate-y-1/2"></div>
                </div>
              </div>
              <div className="self-stretch my-auto w-20 text-base font-semibold tracking-tight text-gray-900">
                Drop - Off
              </div>
            </div>

            {/* Inputs Section */}
            <div className="max-w-[486px] gap-4 mt-4 flex flex-col sm:flex-row ">
              {/* Locations */}
              <div className="w-full sm:w-auto">
                <label className="text-sm mt-2 p-1 font-medium ">
                  Locations
                </label>
                <select className="w-full border rounded-md text-xs pt-1 pb-1 text-[#90A3BF]">
                  <option className="text-xs">Select your city</option>
                </select>
              </div>

              {/* Date */}
              <div className="w-full sm:w-auto">
                <label className="text-sm mt-2 p-1 font-medium">Date</label>
                <select className="w-full border rounded-md text-xs pt-1 pb-1 text-[#90A3BF]">
                  <option className="text-xs">Select your date</option>
                </select>
              </div>

              {/* Time */}
              <div className="w-full sm:w-auto">
                <label className="text-sm mt-2 p-1 font-medium">Time</label>
                <select className="w-full border rounded-md text-xs pt-1 pb-1 text-[#90A3BF]">
                  <option className="text-xs">Select your time</option>
                </select>
              </div>
            </div>

            {/* Separator */}
            <div className="mt-8 border-t border-[#C3D4E9]"></div>

            {/* Total Rental Price */}
            <div className="mt-8 flex justify-between items-center">
              <div className="text-lg font-bold text-[#1A202C]">
                Total Rental Price
              </div>
              <div className="text-xl font-bold text-[#1A202C]">$80.00</div>
            </div>
            <div className="mt-1 text-sm text-[#90A3BF] mb-6">
              Overall price includes rental discount
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col ml-2 max-md:w-full max-md:mt-10 ">
          <div className="flex flex-col md:mt-8 max-w-[524px] self-stretch max-md:max-w-full max-sm:px-3">
            <div className="flex overflow-hidden flex-col p-6 w-full bg-white rounded-xl max-md:px-5 max-sm:px-4 max-md:max-w-full ">
              {/* Header */}
              <div className="flex justify-between items-start text-xl font-bold tracking-tight text-gray-900 max-md:max-w-full">
                <div className="text-[#1A202C] text-[20px] leading-[30px] tracking-[-0.03em] font-[700]">
                  Top 5 Car Rental
                </div>
                <Image
                  loading="lazy"
                  src="/more.png"
                  alt=""
                  height={24}
                  width={24}
                  className="object-contain shrink-0 w-6 aspect-square"
                />
              </div>

              {/* Small Screen Specific Changes */}
              <div className="max-md:mt-10 max-sm:mt-2 max-md:max-w-full">
                <div className="flex md:gap-10 mt-8 max-sm:flex-col max-sm:mt-2 max-sm:gap-0">
                  {/* Chart Section */}
                  <div className="flex justify-center items-center relative w-[210px] h-[210px] mx-auto max-sm:mt-6 max-sm:px-5 max-md:py-20 text-center rounded-md aspect-square max-md:px-5 max-md:mt-6">
                    <Image
                      loading="lazy"
                      src="/Chart.png"
                      alt="Car rental statistics"
                      height={327}
                      width={327}
                      className="object-cover absolute inset-0"
                    />
                    <div className="flex relative flex-col items-center w-full text-center">
                      <div className="text-2xl font-bold tracking-tighter text-[#1A202C]">
                        72,030
                      </div>
                      <div className="mt-1 text-sm font-medium tracking-tight text-[#90A3BF]">
                        Rental Car
                      </div>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="flex flex-col w-full text-sm font-semibold tracking-tight max-sm:mt-8 max-sm:px-2">
                    {carStats.map((stat, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between ${
                          index > 0 ? "mt-6" : ""
                        }`}
                      >
                        <CarStats {...stat} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex overflow-hidden flex-col justify-center p-6 mt-8 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
              <div className="flex md:gap-52 items-start max-md:max-w-full ">
                <div className="md:text-[20px] w-full max-sm:w-full text-md leading-[30px] font-[700] tracking-[-0.03em] text-[#1A202C]">
                  Recent Transaction
                </div>

                <Link href={"/categories"}>
                  <button className="flex-col w-[68px] text-[12px] leading-[24px] font-[500] text-right text-[#3563E9] hover:underline underline-offset-1 hover:text-[#3895ff] active:text-secondary active:scale-95 transition-all hover:cursor-pointer">
                    View All
                  </button>
                </Link>
              </div>
              <div className="flex flex-col mt-8 gap-2 w-full max-md:max-w-full">
                {transactions.map((transaction, index) => (
                  <TransactionItem key={index} {...transaction} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
