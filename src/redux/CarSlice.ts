"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Corrected CartItem interface
interface CartItem {
  id: number;
  name: string;
  type: string;
  pricePerDay: number; 
  image: string;
}

const CarSlice = createSlice({
  name: "Cart",
  initialState: [] as CartItem[],
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      state.push(action.payload);
    },
  
    remove(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = CarSlice.actions;
export default CarSlice.reducer;
