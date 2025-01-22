"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Cars } from "../../types/car";
import RecommendationCars from "@/components/RecommendationCars";
import Link from "next/link";
import PopularCars from "@/components/PopularCars";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ReviewCard } from "@/components/Cardetail/ReviewCard";
import { CarTypeFilter } from "@/components/Cardetail/CarTypeFilter";
import { CapacityFilter } from "@/components/Cardetail/CapacityFilter";
import {
  CapacityOption,
  CarTypeOption,
  ReviewType,
} from "@/components/Cardetail/types";
import { urlFor } from "@/sanity/lib/image";

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

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Cars | null>(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      if (id) {
        try {
          const carData: Cars[] = await client.fetch(`*[_id == "${id}"]`);
          if (carData.length > 0) {
            setCar(carData[0]);
          } else {
            console.error("Car not found");
          }
        } catch (error) {
          console.error("Error fetching car details:", error);
        }
      }
    };

    fetchCarDetails();
  }, [id]);

  if (!car) return <div>Loading...</div>;


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
            <div className="w-[327px] h-[232px] top-[20px] lg:w-1/2 bg-blue-100 relative max-sm:w-full max-sm:h-auto">
              <div
                className="bg-blue-200 p-6 rounded-lg shadow-md w-[492px] h-[360px] max-sm:w-full max-sm:h-auto"
                style={{
                  backgroundImage: 'url("/br.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h2 className="font-[600] text-[#FFFFFF] text-[32px] leading-[48px] tracking-[-3%] mb-4 max-sm:text-[24px] max-sm:leading-[32px]">
                  {car?.name} with the best design and acceleration
                </h2>
                <p className="font-[500] text-[16px] text-[#FFFFFF] leading-[24px] tracking-[-2%] max-sm:text-[14px] max-sm:leading-[20px]">
                  Safety and comfort while driving <br /> futuristic and elegant
                  cars.
                </p>

                <Image
                  src={car.image ? urlFor(car.image).url() : "/herotwo.png"}
                  alt="Car"
                  height={300}
                  width={300}
                  className="object-contain mx-auto mt-6 w-[380px] h-[120px] max-sm:w-[280px] max-sm:h-[100px]"
                />
              </div>

              {/* Thumbnails directly below the main image */}
              <div className="flex lg:space-x-4 max-sm:space-x-2 max-sm:justify-between mt-3">
                {car?.image && (
                  <Image
                    src={urlFor(car.image).url()}
                    alt="Car Image"
                    width={200}
                    height={200}
                    className="w-[160px] h-[108px] rounded-lg max-sm:w-[100px] max-sm:h-[60px]"
                  />
                )}
                <Image
                  src="/View2.png"
                  alt="Thumbnail 2"
                  width={100}
                  height={100}
                  className="w-[160px] h-[108px] rounded-lg max-sm:w-[100px] max-sm:h-[60px]"
                />
                <Image
                  src="/View1.png"
                  alt="Thumbnail 3"
                  width={100}
                  height={100}
                  className="w-[160px] h-[108px] rounded-lg max-sm:w-[100px] max-sm:h-[60px]"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-white rounded-[10px] h-auto md:h-[508px] mt-[20px] lg:w-[492px] p-6 flex flex-col justify-between max-sm:w-full max-sm:mt-4">
              <div>
                <h3 className="text-[32px] font-[700] leading-[48px] tracking-[-3%] text-[#1A202C] max-sm:text-[24px] max-sm:leading-[32px]">
                  {car?.name} {/* Replace static title with dynamic car name */}
                </h3>
                <div className="flex items-center">
                  <span className="text-yellow-400 mt-2 text-2xl">
                    &#9733;&#9733;&#9733;&#9733;
                  </span>
                  <span className="text-secondary mt-2 text-2xl">&#9734;</span>
                  <span className="text-[#596780] font-medium text-sm ml-24 mt-2 max-sm:mt-1">
                    440+ Reviewer
                  </span>
                </div>
                <p className="text-[#596780] mt-6 font-[400] text-lg leading-[40px] tracking-[-2%] max-sm:text-sm max-sm:leading-[24px] max-sm:mt-4">
                  NISMO has become the embodiment of Nissan&apos;s outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the &quot;race track&quot;.
                </p>

                <div className="grid grid-cols-4 pr-2 mt-8 sm:mt-4 text-sm max-sm:grid-cols-4 max-sm:gap-4">
                  <div>
                    <p className="text-[#90A3BF] font-[400] text-[20px] leading-[30px] tracking-[-2%] max-sm:text-[12px]">
                      Type Car
                    </p>
                    <p className="text-[#90A3BF] mt-2 font-[400] text-[20px] leading-[30px] tracking-[-2%] max-sm:text-[12px]">
                      Steering
                    </p>
                  </div>
                  <div>
                    <p className="font-[600] text-[20px] max-sm:text-[#1A202C]  leading-[30px] tracking-[-2%] text-[#596780] max-sm:text-[12px]">
                      {car?.type} {/* Dynamically display car type */}
                    </p>
                    <p className="font-[600] text-[20px] max-sm:text-[#1A202C]  mt-2 leading-[30px] tracking-[-2%] text-[#596780] max-sm:text-[12px]">
                      {car?.transmission}{" "}
                      {/* Dynamically display steering type */}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#90A3BF] font-[400] text-[20px] leading-[30px] tracking-[-2%] max-sm:text-[12px]">
                      Capacity
                    </p>
                    <p className="text-[#90A3BF] font-[400] text-[20px] mt-2 leading-[30px] tracking-[-2%] max-sm:text-[12px]">
                      Fuel Type
                    </p>
                  </div>
                  <div>
                    <p className="font-[600] text-[20px] max-sm:text-[#1A202C]  leading-[30px] tracking-[-2%] text-[#596780] max-sm:text-[12px]">
                      {car?.seatingCapacity}{" "}
                      {/* Dynamically display capacity */}
                    </p>
                    <p className="font-[600] text-[20px] max-sm:text-[#1A202C]  leading-[30px] mt-2 tracking-[-2%] text-[#596780] max-sm:text-[12px]">
                      {car?.fuelCapacity} {/* Dynamically display fuel type */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-8 mb-4 max-sm:flex-row max-sm:items-center max-sm:gap-2">
                <div>
                  <p className="text-xl font-[700] text-[#1A202C] max-sm:text-lg">
                    {car?.pricePerDay}
                  </p>

                  <span className="line-through text-[#90A3BF] max-sm:text-sm">
                    {car?.originalPrice} {/* Display original price */}
                  </span>
                </div>
                <Link
                  href={{
                    pathname: "/payment",
                    query: {
                      carId: car?._id,
                      carName: car?.name,
                      carImage: urlFor(car?.image).url(),
                      price: car?.pricePerDay,
                    },
                  }}
                  className="max-sm:self-end"
                >
                  <button className="gap-2 p-[10px] text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap hover:bg-[#54A6FF] active:bg-[#3563E9] active:scale-95 transition-all">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex overflow-hidden flex-col p-6 mt-8 w-full bg-white rounded-xl max-md:px-3 max-md:max-w-full">
            <div className="flex gap-3 items-start self-start whitespace-nowrap">
              <div className="w-20 text-xl font-medium tracking-tight text-[#1A202C] max-md:text-lg">
                Reviews
              </div>
              <div className="gap-2 self-stretch px-3 py-1 w-11 text-sm font-bold text-center text-white bg-blue rounded min-h-[28px]">
                13
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-8 max-md:mt-4">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            <Link href={"/payment"}>
              <button className="flex gap-1 justify-center items-center self-center px-2 py-2 mt-4 ml-3 w-full text-base font-medium tracking-tight text-center rounded min-h-[44px] text-slate-400 sm:w-[132px] hover:text-blue max-md:mt-2 max-md:flex max-md:justify-center max-md:self-center">
                <span className="self-stretch my-auto w-[68px] max-md:text-sm">
                  Show All
                </span>

                <RiArrowDropDownLine className="text-4xl object-contain shrink-0 self-stretch my-auto w-8 aspect-square max-md:text-3xl" />
              </button>
            </Link>
          </div>
          {/* Recent Cars Section */}
          <div className="flex flex-col mt-8 p-8 max-md:max-w-full">
            {/* Header Section */}
            <div className="flex justify-between items-center flex-wrap gap-4 text-base font-semibold tracking-tight max-md:text-sm">
              <div className="text-[#90A3BF] rounded text-md w-auto">
                Recent Cars
              </div>

              <Link href={"/categories"} className="hover:cursor-pointer">
                <h2 className="text-[#3563E9] text-md font-semibold leading-[20.16px] hover:underline underline-offset-1 hover:text-[#3895ff] active:text-secondary active:scale-95 transition-all">
                  View All
                </h2>
              </Link>
            </div>

            {/* Cars Grid Section */}

            <PopularCars showHeading={false} cardsPerRow={3} limit={3} />
          </div>

          {/* Recommendation Cars */}

          <div className="flex flex-col p-6 mb-14 max-md:max-w-full">
            <div className="flex gap-10 items-center justify-between flex-wrap text-base font-semibold tracking-tight text-center max-md:max-w-full">
              <div className="text-md w-auto text-[#90A3BF]">
                Recomendation Car
              </div>

              <Link href={"/categories"} className="hover:cursor-pointer">
                <h2 className="text-[#3563E9] text-md font-semibold leading-[20.16px] hover:underline underline-offset-1 hover:text-[#3895ff] active:text-secondary active:scale-95 transition-all hover:cursor-pointer">
                  View All
                </h2>
              </Link>
            </div>
            <div className="mt-0">
              <RecommendationCars
                showHeading={false}
                cardsPerRow={3}
                limit={3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
