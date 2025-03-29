export const servicesEndpoints = {
    getAllServices: "/service/all",
    createServices: "/service/create",
    deleteServiceById: (id) => `/service/${id}`,
    editServiceById: (id) => `/service/${id}`,
};
