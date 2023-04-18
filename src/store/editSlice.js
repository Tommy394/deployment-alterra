import { createSlice } from "@reduxjs/toolkit";

export const editSlice = createSlice({
	name: "product",
	initialState: {
		isEdit: false,
	},
	reducers: {
		setToTrue: (state) => {
			state.isEdit = true;
		},
		setToFalse: (state) => {
			state.isEdit = false;
		},
	},
});

export const { setToTrue, setToFalse } = editSlice.actions;

export default editSlice.reducer;
