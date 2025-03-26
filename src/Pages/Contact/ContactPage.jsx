import React from 'react';
import { AiFillCar } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import FAQSection from '../../Components/HomePageComponent/FAQSection';
import Contact_Us from './Con_Com/Contact_Us';


function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">

            <div
                className="w-full h-[400px] bg-cover bg-center bg-no-repeat  flex items-center justify-center bg-fixed z-0 font-semibold text-[1.3rem]"
                style={{ backgroundImage: "url(/banner/Ayodhya-Travels_1920X999_3.jpg)" }}
            >

                <div className=" w-[70%] py-10 flex flex-col items-start text-white gap-2  ">
                    <h2 className=" text-[20px]  lg:text-[35px] border-b-5 border-[#e8464b] pr-10 py-2  ">Contact Us</h2>

                    {/* <button className="bg-[#e8464b] text-white rounded-lg px-5 py-2 cursor-pointer">Contact Now</button> */}

                </div>


            </div>


            {/* <ContactUs /> */}


            <div className="lg:w-[80%]  flex flex-col md:flex-row lg:flex-row gap-10  p-10">


                <div
                    className="lg:w-[50%] w-full p-5 "
                >
                    <h2 className="w-full h-fit text-[30px] font-bold font-[Poppins]">Contact with Us for
                        Your Any Help</h2>

                    <p>We offer carefully curated destinations and tours that capture the
                        true essence of location, ensuring you experience. Our attraction pass
                        save you more than buying individual tickets.
                    </p>


                    <div className=" flex flex-col gap-5 mt-5">

                        <div className="rounded-lg p-5 flex flex-row  gap-3 bg-gray-100 text-black    items-start">

                            <span className="w-[60px] h-[60px] rounded-full p-4 text-black text-[30px] bg-white">
                                <FaMapMarkerAlt />
                            </span>

                            <div className="flex flex-col items-start w-full gap-0  px-2">
                                <p className="text-[16px] mb-2 text-[#e8464b]">Our Location</p>
                                <p className="text-[18px]"> 2/5 Nati Imli,Ramanand Nager colony near by Labour Commissioner Office</p>
                               
                            </div>
                        </div>


                        <div className="rounded-lg p-5 flex flex-row  gap-3 bg-gray-100 text-black   items-start">

                            <span className="w-[60px] h-[60px] rounded-full p-4 text-black text-[30px] bg-white">
                                <FaPhoneVolume />
                            </span>

                            <div className="flex flex-col items-start w-full gap-0  px-2">
                                <p className="text-[16px] mb-2 text-[#e8464b]">Phone Number</p>
                                <p className="text-[18px]"> +91 9235171660</p>
                                
                            </div>
                        </div>


                        <div className="rounded-lg p-5 flex flex-row  gap-3 bg-gray-100 text-black    items-start">

                            <span className="w-[60px] h-[60px] rounded-full p-4 text-black text-[30px] bg-white">
                                <MdAttachEmail />
                            </span>

                            <div className="flex flex-col items-start w-full gap-0  px-2">
                                <p className="text-[16px] mb-2 text-[#e8464b]">Send Email</p>
                                <p className="text-[18px]">Support@ghoomokashi.com</p>
                               
                            </div>
                        </div>
                    </div>


                </div>

                <div className="lg:w-[50%]   shadow-lg rounded-2xl p-8 max-w-lg">


                    <h2 className="text-2xl font-bold text-gray-800 text-start mb-6">Send Your Message!</h2>
                    <p>We offer carefully curated destinations and tours that capture the true essence of location, ensuring you experience.</p>
                  

                    <Contact_Us />
                </div>



            </div>



            <div className="w-full flex items-center justify-center py-10 ">
                <FAQSection />
            </div>




            
        </div>
    );
}

export default ContactPage;
