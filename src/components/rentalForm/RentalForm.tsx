import * as React from "react";
import { InputField } from "./components/InputField";
import { SelectField } from "./components/SelectField";
import { StepHeader } from "./components/StepHeader";
import { RentalSummary } from "./components/RentalSummary";
import Image from "next/image";
import Link from 'next/link';

export const RentalForm: React.FC = () => {
  return (
    <div className="overflow-hidden p-6 max-md:px-5">
  <div className="flex gap-0 max-md:flex-col">
    {/* Billing Section */}
    <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full max-md:order-2">
      <form className="flex flex-col grow max-md:mt-10 rounded-[10px] max-md:max-w-full">
        {/* Billing Info Section */}
        <div className="flex overflow-hidden flex-col p-6 w-full bg-white rounded-[10px] max-w-[852px]">
          <div className="flex justify-between items-center max-md:flex-col max-md:items-start">
            {/* Title and Subtitle */}
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-900">
                Billing Info
              </h2>
              <p className="text-sm text-gray-500">
                Please enter your billing info
              </p>
            </div>

            {/* Step Text for Small Screens */}
            <span className="text-sm font-semibold text-gray-500 mt-2 max-md:ml-auto max-md:mt-[-10px]">
              Step 1 of 4
            </span>
          </div>

          <div className="flex gap-5 max-md:flex-col mt-8">
            <InputField
              label="Name"
              placeholder="Your name"
              className="bg-[#F6F7F9]"
            />
            <InputField
              label="Phone Number"
              placeholder="Phone number"
              className="bg-[#F6F7F9]"
            />
          </div>

          <div className="flex gap-5 max-md:flex-col mt-6">
            <InputField
              label="Address"
              placeholder="Address"
              className="bg-[#F6F7F9]"
            />
            <InputField
              label="Town / City"
              placeholder="Town or city"
              className="bg-[#F6F7F9]"
            />
          </div>
        </div>

        {/* Rental Info Section */}
        <div className="flex overflow-hidden flex-col p-6 mt-8 w-full bg-white rounded-xl">
          <StepHeader
            title="Rental Info"
            subtitle="Please select your rental date"
            step="Step 2 of 4"
          />

          {/* Pick-up Section */}
          <div className="flex gap-2 items-center mt-8 max-sm:w-[327px]">
            <div className="flex justify-center items-center px-1 w-4 h-4 bg-blue bg-opacity-30 rounded-[70px] relative">
              <div className="absolute top-1/2 w-4 h-4 bg-blue rounded-full border-4 border-secondary transform -translate-y-1/2"></div>
            </div>
            <span className="text-base font-semibold tracking-tight text-[#1A202C]">
              Pick - Up
            </span>
          </div>

          <div className="flex flex-wrap gap-8 mt-6 max-sm:w-[295px]">
            <SelectField label="Locations" placeholder="Select your city" />
            <SelectField label="Date" placeholder="Select your date" />
          </div>

          <div className="flex mt-6 max-sm:w-[295px]">
            <SelectField label="Time" placeholder="Select your time" />
          </div>

          {/* Drop-off Section */}
          <div className="flex gap-2 items-center mt-8">
            <div className="flex justify-center items-center px-1 w-4 h-4 bg-blue-400 bg-opacity-30 rounded-[70px] relative">
              <div className="absolute top-1/2 w-4 h-4 bg-blue rounded-full border-4 border-secondary transform -translate-y-1/2"></div>
            </div>
            <span className="text-base font-semibold tracking-tight text-[#1A202C]">
              Drop - Off
            </span>
          </div>

          <div className="flex flex-wrap gap-8 mt-6 max-sm:w-[295px]">
            <SelectField label="Locations" placeholder="Select your city" />
            <SelectField label="Date" placeholder="Select your date" />
          </div>

          <div className="flex mt-6 max-sm:w-[295px]">
            <SelectField label="Time" placeholder="Select your time" />
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="flex flex-col p-6 mt-8 w-full bg-white rounded-[10px]">
          <StepHeader
            title="Payment Method"
            subtitle="Please enter your payment method"
            step="Step 3 of 4"
          />

          {/* Credit Card Option */}
          <div className="flex flex-col gap-6 p-6 mt-4 w-full rounded-xl bg-[#F6F7F9]">
            {/* Radio Button for Credit Card */}
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                defaultChecked
                className="w-5 h-5 text-blue-500 accent-blue-500"
              />
              <span className="ml-4 text-[#1A202C] font-semibold text-lg">
                Credit Card
              </span>
              <div className="ml-auto flex gap-2">
                <Image
                  src="/Visa1.png"
                  alt="Visa"
                  width={100}
                  height={100}
                  className="h-[20px]"
                />
              </div>
            </label>

            {/* Credit Card Form */}
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 max-sm:w-[295]">
              <InputField
                label="Card Number"
                placeholder="Card number"
                className="bg-white "
              />
              <InputField
                label="Expiration Date"
                placeholder="DD / MM / YY"
                className="bg-white  "
              />
              <InputField
                label="Card Holder"
                placeholder="Card holder"
                className="bg-white "
              />
              <InputField
                label="CVC"
                placeholder="CVC"
                type="password"
                className="bg-white"
              />
            </div>

            {/* PayPal Option */}
            <label className="flex items-center p-4 mt-4 w-full rounded-xl border border-gray-300">
              <input
                type="radio"
                name="payment"
                className="w-5 h-5 accent-blue-500"
              />
              <span className="ml-4 text-[#1A202C] font-semibold text-lg">
                PayPal
              </span>
              <Image
                src="/paypal.png"
                alt="PayPal"
                width={100}
                height={100}
                className="ml-auto h-6"
              />
            </label>

            {/* Bitcoin Option */}
            <label className="flex items-center p-4 mt-4 w-full rounded-xl border border-gray-300">
              <input
                type="radio"
                name="payment"
                className="w-5 h-5 accent-blue-500"
              />
              <span className="ml-4 text-[#1A202C] font-semibold text-lg">
                Bitcoin
              </span>
              <Image
                src="/bitcoin.png"
                alt="Bitcoin"
                width={100}
                height={100}
                className="ml-auto h-[20px]"
              />
            </label>
          </div>
        </div>

        <div className="flex overflow-hidden text-sm flex-col p-6 mt-8 w-full bg-white rounded-xl">
          <StepHeader
            title="Confirmation"
            subtitle="We are getting to the end. Just few clicks and your rental is ready!"
            step="Step 4 of 4"
          />

          {/* Checkboxes Section */}
          <div className="flex flex-col mt-8 gap-4 ">
            <label className="flex items-center gap-4 px-6 py-4 rounded-xl bg-neutral-100">
              <input type="checkbox" className="hidden peer" />
              <div className="flex justify-center items-center w-6 h-6 border-2 border-gray-300 rounded peer-checked:border-blue-600">
                <div className="hidden w-4 h-4 bg-blue-600 rounded peer-checked:block" />
              </div>
              <span className="text-base font-semibold tracking-tight text-slate-800">
                I agree with sending marketing and newsletter emails. No
                spam, promised!
              </span>
            </label>

            <label className="flex items-center gap-4 px-6 py-4 rounded-xl bg-neutral-100">
              <input type="checkbox" className="hidden peer" />
              <div className="flex justify-center items-center w-6 h-6 border-2 border-gray-300 rounded peer-checked:border-blue-600">
                <div className="hidden w-4 h-4 bg-blue-600 rounded peer-checked:block" />
              </div>
              <span className="text-base font-semibold tracking-tight text-slate-800">
                I agree with our terms and conditions and privacy policy.
              </span>
            </label>
          </div>

          {/* Rent Now Button */}

          <Link href={"/dashboard"}>
          <button className="self-start mt-6 px-6 py-3 text-white text-base font-medium tracking-tight bg-[#3563E9] rounded-lg w-[130px] hover:bg-[#54A6FF] active:bg-[#3563E9] active:scale-95 transition-all">
            Rent Now
          </button>
          </Link>

          

          {/* Data Security Section */}
          <div className="flex items-start gap-4 mt-8 w-full">
            <div className="flex items-center justify-center w-8 h-8 bg-transparent">
              <Image
                loading="lazy"
                src="/safety.png"
                alt="tick"
                width={100}
                height={100}
                className="w-[32px] h-[32px]"
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
      </form>
    </div>

    {/* Rental Summary Section */}
    <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full max-md:order-1">
      <RentalSummary
        carName="Nissan GT - R"
        carImage="/images/tick2.png"
        rating={4}
        reviews={440}
        subtotal={80.0}
        tax={0}
        total={80.0}
      />
    </div>
  </div>
</div>

  );
};
