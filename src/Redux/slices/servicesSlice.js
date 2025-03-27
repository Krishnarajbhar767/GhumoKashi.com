import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    services: [],
};
const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        setIsAdmin: (state, value) => {
            state.isAdmin = value.payload;
        },
    },
});

export const {} = servicesSlice.actions;
export default servicesSlice.reducer;
