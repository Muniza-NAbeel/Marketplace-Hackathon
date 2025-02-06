"use client";
import Image from "next/image";
import { FaGasPump } from "react-icons/fa";
import { BiAperture } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cars } from "../app/types/car";
import { popular } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";

const PopularCars: React.FC = () => {
  const [cars, setCars] = useState<Cars[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCars() {
      const fetchedCars: Cars[] = await client.fetch(popular, {
        Cache: "no-cache",
      });
      setCars(fetchedCars);
    }

    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }

    fetchCars();
  }, []);

  const toggleWishlist = (
    e: React.MouseEvent<HTMLButtonElement>,
    productId: string
  ) => {
    e.preventDefault();
    
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId) // Remove
        : [...prevWishlist, productId]; // Add
  
      // Store the updated wishlist in localStorage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  
    // Show SweetAlert after the wishlist is updated
    Swal.fire({
      title: "Success!",
      text: "Item has been added to your wishlist!",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Go to wishlist",
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect to categories page when button is clicked
        window.location.href = "/wishlist";  // Replace "/categories" with your actual categories page URL
      }
    });
  };
  

  if (!cars.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#3563E9" size={50} />
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] h-auto gap-[20px] p-4">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {cars.map((car) => (
          <div
            key={car._id}
            className="border rounded-lg shadow-lg p-4 flex flex-col bg-white h-full duration-100 hover:scale-95"
          >
            <Link href={`/cars/${car._id}`}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="flex w-full h-[24px] font-semibold text-[16px] leading-[20.16px] text-[#1A202C] justify-between items-center">
                  {car.name}
                  <button
                    onClick={(e) => toggleWishlist(e, car._id.toString())}
                    className={`ml-4 text-3xl ${wishlist.includes(car._id.toString()) ? "text-red" : "text-gray-300"}`}
                  >
                   ♥
                  </button>
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
                <button className="bg-[#3563E9] text-white w-[116px] h-[44px] rounded-[4px] px-[20px] gap-[8px] hover:bg-[#3895ff] active:bg-[#3563E9] active-scale-95 transition-all">
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
