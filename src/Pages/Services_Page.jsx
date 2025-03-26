import React from 'react'
import Left_Img_Right_Content from '../Components/ServicesPage_Components/Left_Img_Right_Content';
import Right_Img_Left_Content from '../Components/ServicesPage_Components/Right_Img_Left_Content';
import LazyLoad from 'react-lazyload';

function Services_Page() {

  const data = [
    {
      id: 1,
      title: "Hotel Booking",
      imgSrc: "/services/Tr_1080x1080_services_page_1_.jpg",
      content: "Experience comfort and convenience with our hassle-free hotel booking services. Whether you're looking for luxury, budget-friendly stays, or accommodations near holy sites, we provide the best options tailored to your needs."
    },
    {
      id: 2,
      title: "Car Booking",
      imgSrc: "/services/Tr_1080x1080_services_page_10_.jpg",
      content: "Reliable and safe transportation at your fingertips. Our cab booking services ensure a seamless journey, whether it’s a short ride to a nearby attraction or a long-distance trip."
    },
    {
      id: 3,
      title: "Bus Booking",
      imgSrc: "/services/Tr_1080x1080_services_page_11_.jpg",
      content: "Travel affordably and comfortably with our bus booking services. We offer convenient ticketing options for intercity and pilgrimage travel, ensuring a smooth experience."
    },
    
    {
      id: 4,
      title: "Train Booking",
      imgSrc: "/services/Tr_1080x1080_services_page_3_.jpg",
      content: "Plan your train journey with ease. Get hassle-free reservations and secure the best seats for your travel, whether for pilgrimage, leisure, or business trips."
    },
    {
      id: 5,
      title: "Boat Booking",
      imgSrc: "/services/Tr_1080x1080_services_page_2_.jpg",
      content: "Comfortable and well-maintained boats for all group sizes. Special packages for Ganga Aarti and scenic river cruises. Safe and reliable services with experienced boatmen. Flexible options for private or shared bookings.."
    },
    {
      id: 6,
      title: "Flight Booking",
      imgSrc: "/services/Tr_1080x1080_services_page_4_.jpg",
      content: "Book domestic and international flights effortlessly. We offer competitive prices and seamless booking options to make your air travel stress-free."
    },
    {
      id: 7,
      title: "VIP Darshan Booking",
      imgSrc: "/services/Tr_1080x1080_services_page_5_.jpg",
      content: "Skip the queues and experience divine blessings. Our VIP Darshan service provides priority access to temples and holy sites, ensuring a smooth spiritual journey."
    },
    {
      id: 8,
      title: "Aarti Booking",
      imgSrc: "/services/Tr_1080x1080_services_page_6_.jpg",
      content: "Witness the grandeur of spiritual ceremonies. Reserve your spot for mesmerizing Ganga Aarti and other religious rituals at prime locations."
    },
    {
      id: 9,
      title: "Tample View Booking",
      imgSrc: "/services/Tr_1080x1080_services_page_7_.jpg",
      content: "Stay close to divine serenity. Book accommodations with breathtaking temple views and enjoy a peaceful, spiritual experience."
    }
  ]


  return (
    <div className="W-full flex flex-col gap-5 bg-gray-200">
      <div
        className="w-full h-[400px] bg-cover bg-center bg-no-repeat  flex items-center justify-center bg-fixed z-0 font-semibold text-[1.3rem]"
        style={{ backgroundImage: "url(/banner/Ayodhya-Travels_1920X999_3.jpg)" }}
      >

        <div className=" w-[70%] py-10 flex flex-col items-start text-white gap-2  ">
          <h2 className="font-semibold text-[20px]  lg:text-[35px] border-b-5 border-[#e8464b] pr-10 py-2  ">Our Services</h2>

          {/* <button className="bg-[#e8464b] text-white rounded-lg px-5 py-2 cursor-pointer">Contact Now</button> */}

        </div>


      </div>


      <div className="w-full flex flex-col gap-5 items-center py-10 ">
        {
          data?.map((item, i) => (
            i % 2 == 0 ? (
              <Left_Img_Right_Content item={item} />
            )
              :
              (
                <Right_Img_Left_Content item={item} />
              )
          ))
        }
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
  )
}

export default Services_Page;
