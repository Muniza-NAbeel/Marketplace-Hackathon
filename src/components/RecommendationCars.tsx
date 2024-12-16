import Image from "next/image";
import { BiAperture } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";

export default function RecommendationCars() {
  const recommendedCars = [
    {
      name: "AllNew Rush",
      price: "$72.00/",
      image: "/1.png",
      fuel: "70L",
      transmission: "Manual",
      seats: "2 People",
      type: "SUV",
      width: 304,
      height: 68,
    },
    {
      name: "CR-V",
      price: "$80.00/",
      image: "/2.png",
      fuel: "80L",
      transmission: "Manual",
      seats: "2 People",
      type: "SUV",
      width: 304,
      height: 68,
    },
    {
      name: "All New Terios",
      price: "$74.00/",
      image: "/3.png",
      fuel: "90L",
      transmission: "Manual",
      seats: "2 People",
      type: "SUV",
      width: 304,
      height: 68,
    },
    {
      name: "CR-V",
      price: "$80.00/",
      image: "/4.png",
      fuel: "80L",
      transmission: "Manual",
      seats: "2 People",
      type: "SUV",
      width: 304,
      height: 68,
    },
    {
      name: "MG ZX Exclusice",
      price: "$76.00/",
      image: "/5.png",
      fuel: "70L",
      transmission: "Manual",
      seats: "2 People",
      type: "Hatchback",
      width: 304,
      height: 68,
    },
    {
      name: "New MGZS",
      price: "$80.00/",
      image: "/6.png",
      className: " -rotate-180",
      fuel: "80L",
      transmission: "Manual",
      seats: "4 People",
      type: "SUV",
      width: 304,
      height: 68,
    },
    {
      name: "MG ZX Excite",
      price: "$76.00/",
      image: "/7.png",
      fuel: "80L",
      transmission: "Manual",
      seats: "2 People",
      type: "Hatchback",
      width: 304,
      height: 68,
    },
    {
      name: "All New Rush",
      price: "$72.00/",
      image: "/8.png",
      fuel: "80L",
      transmission: "Manual",
      seats: "2 People",
      type: "SUV",
      width: 304,
      height: 68,
    },
  ];

  return (
    <div className="max-w-[1440px] h-auto gap-[20px] p-10">
      {/* Header */}
      <div className="flex justify-between items-center max-w-[1312px] h-[64px] rounded-[4px] px-6 gap-[32px]">
        <h2 className="text-[#90A3BF] text-xl font-semibold mb-6">
          Recommendation Cars
        </h2>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {recommendedCars.map((car) => (
          <div
            key={car.name}
            className="border rounded-lg shadow-lg p-4 flex flex-col bg-white"
          >
            {/* Car Title with Heart Icon */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[#1A202C] font-semibold text-[16px]">
                {car.name}
              </h3>
              {car.name === "CR-V" ||
              car.name === "MG ZX Exclusice" ||
              car.name === "MG ZX Excite" ? (
                <Image src="/redheart.png" alt="Heart" height={20} width={20} />
              ) : (
                <IoMdHeartEmpty className="text-black w-5 h-5" />
              )}
            </div>

            {/* Car Type */}
            <p className="text-[#90A3BF] font-[700] text-sm mb-4">{car.type}</p>

            {/* Car Image */}
            <div className="flex flex-col items-start w-full">
              <Image
                src={car.image}
                alt={car.name}
                width={car.width}
                height={car.height}
                className="object-contain flex justify-center mb-4 "
              />
            </div>

            {/* Car Details */}
            <div className="flex justify-between items-center w-full text-[#90A3BF] text-sm mb-4">
              <div className="flex items-center space-x-1 ">
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

            {/* Price and Rent Button */}
            <div className="flex justify-between items-center mt-auto">
              <p className="text-xl text-blue-600 font-bold text-[20px] leading-[25.2px]">
                {car.price}
                <span className="font-bold text-[14px] text-[#90A3BF] leading-[17.64px]">
                  day
                </span>
              </p>

              <Link href={"/categories"}>
                <button className="bg-[#3563E9] text-white w-[116px] h-[44px] rounded-[4px] px-[20px] gap-[8px] hover:bg-[#3895ff] active:bg-[#3563E9] active-scale-95 transition-all">
                  Rent Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 relative w-full">
        <Link href={"/categories"}>
          <h1 className="bg-[#3563E9] flex justify-center items-center text-white w-[156px] h-[44px] rounded-[4px] px-[20px] gap-[8px] font-semibold text-[16px] leading-[24px] tracking-[-2%] text-center hover:bg-[#3895ff] active:bg-[#3563E9] active-scale-95 transition-all">
            Show more car
          </h1>
        </Link>
        <h1 className="absolute right-0 text-[#90A3BF] text-[14px] font-[500] leading-[21px] tracking-[-2%]">
          120 car
        </h1>
      </div>
    </div>
  );
}
