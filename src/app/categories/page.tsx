import { CapacityFilter } from "@/components/Cardetail/CapacityFilter";
import { CarTypeFilter } from "@/components/Cardetail/CarTypeFilter";
import {
  CarTypeOption,
  CapacityOption,
} from "@/components/Cardetail/types";
import RecommendationCars from "@/components/RecommendationCars";
import Link from "next/link";
import { GoArrowSwitch } from "react-icons/go";

const carTypeOptions: CarTypeOption[] = [
  { icon: "/tick.png", label: "Sport", count: 10, isSelected: true },
  { icon: "/tick.png", label: "SUV", count: 12 },
  { icon: "/rectangle.png", label: "MPV", count: 16 },
  { icon: "/rectangle.png", label: "Sedan", count: 20 },
  { icon: "/rectangle.png", label: "Coupe", count: 14 },
  { icon: "/rectangle.png", label: "Hatchback", count: 14 },
];

const capacityOptions: CapacityOption[] = [
  { icon: "/tick.png", label: "2 Person", count: 10 },
  { icon: "/rectangle.png", label: "4 Person", count: 14, isSelected: true },
  { icon: "/rectangle.png", label: "6 Person", count: 12 },
  { icon: "/tick.png", label: "8 or More", count: 16 },
];


export default function Categories() {
  return (
    <>
      <section className="overflow-hidden pr-8 bg-neutral-100 max-md:pr-5">
        <div className="grid grid-cols-4 gap-5 max-md:flex max-md:flex-col h">
          {/*==========>>>>>>>> Sidebar <<<<<<<<<<====== */}

          <div className="col-span-1 ">
            <div className="hidden md:flex flex-col overflow-hidden items-start px-8 pt-8 bg-white border-r border-solid border-r-gray-100 pb-[900px] max-md:px-5 max-md:pb-24 max-md:mt-8">
              <CarTypeFilter options={carTypeOptions} />
              <CapacityFilter options={capacityOptions} />

              <div className="flex flex-col self-stretch mt-14 max-md:mt-10">
                <div className="text-xs font-medium tracking-tight text-slate-400">
                  P R I C E
                </div>
                <div className="flex flex-col mt-7 w-full max-w-[296px]">
                  <div className="flex items-center pr-14 w-full bg-secondary rounded-lg">
                    <div className="flex-grow rounded-xl bg-blue h-3 relative">
                      <div className="absolute top-1/2 right-[-1.5rem] w-6 h-6 bg-blue rounded-full border-4 border-white transform -translate-y-1/2"></div>
                    </div>
                  </div>

                  <div className="mt-3 text-xl font-semibold text-[#596780]">
                    Max. $100.00
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*============>>>>>> Main Content <<<<<<<<<<========= */}

          <div className="col-span-3 flex flex-col gap-8 ">
            {/* Pick-Up Section */}
            <div className="md:flex-row items-center justify-center gap-5 mt-[32px] relative flex flex-col lg:flex-row lg:gap-8 p-4">
              {/* Pickup Section */}
              <div className=" flex-1 bg-white p-6 rounded-lg shadow-md w-[552px] h-[132px] max-sm:w-[100%] max-sm:mb-4">
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
                <Link href={"/cardetails"}>
                  <button className="text-white text-2xl rotate-90">
                    <GoArrowSwitch />
                  </button>
                </Link>
              </div>

              {/* Drop-Off Section */}
              <div className="flex-1 bg-white p-6 rounded-lg shadow-md w-[582px] max-sm:w-[100%]">
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

            {/* Recommendation Cars */}
            <div>
              <RecommendationCars showHeading={false} cardsPerRow={3} limit={6}/>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
