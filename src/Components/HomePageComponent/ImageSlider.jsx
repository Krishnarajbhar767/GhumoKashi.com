import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../Common/Navbar";
import LazyLoad from 'react-lazyload';

const ImageSlider = () => {
    const images = [
        {
            id: 1,
            imgSrc: "./Scroller/_DSC5739.1.jpg",
            subTitle: "Explore The Spiritual World",
            title: " A Spiritual Symphony of Light & Devotion",
            content: "Tour Travels offers unforgettable journeys across Varanasi, Prayagraj, Chitrakoot, Gaya, Ayodhya, Sarnath, and Naimisharanya. Tailored packages to suit every budget and timeline, ensuring seamless, memorable experiences."
        },
        // {
        //     id: 2,
        //     imgSrc: "./blog/Tr_1920x1080_blog_sec_7.svg",
        //     subTitle: "Explore The Spiritual World",
        //     title: "Shri Vishwanath Temple, BHU Campus ",
        //     content: "Tour Travels offers unforgettable journeys across Varanasi, Prayagraj, Chitrakoot, Gaya, Ayodhya, Sarnath, and Naimisharanya. Tailored packages to suit every budget and timeline, ensuring seamless, memorable experiences."
        // },
        // {
        //     id: 3,
        //     imgSrc: "./blog/Tr_1920x1080_blog_sec_8.svg",
        //     subTitle: "Explore The Spiritual World",
        //     title: "A Journey to Buddha’s First Sermon",
        //     content: "Tour Travels offers unforgettable journeys across Varanasi, Prayagraj, Chitrakoot, Gaya, Ayodhya, Sarnath, and Naimisharanya. Tailored packages to suit every budget and timeline, ensuring seamless, memorable experiences."
        // }
    ];

    return (
        <div className="w-[full] lg:h-screen h-[70vh] z-2 ">
            {/* <Navbar /> */}

            {/* <video className="w-[full] h-[60vh]" src="/Scroller/Tr_1920x600_vdo_banner_sec" autoplay="true" /> */}

            {/* <video width="250" height="700">
                <source
                    src="/Scroller/Tr_1920x600_vdo_banner_sec"
                    type="video/mp4"
                />
            </video> */}

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className=" w-full lg:h-screen h-[70vh]"
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index} className="relative">

                        {/* Background Image */}
                        <LazyLoad>
                            <img
                                src={item.imgSrc}
                                alt={`Slide ${index + 1}`}
                                className="w-full lg:h-screen h-[90vh] object-cover"
                            />
                        </LazyLoad>
                        

                        {/* Glassmorphism Text Container */}
                        <div className="absolute h-fit lg:top-135 top-75  inset-0 flex items-center justify-center">
                            <div className="lg:w-[60%] w-[90%] h-[20vh] flex items-center justify-center p-8 lg:p-12  text-left flex-col lg:gap-10 gap-3">

                                {/* Subtitle */}
                                {/* <h2 className="text-[14px] text-white md:text-2xl lg:text-[20px] font-bold">
                                    {item.subTitle}
                                </h2> */}

                                {/* Title with Glass UI Effect */}
                                <h2 className="text-[20px] text-center md:text-2xl lg:text-[40px]   text-white drop-shadow-md">
                                    {item.title}
                                </h2>


                                {/* Description */}
                                {/* <p className="text-white text-sm md:text-lg lg:text-xl opacity-90 ">
                                    {item.content}
                                </p> */}

                                {/* CTA Button with Glass Effect */}
                                <div className="w-full flex items-center justify-center">
                                    <button
                                        onClick={() => navigate("/contact")}
                                        className="bg-[#e8464b]/90 hover:bg-[#e8464b9d] text-white lg:px-10 px-2 mx-2 py-3 rounded-lg font-semibold cursor-pointer w-fit uppercase shadow-md transition duration-300"
                                    >
                                        Explore Destination
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;
