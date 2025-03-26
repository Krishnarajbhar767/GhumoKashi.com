import React from 'react';
import { FaCommentAlt } from "react-icons/fa";
import SectionHeading from '../Common/SectionHeading';
import LazyLoad from 'react-lazyload';

function Blog() {


  const blogData = [
    {
      title: "Varanasi: Shri Vishwanath Temple, BHU Campus ",
      image: "/blog/Tr_1920x1080_blog_sec_1.svg",
      description: "Varanasi, the city of temples and ghats, is a spiritual hub where history and devotion merge beautifully along the banks of the Ganges.",
      author: "Ghoomo Kashi",
      date: "2025-02-28",
      time: "10:30 AM"
    },
    {
      title: "Ayodhya: Kanak Bhawan",
      image: "/blog/Tr_1920x1080_blog_sec_4.svg",
      description: "Ayodhya, one of the holiest cities in India, is famous for its ancient temples and the grand Ram Mandir.",
      author: "Ghoomo Kashi",
      date: "2025-02-27",
      time: "02:15 PM"
    },
    {
      title: "Prayagraj: Akbar Fort, Prayagraj",
      image: "/blog/Tr_1920x1080_blog_sec_3.svg",
      description: "Prayagraj is renowned for the Triveni Sangam, where three sacred rivers meet, and for hosting the world's largest religious gathering, the Kumbh Mela.",
      author: "Ghoomo Kashi",
      date: "2025-02-26",
      time: "09:45 AM"
    }
    
  ];


  
  return (
    <div className="w-[full]  py-5 px-2 flex items-center flex-col justify-center h-[fit]">
      <SectionHeading text="Blog" />
      <div className=" lg:w-[80%] w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 h-fit ">
        
        {/* <BlogPost />
        <BlogPost /> */}

        {
          blogData?.map((item, i)=> (
            <BlogPost item={item} />
          ))
        }
        
      </div>
    </div>
  )
}


function BlogPost({ item }) {
  return (
    <div className="w-full bg-gray-200 p-5 my-5 rounded-lg h-fit flex flex-col gap-1 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white">
      <div className="h-fit py-2">
        <LazyLoad>
          <img
            src={item.image}
            alt={item.title}
            className="w-full rounded-lg cursor-pointer"
          />
        </LazyLoad>
        
        <div className="flex flex-col py-2">
          <p className="text-gray-700 text-[0.9rem] font-semibold">
            {item.author} | {item.date} | {item.time}
          </p>
          <h1 className="w-full text-[1rem] font-semibold text-gray-700 my-2">{item.title}</h1>
          <p className="h-full text-gray-700 text-[15px]">{item.description}</p>
        </div>
      </div>

      <p className="border-b-2 border-[#e8464b] pr-5 w-fit capitalize font-semibold cursor-pointer transition-all duration-300 hover:text-[#e8464b]">
        Read More
      </p>
    </div>
  );
}



export default Blog;