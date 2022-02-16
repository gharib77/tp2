import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./postsReducer";

 const store = configureStore({
    reducer:{
        posts:postsSlice.reducer
    }
})
export default store