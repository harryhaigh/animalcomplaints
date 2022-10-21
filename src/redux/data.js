import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		postcode: "0000",
		data: {},
	},
	reducers: {
		updateData: (state, action) => {
			console.log("Action");
			console.log(action.payload);
			state.data = action.payload;
		},
		updatePostcode: (state, action) => {
			state.postcode = action.payload;
		},
	},
});

export const { updateData, updatePostcode } = dataSlice.actions;
export default dataSlice.reducer;
