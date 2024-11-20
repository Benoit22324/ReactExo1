import { useDispatch } from "react-redux"
import { modifyValue } from "../store/reducer/CounterReducer";

export const Counter = () => {
    const dispatch = useDispatch();

    return <>
        <button onClick={() => dispatch(modifyValue({type: "increment", value: 1}))}>Increment</button>
        <button onClick={() => dispatch(modifyValue({type: "decrement", value: 1}))}>Decrement</button>
    </>
}