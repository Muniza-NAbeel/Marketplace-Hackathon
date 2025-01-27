"use client";

import Sidebar from "@/components/SideBar";
import { useEffect, useState } from "react";
import { Cars } from "../types/car";
import { client } from "@/sanity/lib/client";
import { allCars } from "@/sanity/lib/queries";
import ClipLoader from "react-spinners/ClipLoader";
import Link from "next/link";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiAperture } from "react-icons/bi";
import { FaGasPump } from "react-icons/fa6";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { IoMdHeartEmpty } from "react-icons/io";

const Categories: React.FC = () => {
  const [cars, setCars] = useState<Cars[]>([]);
  const [filteredCars, setFilteredCars] = useState<Cars[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedseatingCapacity, setSelectedseatingCapacity] = useState<
    string[]
  >([]);

  // Fetch cars from Sanity
  useEffect(() => {
    async function fetchCars() {
      const fetchedCars: Cars[] = await client.fetch(allCars, {
        Cache: "no-cache",
      });
      setCars(fetchedCars);
      setFilteredCars(fetchedCars); // Initially all cars are displayed
    }
    fetchCars();
  }, []);

  // Filter cars based on selected sidebar options
  useEffect(() => {
    let filtered = cars;

    // Filter by car type
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((car) => selectedTypes.includes(car.type));
    }

    // Filter by seating capacity
    if (selectedseatingCapacity.length > 0) {
      filtered = filtered.filter((car) =>
        selectedseatingCapacity.includes(car.seatingCapacity)
      );
    }

    setFilteredCars(filtered);
  }, [selectedTypes, selectedseatingCapacity, cars]);

  if (!cars) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#3563E9" size={50} />
      </div>
    );
  }

  return (
    <section className="overflow-hidden pr-8 bg-neutral-100 max-md:pr-5">
      <div className="grid grid-cols-4 gap-5 max-md:flex max-md:flex-col">
        {/* Sidebar */}
        <div className="col-span-1">
          <div className="hidden lg:flex flex-col overflow-hidden items-start px-8 pt-8 bg-white border-r border-solid border-r-gray-100 h-[1500px] max-md:px-5 max-md:pb-24 max-md:mt-8">
            <Sidebar
              selectedTypes={selectedTypes}
              setSelectedTypes={setSelectedTypes}
              selectedseatingCapacity={selectedseatingCapacity}
              setSelectedseatingCapacity={setSelectedseatingCapacity}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-3 flex flex-col gap-8 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <div
                  key={car._id}
                  className="border rounded-lg shadow-lg p-4 flex flex-col bg-white h-full duration-100 hover:scale-95"
                >
                  <Link href={`/cars/${car._id}`}>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="flex w-full h-[24px] font-semibold text-[16px] leading-[20.16px] text-[#1A202C] justify-between items-center">
                        {car.name}
                        {car.name === "Koenigsegg" ||
                        car.name === "Rolls-Royce" ? (
                          <Image
                            src="/redheart.png"
                            alt="Heart"
                            height={20}
                            width={20}
                          />
                        ) : (
                          <IoMdHeartEmpty className="text-black w-5 h-5" />
                        )}
                      </h3>
                    </div>
                    <p className="text-[#90A3BF] font-[600] text-sm">
                      {car.type}
                    </p>
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
                      <button className="bg-[#3563E9] text-white w-[116px] h-[44px] rounded-[4px] px-[20px] gap-[8px] hover:bg-[#3895ff] active:bg-[#3563E9] active-scale-95 transition-all">
                        Rent Now
                      </button>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-screen">
                <ClipLoader color="#3563E9" size={50} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
