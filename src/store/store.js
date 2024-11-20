import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducer/CounterReducer";

export const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})