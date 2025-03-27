import DashboardCard from "./Common/DashboardCard";
import Heading from "./Common/Heading";
import { MdGroups2 } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { TfiPackage } from "react-icons/tfi";
import { IoNewspaperOutline } from "react-icons/io5";

const AdminDashboard = () => {
    return (
        <div>
            <div>
                <Heading text={"Dashboard"} />
            </div>
            {/* Admin Dashboard Cards */}
            <div className="grid grid-cols-4  gap-2 mt-2">
                <DashboardCard
                    Icon={<MdGroups2 />}
                    heading={"Total User"}
                    iconColor={"red"}
                    count={"2,856"}
                    growth={true}
                    growthData={"12%"}
                />
                <DashboardCard
                    Icon={<IoBag />}
                    heading={"Total Services"}
                    iconColor={"blue"}
                    count={"8,757"}
                    growth={false}
                    growthData={"12%"}
                />
                <DashboardCard
                    Icon={<TfiPackage />}
                    heading={"Total Package"}
                    iconColor={"green"}
                    count={"9,097"}
                    growth={true}
                    growthData={"12%"}
                />
                <DashboardCard
                    Icon={<IoNewspaperOutline />}
                    heading={"Total Blog"}
                    iconColor={"blue"}
                    count={"29"}
                    growth={false}
                    growthData={"12%"}
                />
            </div>
        </div>
        // <h1 className="text-3xl font-bold text-center mt-10">
        //     Admin Dashboard
        // </h1>
    );
};

export default AdminDashboard;
