import React from "react";
import Left_Img_Right_Content from "../Components/ServicesPage_Components/Left_Img_Right_Content";
import Right_Img_Left_Content from "../Components/ServicesPage_Components/Right_Img_Left_Content";
import LazyLoad from "react-lazyload";
import { useSelector } from "react-redux";
function Services_Page() {
    const { services } = useSelector((state) => state.services);

    return (
        <div className="W-full flex flex-col gap-5 bg-gray-200">
            <div
                className="w-full h-[400px] bg-cover bg-center bg-no-repeat  flex items-center justify-center bg-fixed z-0 font-semibold text-[1.3rem]"
                style={{
                    backgroundImage:
                        "url(/banner/Ayodhya-Travels_1920X999_3.jpg)",
                }}
            >
                <div className=" w-[70%] py-10 flex flex-col items-start text-white gap-2  ">
                    <h2 className="font-semibold text-[20px]  lg:text-[35px] border-b-5 border-[#e8464b] pr-10 py-2  ">
                        Our Services
                    </h2>

                    {/* <button className="bg-[#e8464b] text-white rounded-lg px-5 py-2 cursor-pointer">Contact Now</button> */}
                </div>
            </div>

            <div className="w-full flex flex-col gap-5 items-center py-10 ">
                {services?.map((item, i) =>
                    i % 2 == 0 ? (
                        <Left_Img_Right_Content item={item} key={item._id} />
                    ) : (
                        <Right_Img_Left_Content item={item} key={item._id} />
                    )
                )}
            </div>

            {/* 

      <Right_Img_Left_Content heading="Flight Booking" />

      <Left_Img_Right_Content heading="Bick Booking" />

      <Right_Img_Left_Content heading="Hotel Booking" />

      <Left_Img_Right_Content heading="Boat Booking" />

      <Right_Img_Left_Content heading="VIP Darshan" />

      <Left_Img_Right_Content heading="Tample View" />

      <Right_Img_Left_Content heading="Train Booking" />

      <Left_Img_Right_Content heading="Aarti" />

      */}
        </div>
    );
}

export default Services_Page;
