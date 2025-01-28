'use client';
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { CiSearch, CiSliderHorizontal } from "react-icons/ci";
import Link from "next/link";


export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter(); 

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      router.push(`/categories?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="relative md:ml-[202px] flex items-center mt-4 md:mt-0 w-full md:w-auto">
        <Link href="/categories" className="absolute left-4 text-[#C3D4E9] text-xl md:text-3xl" >
        <CiSliderHorizontal />

        </Link>

      <input
        type="text"
        placeholder="Search cars here"
        className="border-[1px] border-secondary rounded-[70px] ml-2 w-full md:w-[492px] h-[40px] md:h-[44px] px-12 py-2 text-sm focus:outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="absolute right-3 text-[#C3D4E9]"
        onClick={handleSearch}
      >
              <CiSearch className="text-xl md:text-3xl " />

      </button>
    </div>
  );
}
