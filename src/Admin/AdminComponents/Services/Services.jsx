import { FaPlus } from "react-icons/fa";
import Button from "../Common/Button";
import Heading from "../Common/Heading";
import SearchInput from "../Common/SearchInput";
import ServiceCard from "./ServiceCard";
import { useMemo, useState } from "react";
import ConfirmationModal from "../../../Components/Common/ConfirmationModal";
import {
    CreateServiceModal,
    EditServiceModal,
    ViewServiceModal,
} from "./ServiceAddEditPreviewModal";

const AdminServices = () => {
    const servicesData = useMemo(() => [
        {
            id: 1,
            title: "Luxury Beach Resort",
            content: "Enjoy a relaxing stay at a beautiful beach resort.",
            imageUrl: "https://picsum.photos/200",
        },
        {
            id: 2,
            title: "Luxury Beach Resort",
            content: "Enjoy a relaxing stay at a beautiful beach resort.",
            imageUrl: "https://picsum.photos/200",
        },
        {
            id: 3,
            title: "Luxury Beach Resort",
            content: "Enjoy a relaxing stay at a beautiful beach resort.",
            imageUrl: "https://picsum.photos/200",
        },
    ]);

    const [modalData, setModalData] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const [isViewing, setIsViewing] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    // Preview Services Handler
    const handlePreview = (service) => {
        setIsViewing(service);
        console.log("IS VIEWING ___", isViewing);
    };
    // Edit Services Handler
    const handleEdit = (service) => {
        setIsEditing(service);
    };
    // Delete Services Handler
    const handleDelete = (service) => {
        setModalData({
            text1: "Delete Confirmation",
            text2: "Are you sure you want to delete this service? This action cannot be undone.",
            btn1Text: "Yes, Delete",
            btn1Handler: () => {
                console.log("Service Data --->", service); // Call the delete function
                setModalData(null); // Close modal after deletion
            },
            btn2Text: "Cancel",
            btn2Handler: () => setModalData(null),
        });
    };

    const filteredServices = useMemo(() => {
        if (!searchQuery.trim()) return servicesData; //  Show all services if search is empty

        return servicesData
            .filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .sort((a, b) => a.title.localeCompare(b.title)); //  Alphabetically sorted
    }, [searchQuery, servicesData]);

    return (
        // Container
        <div>
            {/* Search Input */}
            <div className="flex items-center justify-between">
                <SearchInput onSearch={setSearchQuery} />
                <Button
                    icon={FaPlus}
                    iconPosition="left"
                    variant="primary"
                    size="md"
                    onClick={() => setIsCreating(true)}
                >
                    Add Services
                </Button>
            </div>
            <hr className="mt-2" />
            {/* Cards Container */}
            <div className="grid grid-cols-3 gap-4 py-4">
                {filteredServices.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                        onPreview={handlePreview}
                    />
                ))}
            </div>

            {modalData && <ConfirmationModal modalData={modalData} />}
            {isViewing && (
                <ViewServiceModal
                    onClose={() => setIsViewing(false)}
                    service={isViewing}
                />
            )}
            {isEditing && (
                <EditServiceModal
                    onClose={() => setIsEditing(false)}
                    defaultValues={isEditing}
                    onSubmit={() => {}}
                />
            )}

            {isCreating && (
                <CreateServiceModal
                    onClose={() => setIsCreating(false)}
                    onSubmit={(data) => {
                        alert("data --->", data);
                    }}
                />
            )}
        </div>
    );
};

export default AdminServices;
