"use client";
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
    <div className="lg:w-[45%] w-full px-8 py-3 rounded-md shadow-md bg-white">
      <div className="flex gap-4">
        <input 
          type="radio" 
          checked={isPickUp}
          className="accent-blue"
          onChange={() => setIsPickUp(!isPickUp)} 
        />
        <h1 className="font-bold">Pick - Up</h1>
      </div>

      <div className={`flex flex-col md:flex-row gap-4 text-slate-400 ${isPickUp ? "opacity-100" : "opacity-60 pointer-events-none"}`}>
        <div className="flex-1">
          <label className="font-bold text-slate-400">Locations</label>
          <select 
            disabled={!isPickUp} 
            className="w-full p-3 bg-[#F6F7F9] rounded-lg mt-1 box-border">
            <option value="">Select your Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="font-bold text-slate-400">Date</label>
          <input 
            disabled={!isPickUp} 
            type="date" 
            className="w-full p-3 bg-[#F6F7F9] rounded-lg mt-1 box-border" 
          />
        </div>

        <div className="flex-1">
          <label className="font-bold text-slate-400">Time</label>
          <input 
            disabled={!isPickUp} 
            type="time" 
            className="w-full p-3 bg-[#F6F7F9] rounded-lg mt-1 box-border" 
          />
        </div>
      </div>
    </div>
  );
};

export default Pickup;
