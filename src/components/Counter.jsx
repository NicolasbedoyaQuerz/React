import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setNewValue } from "../store/slices/counter.slices";
import { useState } from "react";

const Counter = () => {


    const [value, setValue] = useState('')
    const counter = useSelector(state => state.counter );
    const dispactch = useDispatch()

    const incrementCounter = () => {
        dispactch(increment())
    }

    const decrementCounter = () => {
        dispactch(decrement())
    }

    const changeValue = () => {
        const newNumber = Number(value)
        dispactch(setNewValue(newNumber))
    }

    return (
        <div>
            <h1> {counter}</h1>
            <button onClick={decrementCounter}> Decrementar</button>
            <button onClick={incrementCounter}> incrementer</button>
            <input 
            type="number"
            value= {value}
            onChange={(e) => setValue(e.target.value)}
             />
            <button onClick={changeValue}>nuevo valor</button>
        </div>
    );
};

export default Counter;