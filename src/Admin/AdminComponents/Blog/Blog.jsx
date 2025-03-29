import { FaPlus } from "react-icons/fa";
import Button from "../Common/Button";
import SearchInput from "../Common/SearchInput";
import { useState } from "react";

const AdminBlog = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    return (
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
                    Add Blog
                </Button>
            </div>
            <hr className="mt-2" />
            {/* Cards Container */}
            <div className="grid grid-cols-3 gap-4 py-4"> </div>
        </div>
    );
};

export default AdminBlog;
