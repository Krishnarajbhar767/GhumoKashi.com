import React from 'react';
import LazyLoad from 'react-lazyload';

import { useNavigate } from "react-router-dom";

function Right_Img_Left_Content({ item }) {
    const navigate = useNavigate();

    return (
        <div className="flex lg:h-[400px]  h-fit  flex-col items-center justify-around lg:flex-row md:flex-row  gap-5 w-[80%]    ">
            {/* <ImageSection /> */}
            {/* <Content /> */}

            <div className="lg:py-5  md:py-8 py-5 lg:w-[60%] md:w-[50%] w-[full] bg-white lg:pl-10 pl-2 rounded-lg ">
                {/* <h2 className="text-[25px] font-semibold font-[Poppins]">{item.id}</h2> */}
                <h2 className="text-[30px] font-bold font-[Poppins]"><span className="font-semibold">{item.id}</span> | {item.title}</h2>
                <p className="text-[18px] text-gray-400">|</p>
                <p className="pr-5 lg:text-[20px] text-[16px] w-[90%] lg:w-[80%] ">
                    {item.content}
                </p>

                <button
                    onClick={() => navigate("/contact")}
                    className="px-5 py-2 bg-red-500 text-white rounded-lg mt-5 cursor-pointer"
                >
                    Book Now
                </button>

            </div>

            <div className="lg:w-[30%] md:w-[fit] w-[100%] h-[350px] flex   ">
                <LazyLoad>
                    <img className=" rounded-lg " src={item.imgSrc} alt="ghat" />
                </LazyLoad>

            </div>
        </div>
    )
}

export default Right_Img_Left_Content