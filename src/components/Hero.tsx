import Image from "next/image";
import { GoArrowSwitch } from "react-icons/go";
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div
            className="bg-blue-100 p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/bl.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
             <h2 className="text-white text-2xl mb-4 font-[600] text-[32px] leading-[48px] tracking-[-3%]">
          The Best Platform <br />
          for Car Rental
        </h2>
        <p className="font-[500] text-white text-[16px] leading-[24px] tracking-[-2%]">
          Ease of doing a car rental safely and <br /> reliably, of course at a
          low price.
        </p>

        <Link href={"/payment"}>
        <button className="mt-4 bg-[#3563E9] text-white w-[120px] h-[44px] rounded-[4px] px-[20px] gap-[8px] hover:bg-[#4f85c2] active:bg-[#3563E9] active-scale-95 transition-all">
          Rental Car
        </button>
        </Link>
       
            <Image
              src="/heroone.png"
              alt="Car"
              height={600}
              width={600}
              className="mt-4 w-full max-w-[440px] mx-auto object-cover"
            />
          </div>

          {/* Right Card */}
          <div
            className="bg-blue-200 p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/br.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="font-[600] text-[#FFFFFF] text-[32px] leading-[48px] tracking-[-3%] mb-4">
          Easy way to rent a <br /> car at a low price
        </h2>
        <p className="font-[500] text-[16px] text-[#FFFFFF] leading-[24px] tracking-[-2%]">
          Providing cheap car rental services <br /> and safe and comfortable
          facilities.
        </p>

        <Link href={"/payment"}>
        <button className="mt-4 bg-[#54A6FF] text-white w-[120px] h-[44px] rounded-[4px] px-[20px] gap-[8px] hover:bg-[#528aca] active:bg-[#3563E9] active-scale-95 transition-all">
          Rental Car
        </button>
        </Link>
        
            <Image
              src="/herotwo.png"
              alt="Car"
              height={500}
              width={500}
              className="mt-4 w-full max-w-[340px] mx-auto object-cover"
            />
          </div>
        </div>

         <div className=" flex flex-col md:flex-row items-center justify-between md:gap-32 max-sm:gap-5 mt-[32px] relative ">
                      {/* Pickup Section */}
                      <div className="flex-1 bg-white p-6 rounded-lg shadow-md max-sm:w-[420px] h-[132px] w-[552px]">
                        <div className="flex items-center space-x-2">
                          <div className="flex justify-center items-center px-1 w-4 h-4 bg-blue-400 bg-opacity-30 rounded-[70px] relative">
                            <div className="absolute top-1/2 w-4 h-4 bg-blue rounded-full border-4 border-secondary transform -translate-y-1/2"></div>
                          </div>
                          <span className="text-base font-bold tracking-tight text-[#1A202C]">
                            Pick-Up
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm mt-2 p-1 font-medium">
                              Locations
                            </label>
                            <select className="w-full border rounded-md text-xs pt-1 pb-1 text-[#90A3BF]">
                              <option className="text-xs">Select your city</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm mt-2 p-1 font-medium">
                              Date
                            </label>
                            <select className="w-full border rounded-md text-xs pt-1 pb-1 text-[#90A3BF]">
                              <option className="text-xs">Select your date</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm mt-2 p-1 font-medium">
                              Time
                            </label>
                            <select className="w-full border rounded-md text-xs pt-1 pb-1 text-[#90A3BF]">
                              <option className="text-xs">Select your Time</option>
                            </select>
                          </div>
                        </div>
                      </div>
        
                      {/* Arrow Icon Section */}
                      <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] flex items-center justify-center bg-[#3563E9] w-[60px] h-[60px] rounded-[10px] shadow-xl">
                        <button className="text-white text-2xl rotate-90">
                          <GoArrowSwitch />
                        </button>
                      </div>
        
                      {/* Drop-Off Section */}
                      <div className="flex-1 bg-white p-6 rounded-lg shadow-md max-sm:w-[420px] h-[132px] w-[552px]">
                        <div className="flex items-center space-x-2">
                          <div className="flex justify-center items-center px-1 w-4 h-4 bg-blue-400 bg-opacity-30 rounded-[70px] relative">
                            <div className="absolute top-1/2 w-4 h-4 bg-blue rounded-full border-4 border-secondary transform -translate-y-1/2"></div>
                          </div>
                          <span className="text-base font-bold tracking-tight text-[#1A202C]">
                            Drop-Off
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm mt-2 p-1 font-medium">
                              Locations
                            </label>
                            <select className="w-full border rounded-md text-xs pt-1 pb-1 text-[#90A3BF]">
                              <option className="text-xs">Select your city</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm mt-2 p-1 font-medium">
                              Date
                            </label>
                            <select className="w-full border rounded-md text-xs pt-1 pb-1 text-[#90A3BF]">
                              <option className="text-xs">Select your date</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm mt-2 p-1 font-medium">
                              Time
                            </label>
                            <select className="w-full border rounded-md text-xs pt-1 pb-1 text-[#90A3BF]">
                              <option className="text-xs">Select your time</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
    </div>
  );
}
