'use client';
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaGasPump } from "react-icons/fa";
import { BiAperture } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { Cars } from "../app/types/car";
import { popular } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface PopularCarsProps {
  showHeading?: boolean;
  cardsPerRow?: number;
  limit?: number;
}

const PopularCars: React.FC<PopularCarsProps> = ({ showHeading = true, cardsPerRow = 4, limit }) => {
  const [cars, setCars] = useState<Cars[]>([]);

  useEffect(() => {
    async function fetchCars() {
      const fetchedCars: Cars[] = await client.fetch(popular);
      setCars(limit ? fetchedCars.slice(0, limit) : fetchedCars); 
    }
    fetchCars();
  }, [limit]);

  return (
    <div className="max-w-[1440px] h-auto gap-[20px] p-4">
      {showHeading && (
        <div className="flex justify-between items-center max-w-[1312px] h-[64px] rounded-[4px] px-6 gap-[32px]">
          <h2 className="text-[#90A3BF] text-md md:text-xl font-bold mb-6">
            Popular Cars
          </h2>
          <Link href={"/categories"}>
            <h2 className="text-[#3563E9] text-md md:text-xl font-semibold mb-6 text-center text-[16px] leading-[20.16px] hover:underline underline-offset-1 hover:text-[#3895ff] active:text-secondary active:scale-95 transition-all hover:cursor-pointer">
              View All
            </h2>
          </Link>
        </div>
      )}
      
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-${cardsPerRow} gap-6 p-4`}>
        {cars.map((car) => (
          <div
            key={car._id}
            className="border rounded-lg shadow-lg p-4 flex flex-col bg-white h-full"
          >
            <Link href={`/cars/${car._id}`}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="flex w-full h-[24px] font-semibold text-[16px] leading-[20.16px] text-[#1A202C] justify-between items-center">
                  {car.name}
                  {car.name === "Koenigsegg" || car.name === "Rolls-Royce" ? (
                    <Image src="/redheart.png" alt="Heart" height={20} width={20} />
                  ) : (
                    <IoMdHeartEmpty className="text-black w-5 h-5" />
                  )}
                </h3>
              </div>
              <p className="text-[#90A3BF] font-[600] text-sm">{car.type}</p>
              <div className="flex flex-col items-start w-full">
                <Image
                  src={urlFor(car.image).url()}
                  alt={car.name}
                  width={304}
                  height={68}
                  className="object-contain mb-4 mt-6"
                />
              </div>
              <div className="flex justify-between items-center mt-4 text-[#90A3BF] text-sm">
                <div className="flex items-center space-x-1">
                  <FaGasPump />
                  <span>{car.fuelCapacity}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BiAperture />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BsFillPeopleFill />
                  <span>{car.seatingCapacity}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex flex-col font-bold text-slate-900">
                  <div className="flex items-center">
                    <span className="text-xl text-blue-600 font-bold text-[20px] leading-[25.2px]">
                      {car.pricePerDay}
                    </span>
                  </div>
                  {car.originalPrice && (
                    <div className="mt-1 text-[#90A3BF] text-sm line-through">
                      {car.originalPrice}
                    </div>
                  )}
                </div>
                <button
                  className="bg-[#3563E9] text-white w-[116px] h-[44px] rounded-[4px] px-[20px] gap-[8px] hover:bg-[#3895ff] active:bg-[#3563E9] active-scale-95 transition-all"
                >
                  Rent Now
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCars;
