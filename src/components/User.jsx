import { useSelector, useDispatch } from "react-redux";
import { setNewName } from "../store/slices/userName.slice";
import { useState } from "react";

const User = () => {
    
    const [ value, setValue] = useState('')
    const dispactch = useDispatch()
    const userName = useSelector(state => state.username )

    const changeName = () => {
        dispactch(setNewName(value))
    }
    return (
        <div>
            <h1> {userName} </h1>
            <input 
            type="text"
            value= {value}
            onChange={(e) => setValue(e.target.value)}
             />
             <button onClick={changeName}>Cambiar Nombre</button>
        </div>
    );
};

export default User;