import * as React from "react";
import { RentalSummaryProps } from "../types";
import Image from "next/image";

export const RentalSummary: React.FC<RentalSummaryProps> = ({
  carName,
  rating,
  reviews,
  subtotal,
  tax,
  total,
}) => {
  return (
    <div className="flex overflow-hidden flex-col p-6 mx-auto w-full bg-white rounded-xl">
      <div className="flex flex-col sm:max-w-full">
        <h2 className="md:text-xl text-lg font-bold tracking-tight text-gray-900">
          Rental Summary
        </h2>
        <p className="mt-1 text-sm font-medium tracking-tight leading-5 text-slate-400">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </p>
      </div>

      <div className="flex gap-4 self-start mt-8">
        <Image
          loading="lazy"
          src="/rental.png"
          alt={carName}
          height={108}
          width={132}
          className="object-contain shrink-0 max-w-full aspect-[1.22] w-[132px]"
        />
        <div className="flex overflow-hidden flex-col my-auto">
          <h3 className="text-2xl font-bold tracking-tighter text-gray-900">
            {carName}
          </h3>
          <div className="flex flex-wrap overflow-hidden gap-4 items-center mt-2 min-h-[24px]">
            <div className="flex overflow-hidden gap-0.5 items-center self-stretch my-auto">
              {[...Array(rating)].map((_, i) => (
                <Image
                  key={i}
                  loading="lazy"
                  src="/star1.png"
                  alt=""
                  height={8}
                  width={8}
                  className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                />
              ))}
              {[...Array(5 - rating)].map((_, i) => (
                <Image
                  key={i + rating}
                  loading="lazy"
                  src="/star2.png"
                  alt=""
                  height={8}
                  width={8}
                  className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                />
              ))}
            </div>
            <div className="self-stretch my-auto text-sm font-medium tracking-tight text-slate-500">
              {reviews}+ Reviewer
            </div>
          </div>
        </div>
      </div>

      <hr className="shrink-0 mt-8 h-px border border-solid border-text-[rgba(195,212,233,0.4)]" />

      <div className="flex gap-36 items-start mt-8 text-base tracking-tight whitespace-nowrap">
        <div className="font-medium  text-slate-400 w-[116px]">Subtotal</div>
        <div className="font-semibold text-right pr-0 text-gray-900 w-[116px]">
          ${subtotal.toFixed(2)}
        </div>
      </div>

      <div className="flex gap-36 items-start mt-6 text-base tracking-tight whitespace-nowrap">
        <div className="font-medium text-slate-400 w-[116px]">Tax</div>
        <div className="font-semibold text-right text-gray-900 w-[116px]">
          ${tax.toFixed(2)}
        </div>
      </div>

      <div className="flex gap-12 justify-between px-4 py-3 mt-8 rounded-xl bg-neutral-100">
        <div className="text-sm font-medium tracking-tight text-slate-400">
          Apply promo code
        </div>
        <button className="text-base font-semibold tracking-tight text-right text-[#1A202C] hover:underline-offset-1 ">
          Apply now
        </button>
      </div>

      <div className="flex max-md:gap-3 items-start mt-8">
        <div className="flex flex-col min-w-[240px] w-[284px]">
          <h4 className="text-lg font-[700px] tracking-tight text-[#1A202C]">
            Total Rental Price
          </h4>
          <p className="mt-1 text-sm font-medium tracking-tight text-slate-400">
            Overall price and includes rental discount
          </p>
        </div>
        <div className="w-32 md:text-xl font-[700px] text-right text-gray-900">
          ${total.toFixed(2)}
        </div>
      </div>
    </div>
  );
};
