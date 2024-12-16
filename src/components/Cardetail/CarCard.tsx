import * as React from "react";
import { CarType } from "./types";
import Image from "next/image";
import { FaGasPump } from "react-icons/fa6";
import { BiAperture } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import Link from 'next/link';

interface CarCardProps {
  car: CarType;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-xl w-full max-w-[317px] min-w-[200px] h-[330px] overflow-hidden">
      <div className="flex gap-5 justify-between font-bold">
        <div className="flex flex-col">
          <div className="text-xl tracking-tight text-gray-900">{car.name}</div>
          <div className="mt-1 text-sm tracking-tight text-slate-400">
            {car.type}
          </div>
        </div>
        <button
          aria-label={`${car.isFavorite ? "Remove from favorites" : "Add to favorites"}`}
          className="object-contain shrink-0 self-start w-6">
          <Image
            loading="lazy"
            src={car.isFavorite ? "/redheart.png" : "/heart.png"}
            alt="heart icon"
            height={24}
            width={24}
          />
        </button>
      </div>

      <Image
        loading="lazy"
        src={car.image}
        alt={car.name}
        height={300}
        width={300}
        className="mt-10 max-md:mt-8 aspect-[3.16] w-[200px]"
      />

      <div className="flex gap-5 pt-8 pl-4 items-start text-sm font-lg tracking-tight leading-5 text-slate-400 max-md:mt-8">
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
      <div className="flex gap-5 justify-between mt-6 w-full">
        <div className="flex flex-col font-bold text-slate-900">
          {/* Current price and "per day" */}
          <div className="flex items-center">
            <span className="text-xl">${car.price.current.toFixed(2)}</span>
            <span className="text-base text-slate-400 ml-1">/day</span>
          </div>

          {/* Original price */}
          {car.price.original && (
            <div className="mt-1 text-[#90A3BF] text-sm line-through">
              ${car.price.original.toFixed(2)}
            </div>
          )}
        </div>

        <Link href={"/payment"}>
        <button className="gap-2 self-start p-[20px] px-4 py-2 mb-4 mt-1 text-base font-medium tracking-tight text-center hover:bg-[#54A6FF] active:bg-[#3563E9] active:scale-95 transition-all text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap">
          Rent Now
        </button>
        </Link>

        
      </div>


    </div>
  );
}
