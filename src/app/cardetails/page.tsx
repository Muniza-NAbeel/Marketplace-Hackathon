import React from "react";
import Image from "next/image";
import { CarTypeFilter } from "@/components/Cardetail/CarTypeFilter";
import { CapacityFilter } from "@/components/Cardetail/CapacityFilter";
import {
  CapacityOption,
  CarTypeOption,
  ReviewType,
} from "@/components/Cardetail/types";
import { ReviewCard } from "@/components/Cardetail/ReviewCard";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CarCard } from "@/components/Cardetail/CarCard";
import { CarType } from "../categories/types";
import Link from 'next/link';

const carTypeOptions: CarTypeOption[] = [
  { icon: "/tick.png", label: "Sport", count: 10, isSelected: true },
  { icon: "/tick.png", label: "SUV", count: 12 },
  { icon: "/rectangle.png", label: "MPV", count: 16 },
  { icon: "/rectangle.png", label: "Sedan", count: 20 },
  { icon: "/rectangle.png", label: "Coupe", count: 14 },
  { icon: "/rectangle.png", label: "Hatchback", count: 14 },
];
const reviews: ReviewType[] = [
  {
    id: "1",
    name: "Alex Stanton",
    role: "CEO at Bukalapak",
    date: "21 July 2022",
    rating: 4,
    avatar: "/review1.png",
    comment:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: "2",
    name: "Skylar Dias",
    role: "CEO at Amazon",
    date: "20 July 2022",
    rating: 4,
    avatar: "/review.png",
    comment:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
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
    image: "/Koenigsegg.png",
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
];
const RecomendationCar: CarType[] = [
  {
    id: "1",
    name: "All New Rush",
    type: "SVG",
    image: "/r1.png",
    isFavorite: false,
    specs: {
      gasoline: "70L",
      steering: "Manual",
      capacity: "6 People",
    },
    price: {
      current: 72.0,
      original: 80.0,

    },
  },
  {
    id: "2",
    name: "CR - V",
    type: "SVG",
    image: "/r2.png",
    isFavorite: true,
    specs: {
      gasoline: "80L",
      steering: "Manual",
      capacity: "6 People",
    },
    price: {
      current: 80.0,
    },
  },
  {
    id: "3",
    name: "All New Terios",
    type: "SVG",
    image: "/r3.png",
    isFavorite: false,
    specs: {
      gasoline: "90L",
      steering: "Manual",
      capacity: "6 People",
    },
    price: {
      current: 74.0,
    },
  },
];

const page = () => {
  return (
    <section className="overflow-hidden pr-8 bg-[#F6F7F9] max-md:pr-5">
      {/*==========>>>>>>>> Sidebar <<<<<<<<<<====== */}
      <div className="grid grid-cols-4 gap-5 max-md:flex max-md:flex-col h">
        <div className="col-span-1 ">
          <div className="hidden md:flex flex-col overflow-hidden items-start px-8 pt-8 bg-white border-r border-solid border-r-gray-100 h-[2000px] max-md:px-5 max-md:pb-24 max-md:mt-8">
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
        <div className="col-span-3 flex flex-col gap-8">
          <div className="flex flex-wrap lg:flex-nowrap gap-8 rounded-lg overflow-hidden">
            {/* Left Section */}
            <div className="w-[402px] h-[508px] top-[20px] lg:w-1/2 bg-blue-100 relative">
              <div
                className="bg-blue-200 p-6 rounded-lg shadow-md w-[492px] h-[360px]"
                style={{
                  backgroundImage: 'url("/br.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h2 className="font-[600] text-[#FFFFFF] text-[32px] leading-[48px] tracking-[-3%] mb-4">
                  Sports car with the best design and acceleration
                </h2>
                <p className="font-[500] text-[16px] text-[#FFFFFF] leading-[24px] tracking-[-2%]">
                  Safety and comfort while driving <br /> futuristic and elegant
                  sports cars.
                </p>

                <Image
                  src="/herotwo.png"
                  alt="Car"
                  height={300}
                  width={300}
                  className="object-contain mx-auto mt-6 w-[380px] h-[120px]"
                />
              </div>

              {/* Thumbnails directly below the main image */}
              <div className="flex lg:space-x-4 max-sm:space-x-8 mt-3">
                <Image
                  src="/view 1.png"
                  alt="Thumbnail 1"
                  width={200}
                  height={200}
                  className="w-[160px] h-[108px] rounded-lg"
                />
                <Image
                  src="/view 2.png"
                  alt="Thumbnail 2"
                  width={100}
                  height={100}
                  className="w-[160px] h-[108px] rounded-lg"
                />
                <Image
                  src="/view 3.png"
                  alt="Thumbnail 3"
                  width={100}
                  height={100}
                  className="w-[160px] h-[108px] rounded-lg"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-white rounded-[10px] h-[508px] mt-[20px] lg:w-[492px] left-[916px] p-6 flex flex-col justify-between ">
              <div>
                <h3 className="text-[32px] font-[700] leading-[48px] tracking-[-3%] text-[#1A202C]">
                  Nissan GT – R
                </h3>
                <div className="flex items-center ">
                  <span className="text-yellow-400 mt-2 text-2xl">
                    &#9733;&#9733;&#9733;&#9733;
                  </span>
                  <span className="text-secondary mt-2 text-2xl">&#9734;</span>
                  <span className="text-[#596780] font-medium text-sm ml-4 mt-2">
                    440+ Reviewer
                  </span>
                </div>
                <p className="text-[#596780] mt-6 font-[400] text-lg leading-[40px] tracking-[-2%] w-[444px] h-[120px] top-[128px] left-[24px]">
                  NISMO has become the embodiment of Nissan&apos;s outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the &quot;race track&quot;.
                </p>

                <div className="grid grid-cols-4 pr-2 mt-8 text-sm">
                  <div>
                    <p className="text-[#90A3BF] font-[400]  text-[20px] leading-[30px] tracking-[-2%] w-[92px] h-[28px]">
                      Type Car
                    </p>
                    <p className="text-[#90A3BF] mt-2 font-[400] text-[20px] leading-[30px] tracking-[-2%] w-[92px] h-[28px]mt-8">
                      Steering
                    </p>
                  </div>
                  <div>
                    <p className="font-[600] text-[20px] leading-[30px] tracking-[-2%] w-[92px] h-[28px] text-[#596780]">
                      Sport
                    </p>
                    <p className="font-[600] text-[20px] mt-2 leading-[30px] tracking-[-2%] w-[92px] h-[28px] text-[#596780]">
                      Manual
                    </p>{" "}
                  </div>
                  <div>
                    <p className="text-[#90A3BF] font-[400] text-[20px] leading-[30px] tracking-[-2%] w-[92px] h-[28px]">
                      Capacity
                    </p>
                    <p className="text-[#90A3BF] font-[400] text-[20px] mt-2 leading-[30px] tracking-[-2%] w-[92px] h-[28px]mt-8">
                      Gasoline
                    </p>
                  </div>
                  <div>
                    <p className="font-[600] text-[20px] leading-[30px] tracking-[-2%] w-[92px] h-[28px] text-[#596780]">
                      2 Person
                    </p>
                    <p className="font-[600] text-[20px] leading-[30px] mt-2 tracking-[-2%] w-[92px] h-[28px] text-[#596780]">
                      70L
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xl font-[700] text-[#1A202C]">
                    $80.00/
                    <span className="mt-0 text-sm text-[#90A3BF]">days</span>
                  </p>
                  <span className="line-through text-[#90A3BF]">$100.00</span>
                </div>

                <Link href={"/payment"}>
                <button className="gap-2 self-start p-[10px] mr-10 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap hover:bg-[#54A6FF] active:bg-[#3563E9] active:scale-95 transition-all">
                  Rent Now
                </button>
                </Link>

                
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col p-6 mt-8 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
            <div className="flex gap-3 items-start self-start whitespace-nowrap">
              <div className="w-20 text-xl font-medium tracking-tight text-[#1A202C]">
                Reviews
              </div>
              <div className="gap-2 self-stretch px-3 py-1 w-11 text-sm font-bold text-center text-white bg-blue rounded min-h-[28px]">
                13
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-8">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
    
            <Link href={"/payment"}>
            <button className="flex gap-1  justify-center items-center self-center px-2 py-2 mt-4 ml-3 max-w-full text-base font-medium tracking-tight text-center rounded min-h-[44px] text-slate-400 w-[132px] hover:underline-offset-2 hover:text-blue ">
              <span className="self-stretch my-auto w-[68px]">Show All</span>

              <RiArrowDropDownLine className="text-4xl object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
            </button>
            </Link>
          </div>
          {/* Recent Cars Section */}
          <div className="flex flex-col mt-8 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-center justify-between text-base font-semibold tracking-tight text-center max-md:max-w-full">
              <div className="gap-2 self-stretch px-5 text-md rounded min-h-[44px] text-[#90A3BF] w-[132px]">
                Recent Car
              </div>

              <Link href={"/categories"}>
              <h2 className="text-[#3563E9] text-md font-semibold mb-6 text-center leading-[20.16px] hover:underline underline-offset-1 hover:text-[#3895ff] active:text-secondary active:scale-95 transition-all hover:cursor-pointer">
                View All
              </h2>
              </Link>

              
            </div>
            <div className="grid grid-cols-1 max-sm:grid-cols-1 lg:grid-cols-3 gap-6 items-start mt-4">
              {recentCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>

          {/* Recommendation Cars */}
          <div className="flex flex-col mt-1 mb-14 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-center justify-between text-base font-semibold tracking-tight text-center max-md:max-w-full">
            <div className="gap-2 self-stretch text-md rounded min-h-[44px] text-[#90A3BF] w-[206px] font-[600] text-[16px] leading-[24px] tracking-[-2%] text-start h-[24px]">
             Recomendation Car
              </div>

              <Link href={"/categories"}>
              <h2 className="text-[#3563E9] text-md font-semibold mb-6 text-center leading-[20.16px] hover:underline underline-offset-1 hover:text-[#3895ff] active:text-secondary active:scale-95 transition-all hover:cursor-pointer">
                View All
              </h2>
              </Link>
              
            </div>
            <div className="grid grid-cols-1 max-sm:grid-cols-1 lg:grid-cols-3 gap-6 items-start mt-4">
              {RecomendationCar.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default page;
