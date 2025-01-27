"use client"
import React, { useState } from 'react';

const Pickup = () => {
  const [isPickUp, setIsPickUp] = useState(false);

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
    "Tariq Road"
  ];

  return (
    <div className='lg:w-[45%] px-8 py-3 rounded-md shadow-md bg-white'>
      <div className='flex gap-4'>
        <input 
          type="radio" 
          checked={isPickUp}
          onChange={() => setIsPickUp(!isPickUp)}
        />
        <h1 className='font-bold'>Pick - Up</h1>
      </div>

      <div className={`justify-center md:flex md:justify-between mt-2 gap-3 ${isPickUp ? "opacity-100" : "opacity-50 pointer-events-none"}`}>
        <div>
          <label className='font-bold'>Locations</label>
          <select disabled={!isPickUp} className='w-full p-3 bg-[#F6F7F9] rounded-lg mt-1'>
            <option value="">Select your Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <label className='font-bold'>Date</label>
          <div className='flex items-center justify-between'>
            <input disabled={!isPickUp} type="date" className='w-full p-3 bg-[#F6F7F9] rounded-lg mt-1' />
          </div>
        </div>

        <div>
          <label className='font-bold'>Time</label>
          <div className='flex items-center justify-between'>
            <input disabled={!isPickUp} type="time" className='w-full p-3 bg-[#F6F7F9] rounded-lg mt-1' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pickup;