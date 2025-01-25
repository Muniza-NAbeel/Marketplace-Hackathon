'use client'

import RecommendationCars from "@/components/RecommendationCars";
import Sidebar from "@/components/SideBar";

export default function Categories() {
  return (
    <>
      <section className="overflow-hidden pr-8 bg-neutral-100 max-md:pr-5">
        <div className="grid grid-cols-4 gap-5 max-md:flex max-md:flex-col h">
          {/*==========>>>>>>>> Sidebar <<<<<<<<<<====== */}

          <div className="col-span-1 ">
            <div className="hidden md:flex flex-col overflow-hidden items-start px-8 pt-8 bg-white border-r border-solid border-r-gray-100 h-[1500px] max-md:px-5 max-md:pb-24 max-md:mt-8">
            <Sidebar/>
            </div>
            
          </div>

          {/*============>>>>>> Main Content <<<<<<<<<<========= */}

          <div className="col-span-3 flex flex-col gap-8 mt-6 ">
           

            {/* Recommendation Cars */}
            <div>
              <RecommendationCars showHeading={false} cardsPerRow={3} limit={6}/>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
