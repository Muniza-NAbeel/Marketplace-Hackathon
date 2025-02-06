"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Cars } from "../../types/car";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import ClipLoader from "react-spinners/ClipLoader";

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


  if (!car) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#3563E9" size={50} />
      </div>
    );
  }
  return (
    <section className="overflow-hidden pl-4 mb-10 mt-10 lg:pr-8 bg-[#F6F7F9] max-md:pr-5">
      {/*==========>>>>>>>> Sidebar <<<<<<<<<<====== */}
      <div className="grid grid-cols-3 gap-5 max-md:flex max-md:flex-col h">
        <div className="col-span-3 flex flex-col ml:3 lg:ml-14 lg:gap-8">
          <div className="flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8 bg-white rounded-lg overflow-hidden">
            {/* Left Section */}
            <div className="w-[327px] h-[232px]  top-[20px] lg:w-1/2 bg-blue-100 relative max-sm:w-full max-sm:h-auto">

                <Image
                  src={car.image ? urlFor(car.image).url() : "/herotwo.png"}
                  alt="Car"
                  height={900}
                  width={900}
                  className="object-contain mx-auto mt-6 w-[380px] h-[220px] max-sm:w-[280px] max-sm:h-[100px]"
                />
              

              {/* Thumbnails directly below the main image */}
              <div className="flex lg:ml-10 lg:space-x-4 max-sm:space-x-2 max-sm:justify-between mt-9">
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
                  {car?.name} 
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
                      {car?.type} 
                    </p>
                    <p className="font-[600] text-[20px] max-sm:text-[#1A202C]  mt-2 leading-[30px] tracking-[-2%] text-[#596780] max-sm:text-[12px]">
                      {car?.transmission}{" "}
                    
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
              <div className="flex justify-between items-center pt-2 mb-4 max-sm:flex-row max-sm:items-center max-sm:gap-2">
                <div className="flex-col mt-4">
                  <h1 className="text-[#90A3BF] font-[200] text-[18px] leading-[30px] tracking-[-2%] max-sm:text-[12px]">Discount Price</h1>
                  <p className="text-[14px] text-[#1A202C]  leading-[30px] tracking-[-2%] max-sm:text-[12px]">
                     {car?.pricePerDay}
                  </p>
                  
                  <h1 className="text-[#90A3BF] font-[200] text-[18px] leading-[30px] tracking-[-2%] max-sm:text-[12px]">Original Price</h1>
                  <span className="line-through text-[14px] text-[#1A202C]  leading-[30px] mt-2 tracking-[-2%] max-sm:text-[12px]">
                    {car?.originalPrice} {/* Display original price */}
                  </span>
                </div>
                <Link
                  href={{
                    pathname: `/payments/${car?._id}`,
                    query: {
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

        </div>
      </div>
    </section>
  );
};

export default CarDetails;
