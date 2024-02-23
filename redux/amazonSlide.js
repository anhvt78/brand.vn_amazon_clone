import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    userInfo: [],
}

export const amazonSlide = createSlice({
    name: "amazon",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products = action.payload
        }
    }
})

export const {addToCart} = amazonSlide.actions;
export default amazonSlide.reducer;