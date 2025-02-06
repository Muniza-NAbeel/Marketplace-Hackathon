"use client";

import Sidebar from "@/components/SideBar";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { allCars } from "@/sanity/lib/queries";
import ClipLoader from "react-spinners/ClipLoader";
import Link from "next/link";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiAperture } from "react-icons/bi";
import { FaGasPump } from "react-icons/fa6";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useSearchParams } from "next/navigation";
import { Cars } from "@/app/types/car";
import Swal from "sweetalert2";

const Categories: React.FC = () => {
  const [cars, setCars] = useState<Cars[]>([]);
  const [filteredCars, setFilteredCars] = useState<Cars[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSeatingCapacity, setSelectedSeatingCapacity] = useState<
    string[]
  >([]);
  const [search, setSearch] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]); 

  // Get search params from the URL
  const searchParams = useSearchParams();
  useEffect(() => {
    setSearch(searchParams.get("search")); 
  }, [searchParams]);

  // Fetch cars from Sanity
  useEffect(() => {
    async function fetchCars() {
      const fetchedCars: Cars[] = await client.fetch(allCars, {
        Cache: "no-cache",
      });
      setCars(fetchedCars);
      setFilteredCars(fetchedCars); 
    }

    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }

    fetchCars();
  }, []);

  // Filter cars based on selected filters and search query
  useEffect(() => {
    let filtered = cars;

    // Filter by car type
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((car) => selectedTypes.includes(car.type));
    }

    // Filter by seating capacity
    if (selectedSeatingCapacity.length > 0) {
      filtered = filtered.filter((car) =>
        selectedSeatingCapacity.includes(car.seatingCapacity)
      );
    }

    // Filter by search query
    if (search && typeof search === "string") {
      filtered = filtered.filter((car) =>
        car.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCars(filtered);
  }, [selectedTypes, selectedSeatingCapacity, search, cars]);


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
    <section className="overflow-hidden pr-8 bg-neutral-100 max-md:pr-5">
      <div className="grid grid-cols-4 gap-5 max-md:flex max-md:flex-col">
        {/* Sidebar */}
        <div className="col-span-1">
          <div className="hidden lg:flex flex-col overflow-hidden items-start px-8 pt-8 bg-white border-r border-solid border-r-gray-100 h-[1500px] max-md:px-5 max-md:pb-24 max-md:mt-8">
            <Sidebar
              selectedTypes={selectedTypes}
              setSelectedTypes={setSelectedTypes}
              selectedseatingCapacity={selectedSeatingCapacity}
              setSelectedseatingCapacity={setSelectedSeatingCapacity}
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
                        <div>
                        <button
                    onClick={(e) => toggleWishlist(e, car._id.toString())}
                    className={`ml-4 text-3xl ${wishlist.includes(car._id.toString()) ? "text-red" : "text-gray-300"}`}
                  >
                   ♥
                  </button>
                  </div>


{/* 
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
                        )} */}
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
              <p className="flex items-start justify-start w-full">
                No Cars found. Please try a different name!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;