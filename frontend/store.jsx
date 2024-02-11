import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./redux/reducer/reducer.jsx";

export const store = configureStore({
    reducer : {
        custom : customReducer
    }
})