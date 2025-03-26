import React from 'react';
import { FaCommentAlt } from "react-icons/fa";
import SectionHeading from '../../../Components/Common/SectionHeading';
import LazyLoad from 'react-lazyload';

function Blog_Section() {

    const blogData = [
        {
            title: "Varanasi: Shri Vishwanath Temple, BHU Campus ",
            image: "/blog/Tr_1920x1080_blog_sec_1.1.jpg",
            description: "Varanasi, the city of temples and ghats, is a spiritual hub where history and devotion merge beautifully along the banks of the Ganges.",
            author: "Ghoomo Kashi",
            date: "2025-02-28",
            time: "10:30 AM"
        },
        {
            title: "Ayodhya: Kanak Bhawan",
            image: "/blog/Tr_1920x1080_blog_sec_4.4.jpg",
            description: "Ayodhya, one of the holiest cities in India, is famous for its ancient temples and the grand Ram Mandir.",
            author: "Ghoomo Kashi",
            date: "2025-02-27",
            time: "02:15 PM"
        },
        {
            title: "Prayagraj: Akbar Fort, Prayagraj",
            image: "/blog/Tr_1920x1080_blog_sec_3.3.jpg",
            description: "Prayagraj is renowned for the Triveni Sangam, where three sacred rivers meet, and for hosting the world's largest religious gathering, the Kumbh Mela.",
            author: "Ghoomo Kashi",
            date: "2025-02-26",
            time: "09:45 AM"
        },
        {
            title: "Prayagraj: Amar Shaheed Chandrashekhar Azad Park",
            image: "/blog/Tr_1920x1080_blog_sec_2.2.jpg",
            description: "Naimisharanya, a divine forest, is a sacred place where sages compiled Hindu scriptures, making it an important spiritual destination.",
            author: "Ghoomo Kashi",
            date: "2025-02-25",
            time: "05:30 PM"
        },
        {
            title: "Ayodhaya: Shri Hanuman Garhi Mandir Ayodhya",
            image: "/blog/Tr_1920x1080_blog_sec_5.5.jpg",
            description: "Chitrakoot is a serene and spiritual town where Lord Rama spent a significant part of his exile. It is known for its temples, ghats, and divine atmosphere.",
            author: "Ghoomo Kashi",
            date: "2025-02-24",
            time: "04:00 PM"
        },
        {
            title: "Varanasi : Ramnagar Fort",
            image: "/blog/Tr_1920x1080_blog_sec_6.6.jpg",
            description: "Mathura and Vrindavan are sacred places associated with Lord Krishna’s birth and childhood. These cities are famous for temples, festivals, and devotional culture.",
            author: "Ghoomo Kashi",
            date: "2025-02-23",
            time: "08:20 AM"
        }
    ];



    return (
        <div className="w-[full] lg:my-10   py-5 px-2 flex items-center flex-col justify-center h-[fit]">
            {/* <SectionHeading text="Blog" /> */}
            <div className=" lg:w-[80%] w-[90%] mt-5  grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-10 h-fit ">

                {/* <BlogPost />
        <BlogPost /> */}

                {
                    blogData?.map((item, i) => (
                        <BlogPost item={item} />
                    ))
                }

            </div>
        </div>
    )
}


function BlogPost({ item }) {
    return (
        <div className="w-full bg-gray-200 p-5 mt-5 rounded-lg h-fit flex flex-col gap-1 
                    shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white">
            <div className="h-fit py-2">
                <LazyLoad>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full rounded-lg cursor-pointer"
                    />
                </LazyLoad>

                <div className="flex flex-col py-2">
                    <p className="text-gray-700 text-[0.9rem]">
                        {item.author} | {item.date} | {item.time}
                    </p>
                    <h1 className="w-full text-[1rem] text-gray-700 my-2">{item.title}</h1>
                    <p className="h-full text-gray-700">{item.description}</p>
                </div>
            </div>

            <p className="border-b-2 border-[#e8464b] pr-5 w-fit capitalize font-semibold cursor-pointer 
                    transition-all duration-300 hover:text-[#e8464b]">
                Read More
            </p>
        </div>
    );
}



export default Blog_Section;