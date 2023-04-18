import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		addData: (state, action) => {
			if (Array.isArray(action.payload)) {
				state.products = action.payload;
			} else {
				state.products = [...state.products, action.payload];
			}
		},
		deleteData: (state, action) => {
			state.products = state.products.filter(
				(data) => data.id !== action.payload
			);
		},
		updateData: (state, action) => {
			const targetIndex = state.products.findIndex(
				(value) => value.id === action.payload.id
			);
			state.products.splice(targetIndex, 1, action.payload);
		},
	},
});

export const { addData, deleteData, updateData } = productSlice.actions;

export default productSlice.reducer;
