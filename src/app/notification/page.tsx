"use client";
import React from "react";
import { remove } from "../../redux/CarSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

// Interface for CartItem
interface CartItem {
  id: number;
  name: string;
  type: string;
  pricePerDay: number;
  image: string;
}

const Notification: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {cartItems.map((item: CartItem) => (
          <div
            key={item.id}
            className="lg:w-4/5 mx-auto flex flex-wrap bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            {/* Image Section */}
            <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
              <Image
                alt={item.type}
                src={item.image}
                width={900}
                height={900}
                className="rounded-md"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {item.type}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {item.name}
              </h1>

              {/* Rating and Reviews */}
              <div className="flex mb-4">
                <span className="flex items-center">
                  {/* Star Rating */}
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-[#3563E9]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  {/* Empty Star */}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-[#3563E9]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">440 Reviews</span>
                </span>
              </div>

              {/* Description */}
              <p className="leading-relaxed mb-4">
                Create your wishlist of top rental cars for quick future
                bookings and never miss your ideal ride!
              </p>

              {/* Price and Buttons */}
              <div className="flex items-center justify-between">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {item.pricePerDay}
                </span>

                <button
                  onClick={() => {
                    Swal.fire({
                      title: "Car added successfully!",
                      text: "You can continue browsing for more cars.",
                      icon: "success",
                      showCancelButton: true,
                      confirmButtonText: "Go to Categories",
                      cancelButtonText: "Continue Browsing",
                    }).then((result) => {
                      if (result.isConfirmed && isClient) {
                        router.push("/categories"); // Redirect to Categories page
                      }
                    });
                  }}
                  className="flex ml-auto text-white bg-[#3563E9] border-0 py-2 px-6 focus:outline-none hover:bg-red rounded"
                >
                  Confirm
                </button>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="flex ml-6 text-white bg-red border-0 py-2 px-6 focus:outline-none hover:bg-[#688af0] rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Empty Notification message */}
        {cartItems.length === 0 && (
          <div className="mt-12 text-center text-gray-600 text-medium">
            <p>There are no items in Your Rental cart.</p>
            <Link href="/categories">
              <button className="mt-10 text-white bg-[#3563E9] font-medium rounded-lg text-base tracking-tight px-5 py-2.5 text-center hover:bg-[#54A6FF] active:bg-[#3563E9] active:scale-95 transition-all">
                Browse Rental Items
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Notification;
