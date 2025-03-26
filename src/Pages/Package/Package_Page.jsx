import React from 'react'
import Package from './PK_Components/Package';
import TravelPackages from './PK_Components/TravelPackages';

function Package_Page() {
  return (
    <div>
      <div
        className="w-full h-[400px] bg-cover bg-center bg-no-repeat  flex items-center justify-center bg-fixed z-0 font-semibold text-[1.3rem]"
        style={{ backgroundImage: "url(/banner/Ayodhya-Travels_1920X999_3.jpg)" }}
      >

        <div className=" w-[70%] py-10 flex flex-col items-start text-white gap-2  ">
          <h2 className="font-semibold text-[20px]  lg:text-[35px] border-b-5 border-[#e8464b] pr-10 py-2  ">Our Packages</h2>

          {/* <button className="bg-[#e8464b] text-white rounded-lg px-5 py-2 cursor-pointer">Contact Now</button> */}

        </div>


      </div>


      <div className="w-full flex items-center justify-center bg-gray-100  ">
        {/* <Package /> */}
        <TravelPackages />
      </div>
     
    </div>
  )
}

export default Package_Page;