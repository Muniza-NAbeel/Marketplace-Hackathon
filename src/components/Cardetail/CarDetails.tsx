import * as React from "react";
import { CarTypeFilter } from "./CarTypeFilter";
import { CapacityFilter } from "./CapacityFilter";
import { CarCard } from "./CarCard";
import { ReviewCard } from "./ReviewCard";
import { CarType, ReviewType, CarTypeOption, CapacityOption } from "./types";
import { RiArrowDropDownLine } from "react-icons/ri";

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
    name: "CR  - V",
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
  // Add more cars as needed
];

export function CarDetails() {
  return (
    <div className="overflow-hidden pr-8 bg-neutral-100 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col grow items-start px-8 pt-8 w-full bg-white border-r border-solid border-r-gray-100 pb-[1176px] max-md:px-5 max-md:pb-24 max-md:mt-8">
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

        <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-8 w-full max-md:mt-10 max-md:max-w-full">
            {/* Featured Car Section */}
            {/* Reviews Section */}
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

              <button className="flex gap-2 justify-center items-center self-center px-5 mt-6 ml-3 max-w-full text-base font-medium tracking-tight text-center rounded min-h-[44px] text-slate-400 w-[132px]">
                <span className="self-stretch my-auto w-[68px]">Show All</span>

                <RiArrowDropDownLine className="text-2xl object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
              </button>
            </div>

            {/* Recent Cars Section */}
            <div className="flex flex-col mt-8 max-md:max-w-full">
              <div className="flex flex-wrap gap-10 items-center justify-between text-base font-semibold tracking-tight text-center max-md:max-w-full">
                <div className="gap-2 self-stretch px-5 rounded min-h-[44px] text-[#90A3BF] w-[132px]">
                  Recent Car
                </div>
                <div className="text-[#3563E9] gap-2 self-stretch px-5 w-32 text-blue-600 rounded min-h-[44px]">
                  View All
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start mt-4">
                {recentCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
