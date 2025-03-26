import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../AdminComponents/Common/Sidebar";
import Navbar from "../AdminComponents/Common/Navbar";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setIsAdmin } from "../../Redux/slices/authSlice";
import { useState } from "react";
import ConfirmationModal from "../../Components/Common/ConfirmationModal";
const AdminLayout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        setModalData({
            text1: "Logout Confirmation",
            text2: "Are you sure you want to log out?",
            btn1Text: "Yes, Logout",
            btn1Handler: () => {
                dispatch(setIsAdmin(false));
                Cookies.remove("token");
                navigate("/");
            },
            btn2Text: "Cancel",
            btn2Handler: () => setModalData(null),
        });
    };
    const [modalData, setModalData] = useState(null);
    return (
        <div className="flex min-h-screen bg-gray-100 ">
            <Sidebar handleLogout={handleLogout} />
            <div className="flex-1 flex flex-col ">
                <Navbar handleLogout={handleLogout} />
                <main
                    className="p-6  w-full h-screen overflow-y-scroll "
                    id="admin-main-outlet-container"
                >
                    <div className="mx-auto max-w-7xl h-full">
                        <Outlet />
                    </div>
                </main>
            </div>
            {modalData && <ConfirmationModal modalData={modalData} />}
        </div>
    );
};

export default AdminLayout;
