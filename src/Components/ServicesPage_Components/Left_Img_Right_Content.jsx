import React from 'react';
import ImageSection from './ImageSection';
import Content from './Content';
import { useNavigate } from "react-router-dom";
import LazyLoad from 'react-lazyload';

function Left_Img_Right_Content({ item }) {
  const navigate = useNavigate();

  return (
    <div className="flex lg:h-[400px] h-fit  flex-col items-center justify-around lg:flex-row md:flex-row  gap-5 w-[80%]  ">
      {/* <ImageSection /> */}
      {/* <Content /> */}


      <div className="lg:w-[30%] md:w-[fit] w-[100%] h-[350px] flex   ">
        <LazyLoad>
          <img className=" rounded-lg " src={item.imgSrc} alt="ghat" />
        </LazyLoad>
       
      </div>

      <div className="lg:py-5 md:py-8 py-5 px-5 lg:w-[60%] md:w-[50%] w-[100%]  bg-white lg:pl-10 pl-2 rounded-lg ">
        {/* <h2 className="text-[25px] font-semibold font-[Poppins]">{item.id}</h2> */}
        <h2 className="text-[30px] font-semibold font-[Poppins]"> <span className="font-semibold">{item.id}</span> | {item.title}</h2>
        <p className="text-[18px] text-gray-400">|</p>
        <p className="pr-5 lg:text-[20px] text-[18px] w-[90%] lg:w-[80%] ">
          {item.content}
        </p>

        <button 
          onClick={() => navigate("/contact")}
          className="px-5 py-2 bg-red-500 text-white rounded-lg mt-5 cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default Left_Img_Right_Content;