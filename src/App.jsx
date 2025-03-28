import { useEffect, useState } from "react";

import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import ComingSoon from "./Pages/ComingSoon";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import BlogPage from "./Pages/Blog_Page/BlogPage";
import Services_Page from "./Pages/Services_Page";
import ContactPage from "./Pages/Contact/ContactPage";
import AboutPage from "./Pages/About_Page/AboutPage";
import Package_Page from "./Pages/Package/Package_Page";
import { ImWhatsapp } from "react-icons/im";
import PackageView from "./Pages/Package/PK_Components/PackageView";
import PageNotFound from "./Components/Common/PageNotFound";
import AdminLayout from "./Admin/AdminLayout/AdminLayout";
import AdminDashboard from "./Admin/AdminComponents/Dashboard";

import AdminPackages from "./Admin/AdminComponents/Packages";
import AdminBlog from "./Admin/AdminComponents/Blog";
import AdminProfile from "./Admin/AdminComponents/Profile";
import AdminContact from "./Admin/AdminComponents/Contact";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./Components/Common/ProtectedRoute";
import AdminLoginForm from "./Admin/LoginForm/LoginForm";
import AdminWelcome from "./Admin/AdminComponents/Welcome";
import Cookies from "js-cookie";
import AdminServices from "./Admin/AdminComponents/Services/Services";
import { toast } from "react-toastify";
import { servicesEndpoints } from "./Services/endpoints/services/servicesEndpoints";
import { servicesApi } from "./Services/api/services/servicesApi";
import { setServices, setIsServicesLoaded } from "./Redux/slices/servicesSlice";
import { handleApiError } from "./Services/handleApiError";
function App() {
    const { isAdmin } = useSelector((state) => state.auth);
    const isServicesLoaded = useSelector((state) => state?.services?.isLoaded);
    const token = Cookies.get("token");
    const dispatch = useDispatch();

    // ON First Render Fetch Services For Shere Data Of Serviced To Amdin And Public
    const fetchServices = async () => {
        try {
            const res = await servicesApi.getAllServices();
            dispatch(setServices(res));
            dispatch(setIsServicesLoaded(true));
            return res.data;
        } catch (error) {
            const err = handleApiError(
                error,
                "error While Fetching The Services"
            );
            toast.error(`Error While Fetching Services Due To ${err}`);
        }
    };

    useEffect(() => {
        if (!isServicesLoaded) {
            fetchServices();
        }
    }, [isServicesLoaded]);
    return (
        <div className="w-full h-screen bg-transparent ">
            {!isAdmin && !token && <Navbar />}

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<AboutPage />} />

                <Route path="/service" element={<Services_Page />} />

                <Route path="/package" element={<Package_Page />} />

                <Route path="/packag/:id" element={<PackageView />} />

                <Route path="/blog" element={<BlogPage />} />

                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<PageNotFound />} />

                {/* Admin Login Page */}
                <Route path="/admin/login" element={<AdminLoginForm />} />

                {/* Admin Dashboard Routes */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="" element={<AdminWelcome />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="services" element={<AdminServices />} />
                    <Route path="packages" element={<AdminPackages />} />
                    <Route path="blog" element={<AdminBlog />} />
                    <Route path="profile" element={<AdminProfile />} />
                    <Route path="contact" element={<AdminContact />} />
                </Route>
            </Routes>

            {/* Private Admin Routes */}

            {/* <a href="tel:+6199942413" className="fixed bottom-30 right-8 z-40 h-[70px] cursor-pointer px-5 flex items-center justify-center bg-gray-800  text-white rounded-full ">
        <FaPhoneAlt className="nav-linker text-[30px]" />
      </a> */}

            <div
                onClick={() => alert("Open Whatsapp")}
                className="fixed bottom-10 right-10 z-40 h-[70px] cursor-pointer px-5 flex items-center justify-center  text-black rounded-lg "
            >
                {/* <ImWhatsapp /> */}

                <FloatingWhatsApp
                    phoneNumber="+91 9235171660"
                    accountName="Ghoomo Kashi"
                    statusMessage="Online"
                    avatar="/logo/GH_Logo[1].png"
                    allowEsc
                    allowClickAway
                    notification
                    notificationSound
                />
            </div>

            {/* footer section with responsive */}
            {!isAdmin && !token && <Footer />}
        </div>
    );
}

export default App;
