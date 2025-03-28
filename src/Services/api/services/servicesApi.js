import axiosInstance from "../../apiConnector";
import { servicesEndpoints } from "../../endpoints/services/servicesEndpoints";
import { handleApiError } from "../../handleApiError";

export const servicesApi = {
    getAllServices: async () => {
        const res = await axiosInstance.get(servicesEndpoints.getAllServices);
        return res?.data.data;
    },
    createServices: async (data) => {
        const res = await axiosInstance.post(
            servicesEndpoints.createServices,
            data
        );
        return res?.data?.data;
    },
    deleteServiceById: async (id) => {
        const res = await axiosInstance.delete(
            servicesEndpoints.deleteServiceById(id)
        );
        return res.data;
    },
};
