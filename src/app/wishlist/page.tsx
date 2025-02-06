'use client';
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Cars } from "@/sanity/lib/interfaces"; 
import ClipLoader from "react-spinners/ClipLoader";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const PopularCars: React.FC = () => {
  const [wishlist, setWishlist] = useState<string[]>([]); 
  const [wishlistItems, setWishlistItems] = useState<Cars[]>([]); 

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      const productIds = JSON.parse(storedWishlist);
      setWishlist(productIds);

      const fetchWishlistItems = async () => {
        const query = `
          *[_type == "car" && _id in ${JSON.stringify(productIds)}] {
            _id,
            name,
            type,
            image,
            fuelCapacity,
            transmission,
            seatingCapacity,
            pricePerDay,
            originalPrice,
            tags
          }
        `;

        try {
          const data = await client.fetch(query);
          setWishlistItems(data);
        } catch (error) {
          console.error("Error fetching wishlist items:", error);
        } 
      };

      fetchWishlistItems();
    }
  }, []); 

  if (!wishlist) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#3563E9" size={50} />
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] h-auto gap-[20px] p-4">
      <div className="flex justify-center mt-4 items-center max-w-[1312px] h-[64px] rounded-[4px] px-6 gap-[32px]">
        <h2 className="font-bold text-[#90A3BF]  tracking-[-3%] leading-[48px] drop-shadow-md text-[24px] md:text-[32px]">
          Wishlist Cars
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {wishlistItems.length ? (
          wishlistItems.map((car) => (
            <div
              key={car._id}
              className="border rounded-lg shadow-lg p-4 flex flex-col bg-white h-full duration-100 hover:scale-95"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="flex w-full h-[24px] font-semibold text-[16px] leading-[20.16px] text-[#1A202C] justify-between items-center">
                  {car.name}
                </h3>
              </div>
              <p className="text-[#90A3BF] font-[600] text-sm">{car.type}</p>
              <div className="flex flex-col items-start w-full">
                <Image
                  src={urlFor(car.image).url()} // Assuming image is a URL in the data
                  alt={car.name}
                  width={304}
                  height={68}
                  className="object-contain mb-4 mt-6"
                />
              </div>
              <div className="flex justify-between items-center mt-4 text-[#90A3BF] text-sm">
                <div className="flex items-center space-x-1">
                  <span>{car.fuelCapacity}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center space-x-1">
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
                <Link href={`/cars/${car._id}`}>

                <button
                  className="bg-[#3563E9] text-white w-[116px] h-[44px] rounded-[4px] px-[20px] gap-[8px] hover:bg-[#3895ff] active:bg-[#3563E9] active-scale-95 transition-all"
                >
                  Rent Now
                </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-screen">
          <ClipLoader color="#3563E9" size={50} />
        </div>
        )}
      </div>
    </div>
  );
};

export default PopularCars;
