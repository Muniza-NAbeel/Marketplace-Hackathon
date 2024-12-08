import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaGasPump } from "react-icons/fa6";
import { BiAperture } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";

export default function PopularCars() {
  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      price: "$99.00/",
      image: "/koenigsegg.png",
      fuel: "90L",
      transmission: "Manual",
      seats: "2 People",
      width: 304,
      height: 68,
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      price: "$85.00/",
      image: "/NissanGT-R.png",
      fuel: "70L",
      transmission: "Automatic",
      seats: "4 People",
      width: 304,
      height: 68,
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      price: "$90.00/",
      image: "/Rolls-Royce.png",
      fuel: "80L",
      transmission: "Automatic",
      seats: "4 People",
      width: 304,
      height: 68,
    },
    {
      name: "Nissan GTR",
      type: "Sport",
      price: "$85.00/",
      image: "/NissanGT-R.png",
      fuel: "70L",
      transmission: "Automatic",
      seats: "4 People",
      width: 304,
      height: 68,
    },
  ];

  return (
    <div className="max-w-[1440px] h-[452px] gap-[20px] p-10">
      <div className="flex justify-between items-center max-w-[1312px] h-[64px] rounded-[4px] px-6 gap-[32px]">
        <h2 className="text-[#90A3BF] text-xl font-semibold mb-6">
          Popular Cars
        </h2>
        <h2 className="text-[#3563E9] text-xl font-semibold mb-6 text-center text-[16px] leading-[20.16px]">
          View All
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {cars.map((car) => (
          <div
            key={car.name}
            className="border rounded-lg shadow-lg p-8 px-6 flex flex-col bg-white"
          >
            <h3 className="flex w-full h-[24px] font-semibold text-[16px] leading-[20.16px] text-[#1A202C] justify-between items-center">
              {car.name}
              {car.name === "Koenigsegg" || car.name === "Rolls-Royce" ? (
                <Image src="/heart.png" alt="Heart" height={20} width={20} />
              ) : (
                <IoMdHeartEmpty className="text-black w-5 h-5" />
              )}
            </h3>

            <p className="text-[#90A3BF] font-[600] text-sm ">{car.type}</p>
            <Image
              src={car.image}
              alt={car.name}
              width={car.width}
              height={car.height}
              className="object-contain mb-4 mt-6"
            />

            <div className="flex justify-between items-center w-[246px] h-[24px] mt-4 text-[#90A3BF] text-sm">
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
            <div className="flex items-center space-x-4 mt-4">
              <p className="text-xl text-blue-600 font-[700] text-[20px] leading-[25.2px]">
                {car.price}
                <span className="font-[700] text-[14px] text-[#90A3BF] leading-[17.64px]">
                  day
                </span>
              </p>
              <button className="bg-[#3563E9] text-white w-[116px] h-[44px] rounded-[4px] px-[20px] gap-[8px]">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
