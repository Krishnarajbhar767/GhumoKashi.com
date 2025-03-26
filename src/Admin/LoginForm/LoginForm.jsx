import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserSecret, FaEye, FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setIsAdmin } from "../../Redux/slices/authSlice";

const AdminLoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmitHandler = (data) => {
        console.log("Admin Login Data ---->", data);
        Cookies.set("token", "HELLO JI");
        dispatch(setIsAdmin(true));
    };
    // Importing Token Cookies And isAdmin For Redirect When User Are Already Login
    const token = Cookies.get("token");
    const { isAdmin } = useSelector((state) => state.auth);
    if (token && isAdmin) return <Navigate to={"/admin/"} replace />;
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            {/* Container */}
            <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 w-96">
                {/* Secret Icon */}
                <div className="flex justify-center mb-4">
                    <FaUserSecret className="text-[#E8464B] text-6xl animate-pulse" />
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
                    Secret Login
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                    Authorized Access Only
                </p>

                {/* Login Form */}
                <form
                    className="mt-6 space-y-4"
                    onSubmit={handleSubmit(onSubmitHandler)}
                >
                    {/* Username */}
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold">
                            Username*
                        </label>
                        <input
                            {...register("username", {
                                required: "Username is required*",
                            })}
                            type="text"
                            className="w-full px-4 py-2 mt-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#E8464B] focus:outline-none text-gray-100 capitalize"
                            placeholder="Enter your username"
                        />
                        {errors?.username && (
                            <span className="text-red-500 text-sm my-1.5">
                                {errors?.username?.message}
                            </span>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold">
                            Password*
                        </label>
                        <div className="relative">
                            <input
                                {...register("password", {
                                    required: "Password is required*",
                                })}
                                type={showPassword ? "text" : "password"}
                                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#E8464B] focus:outline-none text-gray-100 "
                                placeholder="Enter your password"
                            />
                            {errors?.password && (
                                <span className="text-red-500 text-sm my-1.5">
                                    {errors?.password?.message}
                                </span>
                            )}
                            {/* Toggle Password Visibility */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-500 dark:text-gray-400"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-[#E8464B] text-white rounded-lg font-semibold hover:scale-105 transition transform shadow-md"
                    >
                        Login
                    </button>
                </form>

                {/* Secret Hint */}
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                    Only authorized personnel can enter.
                </p>
            </div>
        </div>
    );
};

export default AdminLoginForm;
