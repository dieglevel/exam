import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "@/types/Product";



const initialState: Product[] = [];

const productRedux = createSlice({
    name: "products",
    initialState: {
        value: initialState,
    },
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.value = action.payload;
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.value.push(action.payload);
        },
    },
});

export const productsStore = (state: RootState) => 
    state.products;

export const { setProducts, addProduct } = productRedux.actions;

export default productRedux.reducer;