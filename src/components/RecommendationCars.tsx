'use client';
import Image from "next/image";
import { BiAperture } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cars } from "../app/types/car";
import { client } from "@/sanity/lib/client";
import { recommendedCars } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";

interface RecommendationCarsProps {
  showHeading?: boolean;
  cardsPerRow?: number;
  limit?: number;
  showButton?: boolean;
}

export default function RecommendationCars({
  showHeading = true,
  cardsPerRow = 4,
  limit= 8,
  showButton = true,
}: RecommendationCarsProps) {
  const [cars, setCars] = useState<Cars[]>([]); 
  const [showMore, setShowMore] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]); 


  // Fetch cars data from the backend
  useEffect(() => {
    async function fetchCars() {
      const fetchedCars: Cars[] = await client.fetch(recommendedCars, {Cache:"no-Cache"});
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

  // Determine which cars to show based on the 'showMore' state
  const carsToShow = showMore ? cars : cars.slice(0, limit);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  if (!cars) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#3563E9" size={50} />
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] h-auto p-2">
      {/* Heading Section */}
      {showHeading && (
        <div className="flex justify-between items-center max-w-[1312px] h-[64px] rounded-[4px] px-6 gap-[32px]">
          <h2 className="text-[#90A3BF] text-md md:text-xl font-semibold mb-6">
            Recommendation Cars
          </h2>
        </div>
      )}

      {/* Cars Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${cardsPerRow} gap-6 p-2`}
      >
        {carsToShow.map((car) => (
          <div
            key={car._id}
            className="border rounded-lg shadow-lg p-4 flex flex-col bg-white h-full duration-100 hover:scale-95"
          >
            {/* Car Title and Heart Icon */}
            <Link href={`/cars/${car._id}`}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[#1A202C] font-semibold text-[16px]">
                {car.name}
              </h3>
              <div>
              <button
                    onClick={(e) => toggleWishlist(e, car._id.toString())}
                    className={`ml-4 text-3xl ${wishlist.includes(car._id.toString()) ? "text-red" : "text-gray-300"}`}
                  >
                   ♥
                  </button>
                  </div>
            </div>

            {/* Car Type */}
            <p className="text-[#90A3BF] font-[700] text-sm mb-4">{car.type}</p>

            {/* Car Image */}
            <div className="flex justify-center mb-3">
              <Image
                src={urlFor(car.image).url()}
                alt={car.name}
                width={304}
                height={68}
                className="object-contain"
              />
            </div>

            {/* Car Features */}
            <div className="flex justify-between items-center w-full text-[#90A3BF] text-sm mb-4">
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

            {/* Price and Rent Now Button */}
            <div className="flex justify-between items-center mt-auto w-full">
              <p className="text-xl text-blue-600 font-bold text-[20px] leading-[25.2px] truncate">
                {car.pricePerDay}
              </p>
                <button className="bg-[#3563E9] text-white w-[116px] h-[44px] rounded-[4px] px-[20px] gap-[8px] hover:bg-[#3895ff] active:bg-[#3563E9] active:scale-95 transition-all flex-shrink-0">
                  Rent Now
                </button>
            </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Cars Button */}
      {showButton && (
        <div className="flex justify-center mt-10 relative w-full mb-10">
          <button
            onClick={toggleShowMore}
            className="bg-[#3563E9] flex justify-center items-center text-white text-sm md:text-lg w-[120px] md:w-[156px] h-[44px] rounded-[4px] px-[4px] gap-[12px] font-semibold leading-[24px] tracking-[-2%] text-center hover:bg-[#3895ff] active:bg-[#3563E9] active:scale-95 transition-all"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
          <h1 className="absolute right-6 mt-2 text-[#90A3BF] text-[14px] font-[500] leading-[21px] tracking-[-2%]">
            {showMore ? cars.length : limit} cars
          </h1>
        </div>
      )}
    </div>
  );
}