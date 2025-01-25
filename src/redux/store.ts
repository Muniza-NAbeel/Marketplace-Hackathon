'use client';
import { configureStore } from "@reduxjs/toolkit";
import CarSlice from "./CarSlice";

export const store = configureStore({
  reducer: {
    cart: CarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
