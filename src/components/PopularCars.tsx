import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaGasPump } from "react-icons/fa";
import { BiAperture } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import Link from 'next/link';

export default function PopularCars() {
  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      image: "/koenigsegg.png",
      fuel: "90L",
      transmission: "Manual",
      seats: "2 People",
      width: 304,
      height: 68,
      price: {
        current: 99.00,
      }
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      image: "/NissanGT-R.png",
      fuel: "80L",
      transmission: "Manual",
      seats: "4 People",
      width: 304,
      height: 68,
      price: {
        current: 80.00,
        original: 100.0,
      },
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      image: "/Rolls-Royce.png",
      fuel: "70L",
      transmission: "Manual",
      seats: "4 People",
      width: 304,
      height: 68,
      price: {
        current: 96.00,
      },
    },
    {
      name: "Nissan GTR",
      type: "Sport",
      image: "/NissanGT-R.png",
      fuel: "80L",
      transmission: "Manual",
      seats: "4 People",
      width: 304,
      height: 68,
      price: {
        current: 80.00,
        original: 100.0,
      },
    },
  ];

  return (
    <div className="max-w-[1440px] h-auto gap-[20px] p-4">
      <div className="flex justify-between items-center max-w-[1312px] h-[64px] rounded-[4px] px-6 gap-[32px]">
        <h2 className="text-[#90A3BF]  text-md md:text-xl font-bold mb-6">
          Popular Cars
        </h2>

        <Link href={"/categories"}>
        <h2 className="text-[#3563E9] text-md md:text-xl font-semibold mb-6 text-center text-[16px] leading-[20.16px] hover:underline underline-offset-1 hover:text-[#3895ff] active:text-secondary active:scale-95 transition-all hover:cursor-pointer">
          View All
        </h2>
        </Link>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {cars.map((car) => (
          <div
            key={car.name}
            className="border rounded-lg shadow-lg p-8 px-6 flex flex-col font-bold bg-white"
          >
            <h3 className="flex w-full h-[24px] font-semibold text-[16px] leading-[20.16px] text-[#1A202C] justify-between items-center">
              {car.name}
              {car.name === "Koenigsegg" || car.name === "Rolls-Royce" ? (
                <Image src="/redheart.png" alt="Heart" height={20} width={20} />
              ) : (
                <IoMdHeartEmpty className="text-black w-5 h-5" />
              )}
            </h3>

            <p className="text-[#90A3BF] font-[600] text-sm">{car.type}</p>
           <div className="flex flex-col items-start w-full">
           <Image
              src={car.image}
              alt={car.name}
              width={car.width}
              height={car.height}
              className="object-contain mb-4 mt-6 "
            />
           </div>

            <div className="flex justify-between items-center mt-4 text-[#90A3BF] text-sm">
              <div className="flex items-center space-x-1">
                <FaGasPump />
                <span>{car.fuel}</span>
              </div>
              <div className="flex items-center space-x-1">
                <BiAperture />
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center space-x-1">
                <BsFillPeopleFill />
                <span>{car.seats}</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col font-bold text-slate-900">
          {/* Current price and "per day" */}
          <div className="flex items-center">
            <span className="text-xl text-blue-600 font-bold text-[20px] leading-[25.2px]">${car.price.current.toFixed(2)}</span>
            <span className="font-bold text-[14px] text-[#90A3BF] leading-[17.64px]">/day</span>
          </div>

          {/* Original price */}
          {car.price.original && (
            <div className="mt-1 text-[#90A3BF] text-sm line-through">
              ${car.price.original.toFixed(2)}
            </div>
          )}
        </div>

        <Link href={"/categories"}>
        <button className="bg-[#3563E9] text-white w-[116px] h-[44px] rounded-[4px] px-[20px] gap-[8px] hover:bg-[#3895ff] active:bg-[#3563E9] active-scale-95 transition-all">
                Rent Now
              </button>
        </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
