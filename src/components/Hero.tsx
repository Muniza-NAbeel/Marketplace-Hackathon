import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div
            className="bg-blue-100 p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/bl.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
             <h2 className="text-white text-2xl mb-4 font-[600] text-[32px] leading-[48px] tracking-[-3%]">
          The Best Platform <br />
          for Car Rental
        </h2>
        <p className="font-[500] text-white text-[16px] leading-[24px] tracking-[-2%]">
          Ease of doing a car rental safely and <br /> reliably, of course at a
          low price.
        </p>
        <button className="mt-4 bg-[#3563E9] text-white w-[120px] h-[44px] rounded-[4px] px-[20px] gap-[8px]">
          Rental Car
        </button>
            <Image
              src="/heroone.png"
              alt="Car"
              height={600}
              width={600}
              className="mt-4 w-full max-w-[440px] mx-auto object-cover"
            />
          </div>

          {/* Right Card */}
          <div
            className="bg-blue-200 p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/br.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="font-[600] text-[#FFFFFF] text-[32px] leading-[48px] tracking-[-3%] mb-4">
          Easy way to rent a <br /> car at a low price
        </h2>
        <p className="font-[500] text-[16px] text-[#FFFFFF] leading-[24px] tracking-[-2%]">
          Providing cheap car rental services <br /> and safe and comfortable
          facilities.
        </p>
        <button className="mt-4 bg-[#54A6FF] text-white w-[120px] h-[44px] rounded-[4px] px-[20px] gap-[8px]">
          Rental Car
        </button>
            <Image
              src="/herotwo.png"
              alt="Car"
              height={500}
              width={500}
              className="mt-4 w-full max-w-[340px] mx-auto object-cover"
            />
          </div>
        </div>

         {/* Booking Section */}
         <div className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
          {/* Pick-Up Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div>
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600">
              ↔
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Drop-Off</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
