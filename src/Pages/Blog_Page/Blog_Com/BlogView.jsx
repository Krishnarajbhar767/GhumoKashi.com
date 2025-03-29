import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogView = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const blog = location.state?.blog; // Fetching blog data

    useEffect(() => {
        window.scrollTo(0, 0); // Ensure page starts at the top
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Back Button */}
            <button
                className="mb-5 flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm sm:text-base"
                onClick={() => navigate(-1)}
            >
                ⬅ Back
            </button>

            {blog ? (
                <div>
                    {/* Blog Title */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center sm:text-left">
                        {blog.title}
                    </h1>

                    {/* Blog Image */}
                    {blog.image && (
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg mb-4"
                        />
                    )}

                    {/* Blog Content */}
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                        {blog?.description}
                    </p>

                    {/* Blog Metadata */}
                    <div className="mt-4 text-gray-500 text-xs sm:text-sm flex flex-col sm:flex-row items-center sm:justify-between">
                        <span>📅 {blog.date || "Unknown Date"}</span>
                        <span>✍️ By {blog.author || "Anonymous"}</span>
                    </div>
                </div>
            ) : (
                <div className="text-center text-gray-500 text-lg">
                    No blog data available. <br />
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        onClick={() => navigate("/")}
                    >
                        Go to Home
                    </button>
                </div>
            )}
        </div>
    );
};

export default BlogView;
