import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: "page",
    initialState: {
        page: "Home"
    },
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload;
        }
    }
});

export const { changePage } = pageSlice.actions;
export default pageSlice.reducer;