import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import servicesReducer from "../slices/servicesSlice";
import packagesReducer from "../slices/packagesSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        services: servicesReducer,
        packages: packagesReducer,
    },
});

export default store;
