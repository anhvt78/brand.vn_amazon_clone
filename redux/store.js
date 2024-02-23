import { configureStore } from "@reduxjs/toolkit";
import amazoneReducer from "../redux/amazonSlide";

export const store = configureStore({
    reducer: {amazoneReducer},

})