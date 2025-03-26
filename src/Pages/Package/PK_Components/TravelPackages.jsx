import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ImWhatsapp } from "react-icons/im";

const travelPackages = [
    {
        _id: "65d9f8cfc9e3a452a4b6d123",
        id: 1,
        name: "Kashi Ayodhya Prayagraj and Gaya Travel –  6 Night 7 Days",
        details: "Kashi Ayodhya Naimisharanya Prayag Gaya Tour",
        duration: "6 Nights 7 Days",
        people: "1 People",
        destinations: [
            "2N Varanasi ",
            "2N Ayodhya ",
            "1N Prayagraj (Prayag) ",
            "1N Gaya ",
        ],
        days: [
            {
                day: "Day – 1 Arrival at Railway station or Airport",
                content: [
                    "Arrive at Varanasi Airport or Railway station and meet our representative outside the exit gate of the arrival hall and transfer to the Hotel. Assistance during check-in at Hotel.",
                    "After taking a rest around 3 PM will start a city tour of famous & ancient Temples of Varanasi including Kashi Vishwanath temple, &Kalbhairav followed by world famous Ganga Aarti at Ganges Ghat.",
                ],
            },
            {
                day: "Day – 2 Varanasi – Prayagraj- Varanasi",
                content: [
                    "After breakfast transfer to sangam city prayagraj, It’s around 4 hrs journey by road to reach sangam city.",
                    "Prayagraj- A pleasant city and a major pilgrimage centre for Hindus. Prayagraj a Sangam- where three rivers (Yamuna, Ganges and Saraswati) meet. A dip at Sangam is believed to clean one of all their sins.",
                    "Evening back to Varanasi overnight stay at hotel",
                ],
            },
            {
                day: "Day 3 Varanasi – Ayodhya",
                content: [
                    "Full day local sightseeing of Ayodhya City. It is on the banks of the Saryu River, Ayodhya, is believed to be the Birth Place of Lord Rama .Ayodhya during ancient times was known as Kosaladesa. Remnants of Hinduism, Buddhism ,Jainism and Islam can still be found in Ayodhya According to Jain belief, five tirthankaras were born at Ayodhya, including Adinath (Rishabhadeva), the 1st tirthankar.",
                    "Later visit Hanuman Garhi , Kanak Bhawan , Ramkatha Museum & Ram Janmabhoomi",
                ],
            },
            {
                day: "Day – 4 Varanasi City Tour",
                content: [
                    "Early in the morning, we will be taken for a boat ride on the Ganges. It is a mystical and spiritual experience as you watch people offering water to the Sun God and devotees taking holy dip in the Ganges. We will visit all the famous Ghats of Varanasi via boat.Come back to the hotel for the breakfast.",
                    "Later visit the Bharat Mata temple, SankatMochan(Hanuman temple) , ManasMandir, BHU.& An excursion to Sarnath. Sarnath is the place where Buddha delivered his first sermon to his disciples . The attractions at Sarnath are the Buddha temples, the Dhamekhastupa ,Chaukhandi stupa and the archaeological museum .",
                    "Night stay in Varanasi.",
                ],
            },
            {
                day: "Day 6 Varanasi – Gaya – Bodhgaya",
                content: [
                    "After breakfast at Hotel, checkout & drive to Gaya – Gaya is famous as the Homage City of India. Since ancient times people have visited here from different parts of India for Death Rituals to give ultimate peace to their loved ones. Mostly pilgrims perform Shraddha (Death Anniversary Rituals) at Vishnupad Temple in Gaya, PitruDoshaNivarana Puja (Malefic Effects of ancestors) and PindDaan (Death Rituals).",
                    "Evening transfer to Bodhgaya for night Stay.",
                ],
            },
            {
                day: "Day 7 Bodhgaya City Tour – Varanasi",
                content: [
                    "After breakfast at the hotel will proceed for full day city tour of Bodhgaya -The most sacred place for Buddhists as it has a Peepal tree under which This is where, the Prince Gautama attained enlightenment under the sacred Asvatta tree (Bodhi tree) and become known as the Buddha",
                    "Later visits begin the sightseeing tour of Bodhgaya visiting Mahabodhi Temple – located at the place of Lord Buddha’s enlightenment. Also the Bodhi Tree.",
                    "Bodhgaya Archaeological Museum – houses a small collection of Buddhist sculpture from the 1st century B.C, to the 11th century A.D; Jagannath Temple close by has a four armed statue of Shiva in black stone.",
                    "Evening Around 5 Pm transfer to Varanasi.",
                    "Overnight Stay at Hotel",
                ],
            },
            {
                day: "Day 8 Departure",
                content: [
                    "After breakfast check out from the hotel & transfer to schedule departure destination.",
                    "Thank You looking forward to serve you again in your upcoming trip to varanasi",
                ],
            },
        ],
        highlights: [
            "Ganga Aarti at Dashashwamedh Ghat",
            "Visit Kashi Vishwanath Temple",
            "Ram Janmabhoomi Darshan",
            "Triveni Sangam in Prayagraj",
        ],
        includes: [
            "Accommodation in 3-star hotels",
            "Daily breakfast & dinner",
            "Private AC vehicle",
            "Local guide services",
        ],
        excludes: [
            "Airfare/Train tickets",
            "Personal expenses",
            "Entrance fees at monuments",
        ],
        price: [{ basePrice: 21999 }, { discount: 0 }, { finalPrice: 21999 }],
        image: "/packages/public.avif",
        bookingLink: "https://example.com/book/varanasi-ayodhya",
        status: "active",
        createdBy: "65d9f8cfc9e3a452a4b6d999",
        createdAt: "2025-02-18T10:00:00.000Z",
        updatedAt: "2025-02-19T15:30:00.000Z",
    },
    {
        _id: "65d9f8cfc9e3a452a4b6d124",
        id: 2222,
        name: "Religious Kashi Ayodhya and Prayagraj 5 Nights 4 Days",
        details: "Varanasi Tour Packages",
        duration: "5 Nights 4 Days",
        people: "1 People",
        destinations: ["2N Varanasi", "2N Ayodhya", "1N Prayagraj "],
        days: [
            {
                day: "Day 01: Arrival Varanasi (Airport/ Railway station)",
                content: [
                    "Arrive at Varanasi Airport or Railway station and meet our representative outside the exit gate of the arrival hall and transfer to the Hotel. Assistance during check-in at Hotel.",
                    "After taking a rest around 3 PM will start a city tour of famous & ancient Temples of Varanasi including Kashi Vishwanath temple, &Kalbhairav followed by world famous Ganga Aarti at Ganges Ghat.",
                    "Overnight Stay in a Hotel.",
                ],
            },
            {
                day: "Day 2 Varanasi City Tour",
                content: [
                    "Early in the morning, we will be taken for a boat ride on the Ganges. It is a mystical and spiritual experience as you watch people offering water to the Sun God and devotees taking holy dip in the Ganges. We will visit all the famous Ghats of Varanasi via boat.Come back to the hotel for the breakfast.",
                    "Later visit the Bharat Mata temple, SankatMochan(Hanuman temple) , ManasMandir, BHU.& An excursion to Sarnath. Sarnath is the place where Buddha delivered his first sermon to his disciples . The attractions at Sarnath are the Buddha temples, the Dhamekhastupa ,Chaukhandi stupa and the archeological museum.",
                    "In the evening, leisure time for shopping in Varanasi (world famous Banarasi Saree &Banarasi Pan with local food) Night stay in Varanasi.",
                ],
            },
            {
                day: "Day 3 Varanasi – Ayodhya-Varanasi",
                content: [
                    "After early breakfast, we proceeded to Ayodhya .",
                    "Full day local sightseeing of Ayodhya City. It is on the banks of the Saryu River, Ayodhya, is believed to be the Birth Place of Lord Rama .Ayodhya during ancient times was known as Kosaladesa. Remnants of Hinduism, Buddhism ,Jainism and Islam can still be found in Ayodhya.",
                    "According to Jain belief, five tirthankaras were born at Ayodhya, including Adinath (Rishabhadeva), the 1st tirthankar.",
                    "Later visit Hanuman Garhi , Kanak Bhawan , Ramkatha Museum & Ram Janmabhoomi Evening return back to varanasi",
                ],
            },
            {
                day: "Day 4 Varanasi – Prayagraj- Varanasi",
                content: [
                    "After breakfast transfer to sangam city prayagraj, It’s around 4 hrs journey by road to reach sangam city.",
                    "Prayagraj- A pleasant city and a major pilgrimage center for Hindus. Prayagraj a Sangam- where three rivers (Yamuna, Ganges and Saraswati) meet. A dip at Sangam is believed to clean one of all their sins.",
                    "Evening back to Varanasi overnight stay at hotel",
                    "Later visit Hanuman Garhi , Kanak Bhawan , Ramkatha Museum & Ram Janmabhoomi Evening return back to varanasi",
                ],
            },
            {
                day: "Day 5 Departure",
                content: [
                    "After breakfast check out from the hotel & transfer to schedule departure destination.",
                    "Thank You looking forward to serve you again in your upcoming trip to varanasi",
                ],
            },
        ],
        highlights: [
            "Evening Ganga Aarti",
            "Visit Kashi Vishwanath Temple",
            "Explore Sarnath",
            "Darshan at Sankat Mochan Hanuman Temple",
        ],
        includes: [
            "Accommodation in 3-star hotels",
            "Daily breakfast & dinner",
            "AC transportation",
            "Local sightseeing guide",
        ],
        excludes: [
            "Train/Airfare",
            "Monument entry tickets",
            "Personal expenses",
        ],
        price: [{ basePrice: 12499 }, { discount: 0 }, { finalPrice: 12499 }],
        image: "/packages/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg",
        bookingLink: "https://example.com/book/varanasi-pilgrimage",
        status: "active",
        createdBy: "65d9f8cfc9e3a452a4b6d999",
        createdAt: "2025-02-18T10:00:00.000Z",
        updatedAt: "2025-02-19T15:30:00.000Z",
    },
    {
        _id: "65d9f8cfc9e3a452a4b6d125",
        id: 3,
        name: "Kashi Ayodhya Prayagraj and Gaya Travel – 7 Nights 8 Days",
        details: " Varanasi Tour Packages",
        duration: "7 Nights 8 Days",
        people: "1 People",
        destinations: ["1N Varanasi", "2N Ayodhya", "2N Prayagraj", "2N Gaya"],
        days: [
            {
                day: "Day – 1 Arrival at Railway station or Airport",
                content: [
                    "Arrive at Varanasi Airport or Railway station and meet our representative outside the exit gate of the arrival hall and transfer to the Hotel. Assistance during check-in at Hotel.",
                    "After taking a rest around 3 PM will start a city tour of famous & ancient Temples of Varanasi including Kashi Vishwanath temple, &Kalbhairav followed by world famous Ganga Aarti at Ganges Ghat.",
                    "Overnight Stay in a Hotel.",
                ],
            },
            {
                day: "Day – 2 Varanasi – Prayagraj- Varanasi",
                content: [
                    "After breakfast transfer to sangam city prayagraj, It’s around 4 hrs journey by road to reach sangam city.",
                    "Prayagraj- A pleasant city and a major pilgrimage centre for Hindus. Prayagraj a Sangam- where three rivers (Yamuna, Ganges and Saraswati) meet. A dip at Sangam is believed to clean one of all their sins.",
                    "Evening back to Varanasi overnight stay at hotel",
                ],
            },
            {
                day: "Day 3 Varanasi – Ayodhya",
                content: [
                    "After early breakfast, we proceeded to Ayodhya.",
                    "Full day local sightseeing of Ayodhya City. It is on the banks of the Saryu River, Ayodhya, is believed to be the Birth Place of Lord Rama .Ayodhya during ancient times was known as Kosaladesa. Remnants of Hinduism, Buddhism ,Jainism and Islam can still be found in Ayodhya According to Jain belief, five tirthankaras were born at Ayodhya, including Adinath (Rishabhadeva), the 1st tirthankar.",
                    "Later visit Hanuman Garhi , Kanak Bhawan , Ramkatha Museum & Ram Janmabhoomi",
                ],
            },
            {
                day: "Day – 4 Varanasi City Tour",
                content: [
                    "Early in the morning, we will be taken for a boat ride on the Ganges. It is a mystical and spiritual experience as you watch people offering water to the Sun God and devotees taking holy dip in the Ganges. We will visit all the famous Ghats of Varanasi via boat.Come back to the hotel for the breakfast",
                    "Later visit the Bharat Mata temple, SankatMochan(Hanuman temple) , ManasMandir, BHU.& An excursion to Sarnath. Sarnath is the place where Buddha delivered his first sermon to his disciples . The attractions at Sarnath are the Buddha temples, the Dhamekhastupa ,Chaukhandi stupa and the archaeological museum .",
                    "Night stay in Varanasi.",
                ],
            },
            {
                day: "Day 6 Varanasi – Gaya – Bodhgaya",
                content: [
                    "After breakfast at Hotel, checkout & drive to Gaya – Gaya is famous as the Homage City of India. Since ancient times people have visited here from different parts of India for Death Rituals to give ultimate peace to their loved ones. Mostly pilgrims perform Shraddha (Death Anniversary Rituals) at Vishnupad Temple in Gaya, PitruDoshaNivarana Puja (Malefic Effects of ancestors) and PindDaan (Death Rituals).",
                    "Evening transfer to Bodhgaya for night Stay.",
                ],
            },
            {
                day: "Day 7 Bodhgaya City Tour – Varanasi",
                content: [
                    "After breakfast at the hotel will proceed for full day city tour of Bodhgaya -The most sacred place for Buddhists as it has a Peepal tree under which This is where, the Prince Gautama attained enlightenment under the sacred Asvatta tree (Bodhi tree) and become known as the Buddha",
                    "Later visits begin the sightseeing tour of Bodhgaya visiting Mahabodhi Temple – located at the place of Lord Buddha’s enlightenment. Also the Bodhi Tree.",
                    "Bodhgaya Archaeological Museum – houses a small collection of Buddhist sculpture from the 1st century B.C, to the 11th century A.D; Jagannath Temple close by has a four armed statue of Shiva in black stone.",
                    "Evening Around 5 Pm transfer to Varanasi.",
                    "Overnight Stay at Hotel",
                ],
            },
            {
                day: "Day 8 Departure",
                content: [
                    "After breakfast check out from the hotel & transfer to schedule departure destination.",
                    "Thank You looking forward to serve you again in your upcoming trip to varanasi",
                ],
            },
        ],
        highlights: [
            "Visit Kashi Vishwanath Temple",
            "Sarnath Buddhist Site",
            "Evening Ganga Aarti",
        ],
        includes: [
            "1-night hotel stay",
            "Daily breakfast",
            "AC vehicle for sightseeing",
        ],
        excludes: ["Train/Airfare", "Personal expenses", "Entrance fees"],
        price: [{ basePrice: 7999 }, { discount: 0 }, { finalPrice: 7999 }],
        image: "/banner/Tr_1920-x-1080Home-Section-Bannee.1.jpg",
        bookingLink: "https://example.com/book/varanasi-2-days",
        status: "active",
        createdBy: "65d9f8cfc9e3a452a4b6d999",
        createdAt: "2025-02-18T10:00:00.000Z",
        updatedAt: "2025-02-19T15:30:00.000Z",
    },
    {
        _id: "65d9f8cfc9e3a452a4b6d126",
        id: 4,
        name: "Spiritual Kashi – 2 Nights 3 Days",
        details: "Varanasi Tour Packages",
        duration: "2 Nights 3 Days",
        people: "",
        destinations: ["2N Varanasi"],
        days: [
            {
                day: "Day 01: Arrival Varanasi (Airport/ Railway station)",
                content: [
                    "Arrive at Varanasi Airport or Railway station and meet our representative outside the exit gate of the arrival hall and transfer to the Hotel. Assistance during check-in at Hotel.",
                    "After taking a rest around 3 PM will start a city tour of famous & ancient Temples of Varanasi including Kashi Vishwanath temple, &Kalbhairav followed by world famous Ganga Aarti at Ganges Ghat.",
                ],
            },
            {
                day: "Day 2 Varanasi City Tour",
                content: [
                    "Early in the morning, we will be taken for a boat ride on the Ganges. It is a mystical and spiritual experience as you watch people offering water to the Sun God and devotees taking holy dip in the Ganges. We will visit all the famous Ghats of Varanasi via boat.Come back to the hotel for the breakfast.",
                    "Later visit the Bharat Mata temple, SankatMochan(Hanuman temple) , ManasMandir, BHU.& An excursion to Sarnath. Sarnath is the place where Buddha delivered his first sermon to his disciples . The attractions at Sarnath are the Buddha temples, the Dhamekhastupa ,Chaukhandi stupa and the archaeological museum .",
                    "Night stay in Varanasi.",
                ],
            },
            {
                day: "Day 3 Departure",
                content: [
                    "After breakfast check out from the hotel & transfer to schedule departure destination",
                ],
            },
        ],
        highlights: [
            "Ganga Aarti at Dashashwamedh Ghat",
            "Sarnath Tour",
            "Varanasi Temple Visit",
        ],
        includes: [
            "Accommodation in 3-star hotels",
            "Daily breakfast & dinner",
            "Local sightseeing guide",
        ],
        excludes: [
            "Train/Airfare",
            "Personal expenses",
            "Entry fees for monuments",
        ],
        price: [{ basePrice: 12499 }, { discount: 0 }, { finalPrice: 12499 }],
        image: "/banner/Ayodhya-Travels_1920X999_3.3.jpg",
        bookingLink: "https://example.com/book/varanasi-3-days",
        status: "active",
        createdBy: "65d9f8cfc9e3a452a4b6d999",
        createdAt: "2025-02-18T10:00:00.000Z",
        updatedAt: "2025-02-19T15:30:00.000Z",
    },
];

export default function TravelPackages() {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const filteredPackages = travelPackages.filter((pkg) =>
        pkg.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleData = (pkg) => {
        // console.log("pkg.......", pkg)
        setData(pkg);
        // console.log("pkg.......", pkg)

        navigate(`/packag/:${pkg.id}`);
    };

    return (
        <div className="  lg:w-[80%] w-[95%] mt-5">
            <h2 className="text-2xl font-bold mb-4">
                Explore Our Travel Packages
            </h2>
            <input
                type="text"
                placeholder="Search packages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 w-full p-2 border rounded-md"
            />
            <div className="flex flex-col w-[100%] gap-6 lg:my-10">
                {filteredPackages?.map((pkg) => (
                    <div
                        key={pkg.id}
                        className="shadow-lg rounded-xl overflow-hidden w-full flex lg:flex-row flex-col gap-5"
                    >
                        <img
                            src={pkg.image}
                            alt={pkg.name}
                            className="lg:w-[400px] w-full lg:h-80 h-60 object-cover rounded-lg"
                        />
                        <div className="p-4 w-full">
                            <h3 className="lg:text-[30px]  text-[18px] font-semibold ">
                                {pkg.name}
                            </h3>
                            <p className="text-gray-700">{pkg.details}</p>
                            <p className="text-gray-600">
                                {pkg.duration} | {pkg.people}
                            </p>
                            <b>Destinations</b>
                            <div className="flex lg:flex-row flex-col ">
                                {pkg.destinations?.map((item, i) => (
                                    <p key={i} className="pr-2 ">
                                        {item}
                                        <span className=" "> |</span>
                                    </p>
                                ))}
                            </div>

                            <div className=" lg:w-[50%] w-[90%] gap-5 flex flex-row items-center justify-start lg:mt-20 mt-5">
                                <button
                                    onClick={() => handleData(pkg)}
                                    className="mt-2 w-[200px] text-[18px] flex items-center justify-center py-2 px-2  bg-red-500 text-white  rounded-md cursor-pointer"
                                >
                                    Enquiry Now
                                </button>

                                <button
                                    onClick={() => navigate("/contact")}
                                    className="mt-2 w-[200px] text-[18px] flex items-center justify-center py-2 px-2  bg-red-500 text-white  rounded-md cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
