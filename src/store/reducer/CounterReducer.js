import { createSlice } from "@reduxjs/toolkit";

const CounterReducer = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        modifyValue(state, action) {
            if (action.payload.type === "increment") state.count += action.payload.value;
            else if (action.payload.type === "decrement") state.count -= action.payload.value;
        }
    }
})

export const {
    modifyValue
} = CounterReducer.actions;

export default CounterReducer.reducer;