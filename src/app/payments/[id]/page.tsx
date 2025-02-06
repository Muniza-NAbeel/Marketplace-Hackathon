"use client";
import * as React from "react";
import { StepHeader } from "@/components/rentalForm/components/StepHeader";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import ClipLoader from "react-spinners/ClipLoader";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { Cars } from "@/sanity/lib/interfaces";

export default function RentalForm() {
  const { id } = useParams();
  const [car, setCar] = useState<Cars[]>([]);
  const [isConfirm1, setIsConfirm1] = useState(false);
  const [isConfirm2, setIsConfirm2] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffLocation: "",
    dropoffDate: "",
    dropoffTime: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    phoneNumber: false,
    address: false,
    city: false,
    pickupLocation: false,
    pickupDate: false,
    pickupTime: false,
    dropoffLocation: false,
    dropoffDate: false,
    dropoffTime: false,
  });

  const locations: string[] = [
    "Nazimabad",
    "Saddar",
    "DHA",
    "Garden",
    "Aga Khan Hospital",
    "FB Area",
    "Gulshan-e-Iqbal",
    "Gulistan-e-Johar",
    "Liaquatabad",
    "SITE Area",
    "Malir",
    "Landhi",
    "Shahrah-e-Faisal",
    "Sindhi Muslim Society",
    "Bahadurabad",
    "Tariq Road",
  ];

  const validateForm = () => {
    const error = {
      name: !formValues.name,
      phoneNumber: !formValues.phoneNumber,
      address: !formValues.address,
      city: !formValues.city,
      pickupLocation: !formValues.pickupLocation,
      pickupDate: !formValues.pickupDate,
      pickupTime: !formValues.pickupTime,
      dropoffLocation: !formValues.dropoffLocation,
      dropoffDate: !formValues.dropoffDate,
      dropoffTime: !formValues.dropoffTime,
    };
    console.log("Form Errors:", error);
    setFormErrors(error);
    return Object.values(error).every((value) => !value);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    console.log(`${name}: ${value}`);
  };

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Processing your Order...",
      text: "Please wait a moment..",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");
          
          // Show success message with redirect button
          Swal.fire({
            title: "Success!",
            text: "Your Order has been successfully processed!",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Go to Categories",
          }).then((result) => {
            if (result.isConfirmed) {
              // Redirect to categories page when button is clicked
              window.location.href = "/categories";  // Replace "/categories" with your actual categories page URL
            }
          });
  
          const orderData = {
            _type: "order",
            name: formValues.name,
            phoneNumber: formValues.phoneNumber,
            address: formValues.address,
            city: formValues.city,
            pickupLocation: formValues.pickupLocation,
            pickupDate: formValues.pickupDate,
            pickupTime: formValues.pickupTime,
            dropoffLocation: formValues.dropoffLocation,
            dropoffDate: formValues.dropoffDate,
            dropoffTime: formValues.dropoffTime,
            car: {
              _type: "reference",
              _ref: car[0]._id, 
            },
            pricePerDay: car[0].pricePerDay,
            BookingDate: new Date().toISOString(),
          };
  
          try {
            const response = await client.create(orderData);
            console.log("Response from Sanity: ", response);
          } catch (error) {
            console.error("Error creating order:", error);
            Swal.fire(
              "Error!",
              "There was an issue processing your order. Please try again later.",
              "error"
            );
          }
        } else {
          Swal.fire(
            "Error!",
            "Please fill all the fields before proceeding.",
            "error"
          );
        }
      }
    });
  };
  
  

  // const fetchOrders = async () => {
  //   try {
  //     const orders = await client.fetch(`*[_type == "order"]`);
  //     console.log("Fetched Orders:", orders);
  //   } catch (error) {
  //     console.error("Error fetching orders:", error);
  //   }
  // };

  useEffect(() => {
    const fetchCarDetails = async () => {
      if (id) {
        try {
          const carData: Cars[] = await client.fetch(`*[_id == "${id}"]`);
          if (carData.length > 0) {
            setCar(carData);
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

  if (car.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#3563E9" size={50} />
      </div>
    );
  }

  return (
    <div className="overflow-hidden p-6 max-md:px-5">
      <div className="flex gap-0 max-md:flex-col">
        {/* Billing Section */}
        <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full max-md:order-2">
          <form className="flex flex-col grow max-md:mt-10 rounded-[10px] max-md:max-w-full">
            {/* Billing Info Section */}
            <div className="flex overflow-hidden flex-col p-6 w-full bg-white rounded-[10px] max-w-[852px]">
              <div className="flex justify-between items-center max-md:flex-col max-md:items-start">
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Billing Info
                  </h2>
                  <p className="text-sm text-gray-500">
                    Please enter your billing info
                  </p>
                </div>
                <span className="text-sm font-semibold text-gray-500 mt-2 max-md:ml-auto max-md:mt-[-10px]">
                  Step 1 of 4
                </span>
              </div>
              <div className="flex gap-5 max-md:flex-col mt-8">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-b-[1px] border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 w-full max-w-[500px] px-3 py-2"
                  placeholder="Enter your Name"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
                {formErrors.name && (
                  <p className="text-sm text-red">Please enter your Name</p>
                )}

                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="border-b-[1px] border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 w-full max-w-[500px] px-3 py-2"
                  placeholder="Enter your Phone Number"
                  value={formValues.phoneNumber}
                  onChange={handleInputChange}
                />
                {formErrors.phoneNumber && (
                  <p className="text-sm text-red">
                    Please enter your Phone Number
                  </p>
                )}
              </div>
              <div className="flex gap-5 max-md:flex-col mt-6">
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="border-b-[1px] border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 w-full max-w-[500px] px-3 py-2"
                  placeholder="Enter your Address"
                  value={formValues.address}
                  onChange={handleInputChange}
                />
                {formErrors.address && (
                  <p className="text-sm text-red">Please enter your Address</p>
                )}
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="border-b-[1px] border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 w-full max-w-[500px] px-3 py-2"
                  placeholder="Enter your City"
                  value={formValues.city}
                  onChange={handleInputChange}
                />
                {formErrors.city && (
                  <p className="text-sm text-red">
                    Please enter your City/Town
                  </p>
                )}
              </div>
            </div>

            {/* Rental Info Section */}
            <div className="flex overflow-hidden flex-col p-6 mt-6 w-full text-slate-500 bg-white rounded-xl">
              <StepHeader
                title="Rental Info"
                subtitle="Please select your rental date"
                step="Step 2 of 4"
              />

              <div className="flex gap-2 items-center mt-8 max-sm:w-[327px]">
                <input
                  type="radio"
                  name="pick-up"
                  className="w-5 h-5 text-blue-500 accent-blue"
                />
                <h1 className="font-bold text-slate-900">Pick - Up</h1>
              </div>

              <div className="flex flex-wrap justify-between gap-4 mt-4">
                <div className="flex-1 min-w-[280px]">
                  <label className="font-bold">Location</label>
                  <select
                    name="pickupLocation"
                    value={formValues.pickupLocation}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 text-slate-400 rounded-lg mt-1"
                  >
                    <option value="">Select Location</option>
                    {locations.map((loc, index) => (
                      <option key={index} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                  {formErrors.pickupLocation && (
                    <p className="text-red text-sm">
                      Pickup location is required
                    </p>
                  )}
                </div>

                <div className="flex-1 min-w-[280px]">
                  <label className="font-bold">Date</label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formValues.pickupDate}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 rounded-lg mt-1"
                  />
                  {formErrors.pickupDate && (
                    <p className="text-red text-sm">Pickup date is required</p>
                  )}
                </div>

                <div className="flex-1 min-w-[280px]">
                  <label className="font-bold">Time</label>
                  <input
                    type="time"
                    name="pickupTime"
                    value={formValues.pickupTime}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 rounded-lg mt-1"
                  />
                  {formErrors.pickupTime && (
                    <p className="text-red text-sm">Pickup time is required</p>
                  )}
                </div>
              </div>

              {/* Drop-Off Section */}
              <div className="flex gap-2 items-center mt-8 max-sm:w-[327px]">
                <input
                  type="radio"
                  name="drop-off"
                  className="w-5 h-5 accent-blue"
                />

                <h1 className="font-bold text-slate-900">Drop-off</h1>
              </div>

              <div className="flex flex-wrap justify-between gap-4 mt-4">
                <div className="flex-1 min-w-[280px]">
                  <label className="font-bold">Location</label>
                  <select
                    name="dropoffLocation"
                    value={formValues.dropoffLocation}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 text-slate-400 rounded-lg mt-1"
                  >
                    <option value="">Select Location</option>
                    {locations.map((loc, index) => (
                      <option key={index} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                  {formErrors.dropoffLocation && (
                    <p className="text-red text-sm">
                      Drop-off location is required
                    </p>
                  )}
                </div>

                <div className="flex-1 min-w-[280px]">
                  <label className="font-bold">Date</label>
                  <input
                    type="date"
                    name="dropoffDate"
                    value={formValues.dropoffDate}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 rounded-lg mt-1"
                  />
                  {formErrors.dropoffDate && (
                    <p className="text-red text-sm">
                      Drop-off date is required
                    </p>
                  )}
                </div>

                <div className="flex-1 min-w-[280px]">
                  <label className="font-bold">Time</label>
                  <input
                    type="time"
                    name="dropoffTime"
                    value={formValues.dropoffTime}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 rounded-lg mt-1"
                  />
                  {formErrors.dropoffTime && (
                    <p className="text-red text-sm">
                      Drop-off time is required
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>

          {/* Confirmation Method */}
          <div className="w-full bg-white p-4 mt-6 rounded-lg mx-auto lg:mx-0">
            <div>
              <h1 className="text-[rgba(26,32,44,100)] font-bold">
                Confirmation
              </h1>
            </div>

            <div className="flex justify-between">
              <h1 className="text-[rgba(144,163,191,100)] mt-2 text-[14px]">
                We are getting to the end. Just few clicks and your rental is
                ready.
              </h1>
              <h1 className="text-[rgba(144,163,191,100)] text-[14px]">
                Step 4 to 4
              </h1>
            </div>

            <div className="my-6 ">
              <div className="bg-[#F6F7F9] text-slate-800 rounded-lg">
                <div className="flex gap-2 p-3 accent-blue mt-3">
                  <input
                    type="checkbox"
                    checked={isConfirm1}
                    onChange={() => setIsConfirm1(!isConfirm1)}
                  />
                  <p
                    className={`${isConfirm1 ? "opacity-100" : "opacity-50 pointer-events-none"}`}
                  >
                    I agree with sending an Marketing and newsletter emails. No
                    spam, promised!
                  </p>
                </div>
              </div>

              <div className="bg-[#F6F7F9] text-slate-800 rounded-lg">
                <div className="flex gap-2 p-3 accent-blue mt-4">
                  <input
                    type="checkbox"
                    checked={isConfirm2}
                    onChange={() => setIsConfirm2(!isConfirm2)}
                  />
                  <p
                    className={`${isConfirm2 ? "opacity-100" : "opacity-50 pointer-events-none"}`}
                  >
                    I agree with our terms and conditions and privacy policy.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`w-fit mt-4 ${!(isConfirm1 && isConfirm2) ? "opacity-50 pointer-events-none" : ""}`}
            >
              <button
                onClick={handlePlaceOrder}
                className="self-start mt-6 px-6 py-3 text-white text-base font-medium tracking-tight bg-[#3563E9] rounded-lg w-[130px] hover:bg-[#54A6FF] active:bg-[#3563E9] active:scale-95 transition-all"
              >
                Rent Now
              </button>
            </div>

            {/* Data Security Section */}
            <div className="flex items-start gap-4 mt-8 w-full">
              <div className="flex items-center justify-center bg-transparent">
                <Image
                  loading="lazy"
                  src="/safety.png"
                  alt="tick"
                  width={100}
                  height={100}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h4 className="text-base font-semibold tracking-tight text-gray-900">
                  All your data are safe
                </h4>
                <p className="mt-2 text-sm font-medium tracking-tight text-slate-400 mb-4">
                  We are using the most advanced security to provide you the
                  best experience ever.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rental Summary Section */}
        <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full max-md:order-1">
          <div className="flex overflow-hidden flex-col p-6 mx-auto w-full bg-white rounded-xl">
            {car.length > 0 ? (
              car.map((item) => (
                <div key={item._id}>
                  <div className="flex flex-col sm:w-full">
                    <h2 className="md:text-xl text-lg font-bold tracking-tight text-gray-900">
                      Rental Summary
                    </h2>
                    <p className="mt-1 text-sm font-medium tracking-tight leading-5 text-slate-400">
                      Prices may change depending on the length of the rental
                      and the price of your rental car.
                    </p>
                  </div>

                  <div className="flex gap-4 self-start mt-8">
                    <Image
                      loading="lazy"
                      src={
                        item.image
                          ? urlFor(item.image).url()
                          : "/images/tick2.png"
                      }
                      alt={item.name}
                      height={108}
                      width={132}
                      className="object-contain shrink-0 max-w-full aspect-[1.22] w-[132px]"
                    />
                    <div className="flex overflow-hidden flex-col my-auto">
                      <h3 className="md:text-2xl text-xl font-bold tracking-tighter text-gray-900">
                        {item.name}
                      </h3>
                      <p className="font-sm text-[14px] max-sm:text-[#1A202C] text-[#596780] max-sm:text-[12px]">
                        {item.type}
                      </p>
                      <div className="flex flex-wrap overflow-hidden gap-4 items-center min-h-[24px]">
                        <div className="flex items-center">
                          <span className="text-yellow-400 text-xl">
                            &#9733;&#9733;&#9733;&#9733;
                          </span>
                          <span className="text-secondary text-xl">
                            &#9734;
                          </span>
                          <span className="text-[#596780] font-medium text-sm md:ml-10 mt-2 max-sm:mt-1">
                            440+ Reviewer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Summary */}
                  <hr className="shrink-0 mt-8 h-px border border-solid border-text-[rgba(195,212,233,0.4)]" />
                  <div className="flex gap-36 items-start mt-8 text-base tracking-tight whitespace-nowrap">
                    <div className="font-medium md:pr-4 text-slate-400 w-[116px]">
                      Subtotal
                    </div>
                    <div className="font-semibold md:text-right md:pr-0 text-gray-900 w-[116px]">
                      {item.pricePerDay}
                    </div>
                  </div>

                  {/* Apply Promo */}
                  <div className="flex gap-12 justify-between px-4 py-3 mt-8 rounded-xl bg-neutral-100">
                    <div className="md:text-sm text-xs font-medium tracking-tight text-slate-400">
                      Apply promo code
                    </div>
                    <button className="md:text-base text-xs font-semibold tracking-tight text-right text-[#1A202C] hover:underline hover:underline-blue hover:text-blue ">
                      Apply now
                    </button>
                  </div>

                  {/* Total Price */}
                  <div className="flex max-md:gap-3 items-start mt-8">
                    <div className="flex flex-col min-w-[240px] w-[284px]">
                      <h4 className="text-lg font-[700px] tracking-tight text-[#1A202C]">
                        Total Rental Price
                      </h4>
                      <p className="mt-1 text-sm font-medium tracking-tight text-slate-400">
                        Overall price and includes rental discount
                      </p>
                    </div>
                    <div className="w-32 md:text-xl text-sm font-[700px] pr-4 md:text-right text-gray-900">
                      {item.pricePerDay}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No cars available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
