import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const counterSlice = createSlice({
	name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => {
            return state + 1
        },
        decrement: state => {
                return state - 1;
        },
        setNewValue : (state, action) => {
            return action.payload
        }
    }
})

export const { increment, decrement, setNewValue } = counterSlice.actions;

export default counterSlice.reducer;