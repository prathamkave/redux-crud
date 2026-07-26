import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../api/productApi";

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async (_, { rejectWithValue }) => {
		try {
			const products = await getProducts();

			return products;
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.message || "Failed to fetch products",
			);
		}
	},
);

const initialState = {
	products: [],
	status: "idle",
	error: null,
};

const productSlice = createSlice({
	name: "products",

	initialState,

	reducers: {},

	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})

			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.products = action.payload;
			})

			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export default productSlice.reducer;
