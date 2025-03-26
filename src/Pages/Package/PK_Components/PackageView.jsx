import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const PackageView = () => {
    const navigate = useNavigate();

    return (
        <div className="lg:w-[60%] w-full mx-auto flex flex-col gap-5 p-6 rounded-lg">
            <div className="bg-white  p-4 rounded-lg shadow-sm">
                <h1 className="lg:text-3xl text-[20px] font-bold text-gray-900 mb-4 text-center">
                    {data.name}
                </h1>
                <img
                    src={data?.image}
                    alt={data?.name}
                    className="w-full lg:h-100 object-cover rounded-md mb-6"
                />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
                <p className="text-lg text-gray-700 mb-4">
                    Duration: <strong>{data?.duration}</strong>
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Destinations:
                </h2>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                    {data?.destinations?.map((item, i) => (
                        <span
                            key={i}
                            className="bg-blue-100  px-3 py-1 rounded-md"
                        >
                            {i + 1}. {item}
                        </span>
                    ))}
                </div>
            </div>

            {data.days?.map((item, i) => (
                <div className="flex flex-col gap-2">
                    <span key={i} className="bg-blue-100  px-3 py-1 rounded-md">
                        {i + 1}. {item.day}
                    </span>
                    <div className="flex flex-col gap-2">
                        {item?.content?.map((item, i) => (
                            <p key={i}>{item} </p>
                        ))}
                    </div>
                </div>
            ))}

            {/* <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Highlights:</h2>
                <ul className="list-none space-y-2 text-gray-700">
                    {data?.highlights?.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <span className="text-blue-500">✔</span> {item}
                        </li>
                    ))}
                </ul>
            </div> */}

            {/* <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Includes:</h2>
                <ul className="list-none space-y-2 text-gray-700">
                    {data?.includes?.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <span className="text-green-500">✔</span> {item}
                        </li>
                    ))}
                </ul>
            </div> */}

            <div className="mt-6 text-center">
                <a
                    onClick={() => navigate("/contact")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-red-700"
                >
                    Book Now
                </a>
            </div>
        </div>
    );
};

export default PackageView;
