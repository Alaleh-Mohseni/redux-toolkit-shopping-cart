import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToCartAPI, removeFromCartAPI, fetchCart } from "../api/cart";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  loading: boolean;
  error: string | null;
};

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

export const loadCart = createAsyncThunk("cart/load", async () => {
  const data = await fetchCart();
  return data.items;
});

export const addToCart = createAsyncThunk(
  "cart/add",
  async (item: { id: string; title: string; price: number }) => {
    const data = await addToCartAPI(item);
    return data.items;
  },
);

export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (id: string) => {
    const data = await removeFromCartAPI(id);
    return data.items;
  },
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});
