import { CapacityFilter } from "@/components/Cardetail/CapacityFilter";
import { CarTypeFilter } from "@/components/Cardetail/CarTypeFilter";
import {
  CarTypeOption,
  CarType,
  CapacityOption,
} from "@/components/Cardetail/types";
import Image from "next/image";
import Link from "next/link";
import { BiAperture } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa6";
import { GoArrowSwitch } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";

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

const recentCars: CarType[] = [
  {
    id: "1",
    name: "Koenigsegg",
    type: "Sport",
    image: "/koenigsegg.png",
    isFavorite: true,
    specs: {
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 People",
    },
    price: {
      current: 99.0,
    },
  },
  {
    id: "2",
    name: "Nissan GT - R",
    type: "Sport",
    image: "/NissanGT-R.png",
    isFavorite: false,
    specs: {
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 People",
    },
    price: {
      current: 80.0,
      original: 100.0,
    },
  },
  {
    id: "3",
    name: "Rolls-Royce",
    type: "Sport",
    image: "/Rolls-Royce.png",
    isFavorite: false,
    specs: {
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 People",
    },
    price: {
      current: 96.0,
    },
  },
  {
    id: "4",
    name: "All New Rush",
    type: "Sport",
    image: "/r1.png",
    isFavorite: false,
    specs: {
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 People",
    },
    price: {
      current: 72.0,
      original: 100.0,
    },
  },
  {
    id: "5",
    name: "CR - V",
    type: "Sport",
    image: "/r2.png",
    isFavorite: true,
    specs: {
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 People",
    },
    price: {
      current: 80.0,
    },
  },
  {
    id: "6",
    name: "All New Terios",
    type: "Sport",
    image: "/r3.png",
    isFavorite: false,
    specs: {
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 People",
    },
    price: {
      current: 80.0,
    },
  },
  {
    id: "7",
    name: "MG ZX Exclusice",
    type: "Sport",
    image: "/r1.png",
    isFavorite: false,
    specs: {
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 People",
    },
    price: {
      current: 72.0,
      original: 100.0,
    },
  },
  {
    id: "5",
    name: "New MG ZS",
    type: "Sport",
    image: "/r2.png",
    isFavorite: true,
    specs: {
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 People",
    },
    price: {
      current: 80.0,
    },
  },
  {
    id: "9",
    name: "MG ZX Excite",
    type: "Sport",
    image: "/r3.png",
    isFavorite: false,
    specs: {
      gasoline: "90L",
      steering: "Manual",
      capacity: "2 People",
    },
    price: {
      current: 80.0,
    },
  },
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
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-[32px] relative">
              {/* Pickup Section */}
              <div className="flex-1 bg-white p-6 rounded-lg shadow-md max-sm:w-[420px] w-[582px]">
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
              <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] flex items-center justify-center hover:bg-[#54A6FF] active:bg-[#294db9] active:scale-95 transition-all bg-[#3563E9] w-[60px] h-[60px] rounded-[10px] shadow-xl">
               
              <Link href={"/cardetails"}>
              <button className="text-white text-2xl rotate-90 ">
                  <GoArrowSwitch />
                </button>
              </Link>
              </div>

              {/* Drop-Off Section */}
              <div className="flex-1 bg-white p-6 rounded-lg shadow-md max-sm:w-[420px] w-[582px]">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                {recentCars.map((car) => (
                  <div
                    key={car.name}
                    className="border rounded-lg shadow-lg p-4 flex flex-col bg-white"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-[#1A202C] font-bold text-[16px]">
                        {car.name}
                      </h3>
                      {["Koenigsegg", "CR - V", "MG ZX Excite"].includes(
                        car.name
                      ) ? (
                        <Image
                          src="/redheart.png"
                          alt="Heart"
                          height={20}
                          width={20}
                        />
                      ) : (
                        <IoMdHeartEmpty className="text-black w-5 h-5" />
                      )}
                    </div>

                    <p className="text-[#90A3BF] font-[700] text-sm mb-4">
                      {car.type}
                    </p>
                    <div className="flex justify-center mt-2 mb-3">
                      <Image
                        src={car.image}
                        alt={car.name}
                        width={272}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex justify-between items-center w-full text-[#90A3BF] text-sm mb-1 mt-4 font-[500]">
                      <div className="flex items-center space-x-1">
                        <FaGasPump />
                        <span>{car.specs.gasoline}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BiAperture />
                        <span>{car.specs.steering}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BsFillPeopleFill />
                        <span>{car.specs.capacity}</span>
                      </div>
                    </div>
                    <div className="flex gap-5 justify-between mt-5 w-full">
                      <div className="flex flex-col font-[700] text-[20px] text-slate-900">
                        {/* Current price and "per day" */}
                        <div className="flex items-center">
                          <span className="text-xl">
                            ${car.price.current.toFixed(2)}
                          </span>
                          <span className="text-base text-slate-400 ml-1">
                            /day
                          </span>
                        </div>

                        {/* Original price */}
                        {car.price.original && (
                          <div className="mt-1 text-[#90A3BF] text-sm line-through">
                            ${car.price.original.toFixed(2)}
                          </div>
                        )}
                      </div>

                      {/* Link With Car Detail Page */}

                      <Link href={"/cardetails"}>
                        <button className="gap-2 self-start p-[10px] px-3 py-2 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap hover:bg-[#54A6FF] active:bg-[#3563E9] active:scale-95 transition-all">
                          Rent Now
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <section className="button w-full text-center mb-10">
        <button className="gap-2 self-start p-[10px] px-3 py-2 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap hover:bg-[#54A6FF] active:bg-[#3563E9] active:scale-95 transition-all">Show more car</button>
      </section>
          </div>
          
        </div>
        
      </section>

      
    </>
  );
}
