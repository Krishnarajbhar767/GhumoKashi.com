import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TravelPackages() {
    const navigate = useNavigate();
    const travelPackages = useSelector((state) => state.packages.packages);

    const [search, setSearch] = useState("");

    const filteredPackages = travelPackages.filter((pkg) =>
        pkg.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleData = (pkg) => {
        navigate(`/packag/${pkg._id}`, { state: { data: pkg } });
    };

    return (
        <div className="lg:w-[80%] w-[95%] mx-auto mt-8 ">
            {/* Title */}
            <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
                Explore Our Travel Packages
            </h2>

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search packages..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full lg:w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                />
            </div>

            {/* Packages List */}
            <div className="flex flex-col gap-6 py-4">
                {filteredPackages.map((pkg) => (
                    <div
                        key={pkg._id}
                        className="shadow-lg rounded-xl overflow-hidden flex flex-col lg:flex-row bg-white border border-gray-200 hover:shadow-xl transition-all"
                    >
                        {/* Package Image */}
                        <img
                            src={pkg.ImageUrl}
                            alt={pkg.title}
                            className="lg:w-[400px] w-full h-full object-cover"
                        />

                        {/* Package Details */}
                        <div className="p-6 w-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                    {pkg.title}
                                </h3>
                                <p className="text-gray-700 text-sm mb-4">
                                    {pkg.content}
                                </p>
                                <p className="text-gray-600 font-medium mb-3">
                                    🕒 {pkg.days}
                                </p>

                                {/* Destinations */}
                                <b className="text-gray-900">Destinations:</b>
                                <div className="text-gray-700 text-sm flex flex-wrap gap-2 mt-1">
                                    {pkg.destination.map((item, i) => (
                                        <span
                                            key={i}
                                            className="bg-red-100 text-red-600 px-2 py-1 rounded-md"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-6 flex gap-4">
                                <button
                                    onClick={() => handleData(pkg)}
                                    className="flex-1 bg-red-500 text-white font-medium py-3 rounded-md shadow-md hover:bg-red-600 transition-all"
                                >
                                    Enquiry Now
                                </button>

                                <button
                                    onClick={() => navigate("/contact")}
                                    className="flex-1 bg-gray-800 text-white font-medium py-3 rounded-md shadow-md hover:bg-gray-900 transition-all"
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
