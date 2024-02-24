import { configureStore } from "@reduxjs/toolkit";
import amazonReducer from "../redux/amazonSlide";

export const store = configureStore({
    reducer: {amazonReducer},

})