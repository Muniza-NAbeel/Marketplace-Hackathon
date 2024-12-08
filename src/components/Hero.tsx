import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-6">
      <div className="bg-[repeating-radial-gradient(circle,_#54A6FF_0px,_#54A6FF_60px,__40px,_#65AFFF_80px)] text-white p-6 max-w-[600px] h-[360px] mt-[32px] ml-[34px] rounded-[10px] bg-[position:right_bottom] bg-[size:100%_200%]">
        <h2 className="text-2xl mb-4 font-[600] text-[32px] leading-[48px] tracking-[-3%]">
          The Best Platform <br />
          for Car Rental
        </h2>
        <p className="font-[500] text-[16px] leading-[24px] tracking-[-2%]">
          Ease of doing a car rental safely and <br /> reliably, of course at a
          low price.
        </p>
        <button className="mt-4 bg-[#3563E9] text-blue-500 w-[120px] h-[44px] rounded-[4px] px-[20px] gap-[8px]">
          Rental Car
        </button>
        <Image
          src="/heroone.png"
          alt="Car"
          className="absolute top-[380px] left-[200px]"
          width={390}
          height={108}
        />
      </div>
      <div className="bg-[#3563E9] bg-[repeating-linear-gradient(45deg,_#3563E9_0px,_#3563E9_20px,_#4A78FF_20px,_#4A78FF_40px)] text-white p-6 max-w-[600px] h-[360px] mt-[32px] ml-[34px] rounded-[10px]">
        <h2 className="font-[600] text-[32px] leading-[48px] tracking-[-3%] mb-4">
          Easy way to rent a <br /> car at a low price
        </h2>
        <p className="font-[500] text-[16px] leading-[24px] tracking-[-2%]">
          Providing cheap car rental services <br /> and safe and comfortable
          facilities.
        </p>
        <button className="mt-4 bg-[#54A6FF] text-white w-[120px] h-[44px] rounded-[4px] px-[20px] gap-[8px]">
          Rental Car
        </button>
        <Image
          src="/herotwo.png"
          alt="Car"
          width={340}
          height={108}
          className="absolute top-[380px] left-[892px]"
        />
      </div>
    </div>
  );
}
